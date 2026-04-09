# Render Deployment Guide - E-Commerce API

## Overview
This guide covers deploying the Spring Boot e-commerce application to Render with PostgreSQL.

---

## 1. ENVIRONMENT VARIABLES FOR RENDER

Set these in Render Dashboard → Services → Environment Variables:

### Database Configuration
```
DATABASE_URL=postgresql://username:password@hostname:port/dbname
DB_POOL_SIZE=5
DB_MIN_IDLE=1
```

**Note:** Render provides `DATABASE_URL` automatically when linked to PostgreSQL database.

### Twilio Configuration (Optional)
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_VERIFY_SERVICE_SID=your_verify_sid
```

### Spring Boot Configuration
```
SPRING_PROFILES_ACTIVE=prod
JAVA_OPTS=-Xmx512m -Xms256m
PORT=8080
```

---

## 2. STEPS TO DEPLOY ON RENDER

### Step 1: Prepare Your Repository
```bash
cd c:\Users\pesar\OneDrive\Documents\projectss\Youtube\Online-Application
git add .
git commit -m "Configure for Render deployment"
git push origin main  # or your branch name
```

### Step 2: Connect Repository to Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repository
4. Select the branch and approve repository access

### Step 3: Configure the Web Service
**Basic Configuration:**
- **Name:** ecommerce-api
- **Root Directory:** e-commerce-backend
- **Runtime:** Docker
- **Region:** Oregon (or your preference)
- **Plan:** Standard (free tier struggles with Spring Boot + DB)

**Build & Deploy:**
- **Build Command:** (Leave empty - uses Dockerfile)
- **Start Command:** (Leave empty - uses Dockerfile CMD)
- **Auto-Deploy:** Enable (auto-redeploy on git push)

### Step 4: Create PostgreSQL Database on Render
1. In Render Dashboard, click **New** → **PostgreSQL**
2. **Name:** ecommerce-db
3. **Database:** ecommerce
4. **User:** postgres
5. **Region:** Oregon (same as service)
6. **Plan:** Free or Standard
7. Click **Create Database**

### Step 5: Link Database to Web Service
1. Go to Web Service → **Environment** tab
2. Click **Add Environment Variable**
3. Select **Database Connection String** and choose `ecommerce-db`
4. Variable name will be `DATABASE_URL` (auto-set)

### Step 6: Add Additional Environment Variables in Render Dashboard
Navigate to **Environment** tab and add:

```
SPRING_PROFILES_ACTIVE=prod
JAVA_OPTS=-Xmx512m -Xms256m
PORT=8080
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_VERIFY_SERVICE_SID=your_verify_sid
```

### Step 7: Deploy
1. Click **Deploy**
2. Monitor logs in **Logs** tab
3. Wait for green "Live" status

---

## 3. DATABASE URL FORMAT

Render provides CONNECTION STRING in format:
```
postgresql://username:password@hostname:port/database
```

**Example:**
```
postgresql://postgres:abc123@dpg-xyz.render.com:5432/ecommerce
```

The application automatically converts this to proper JDBC format:
```
jdbc:postgresql://dpg-xyz.render.com:5432/ecommerce
```

---

## 4. KEY CONFIGURATION CHANGES

### application.properties
✅ **Fixed Issues:**
- Removed duplicate `spring.jpa.hibernate.ddl-auto` entries
- Environment variables for all sensitive data
- HikariCP connection pool tuning
- Changed DDL from `create-drop` to `validate` (production-safe)
- Added logging configuration
- Moved Twilio credentials to env vars

### pom.xml
✅ **Fixed Issues:**
- Updated Java version to 17 (compatible with Spring Boot 2.7.13)
- Added Maven compiler plugin configuration
- Added Jakarta Bean Validation API
- Added Spring Boot Actuator (for health checks)
- Added Hibernate Validator
- Added HikariCP explicit dependency
- Added Maven Surefire plugin for tests

### render.yaml
✅ **Updated:**
- Changed from `ecommerce-backend` to `ecommerce-api`
- Added health check interval and timeout
- Configured Java memory limits (-Xmx512m)
- Added DB pool configuration variables
- PostgreSQL version specified (14)
- Updated health check path to `/api/actuator/health`

---

## 5. TROUBLESHOOTING

### HikariCP Connection Pool Errors
**Error:** `HikariPool-1 - Connection is not available with timeout after 30000 ms`

**Solutions:**
1. Check `DATABASE_URL` is correct in Render Environment
2. Verify PostgreSQL database is created and running
3. Check username/password match
4. Increase `DB_POOL_SIZE` to 10 if under load
5. Verify PostgreSQL is in same region (Oregon)

### Timeout on Startup
**Error:** `org.postgresql.util.PSQLException: Connection attempt timed out`

**Solutions:**
1. Ensure database service is started (check Render dashboard)
2. Wait 2-3 minutes after database creation
3. Verify `DATABASE_URL` is not malformed
4. Check Render service quota/limits

### Schema Validation Errors
**Error:** `org.hibernate.tool.schema.spi.SchemaManagementException: Schema-validation: missing table`

**Solutions:**
1. This is expected if tables don't exist
2. Change `spring.jpa.hibernate.ddl-auto=validate` to `update` temporarily:
   ```properties
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Deploy once to auto-create schema
4. Change back to `validate` for next deployments

### Timezone Errors
**Error:** `FATAL: invalid value for parameter "TimeZone": "Asia/Calcutta"`

**Fix:** Already configured in application-prod.properties:
```properties
spring.jpa.properties.hibernate.jdbc.time_zone=UTC
```

### High Memory Usage
If Render shows memory warnings:
```
JAVA_OPTS=-Xmx400m -Xms256m
```
Reduce max heap to 400MB for free tier.

---

## 6. HEALTH CHECK & MONITORING

### Health Endpoint
- **URL:** `https://your-service-name.onrender.com/api/actuator/health`
- **Response:** 
  ```json
  {
    "status": "UP"
  }
  ```

### Database Health
- **URL:** `https://your-service-name.onrender.com/api/actuator/health/db`
- Verifies PostgreSQL connectivity

### Logs in Render
View real-time logs at: **Services** → **Logs** tab

### Common Successful Startup Log Indicators
```
Started ECommerceApplication in X.XXX seconds
Tomcat started on port(s): 8080 (http)
```

---

## 7. DOCKERFILE NOTES

Your existing Dockerfile should be compatible. If not, use this:

```dockerfile
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/target/ecommerce-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-Dspring.profiles.active=prod", "-Xmx512m", "-Xms256m", "-jar", "app.jar"]
```

Place in `e-commerce-backend/Dockerfile`

---

## 8. POST-DEPLOYMENT VERIFICATION

1. **Check service is running:**
   ```bash
   curl https://your-service-name.onrender.com/api/actuator/health
   ```

2. **Check database connection:**
   ```bash
   curl https://your-service-name.onrender.com/api/actuator/health/db
   ```

3. **Check logs for errors:**
   - Render Dashboard → Logs tab

4. **Monitor resource usage:**
   - Dashboard → Metrics tab

---

## 9. NEXT STEPS

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Configure for Render production deployment"
   git push
   ```

2. Create Render account: https://render.com

3. Follow steps 1-7 above to deploy

4. If you see startup errors, check logs and refer to troubleshooting section

---

## 10. HELPFUL LINKS

- [Render Docs - Java/Spring Boot](https://render.com/docs/deploy-java)
- [PostgreSQL on Render](https://render.com/docs/databases)
- [Environment Variables](https://render.com/docs/environment-variables)
- [Spring Boot - External Configuration](https://spring.io/projects/spring-boot)
- [HikariCP Configuration](https://github.com/brettwooldridge/HikariCP/wiki/Configuration)

---

## Remember
- **Free tier** can be slow for Spring Boot. Consider **Standard** plan ($7/month) for production.
- **PostgreSQL** free tier has auto-shutdown after 7 days; upgrade to keep it always running.
- **Keep secrets** (API keys) in Render Environment Variables, NOT in code.
- **Test locally** before pushing to Render.


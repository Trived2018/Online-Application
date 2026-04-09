## Quick Reference - Render Environment Variables

Copy & paste these into Render Dashboard → Environment Variables:

```
DATABASE_URL=postgresql://user:password@hostname:5432/ecommerce
SPRING_PROFILES_ACTIVE=prod
PORT=8080
JAVA_OPTS=-Xmx512m -Xms256m
DB_POOL_SIZE=5
DB_MIN_IDLE=1
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_VERIFY_SERVICE_SID=your_verify_sid
```

### Where to Find These Values

1. **DATABASE_URL**: Render auto-provides when PostgreSQL is linked
2. **SPRING_PROFILES_ACTIVE**: `prod` (for production configuration)
3. **PORT**: `8080` (default Spring Boot port)
4. **JAVA_OPTS**: JVM memory settings (adjust for your plan)
5. **DB_POOL_SIZE**: PostgreSQL connection pool size (5 for free tier)
6. **DB_MIN_IDLE**: Minimum idle connections (1 for free tier)
7. **TWILIO_***: Get from Twilio console (optional if not using SMS)

### How to Add to Render

1. Go to Dashboard → Services → Your Service Name
2. Click "Environment" tab
3. Click "Add Environment Variable"
4. Enter Key and Value
5. Click "Save"
6. Your service will auto-redeploy

### For Multiple Variables

Use the**Raw Editor** (if available) and paste all at once.


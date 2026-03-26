package com.youtube.ecommerce.service;

import com.youtube.ecommerce.dao.RoleDao;
import com.youtube.ecommerce.dao.UserDao;
import com.youtube.ecommerce.entity.Role;
import com.youtube.ecommerce.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        User user = new User();
        user.setUserName("raj123");
        user.setUserPassword(getEncodedPassword("raj@123"));
        user.setUserFirstName("raj");
        user.setUserLastName("sharma");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);
    }

    private String normalizePhoneNumber(String phoneNumber) {
        if (phoneNumber == null) {
            return null;
        }
        // Remove all whitespace, dashes, parentheses, and spaces
        String normalized = phoneNumber.trim().replaceAll("[\\s\\-\\(\\)]", "");
        
        // Ensure it starts with +
        if (!normalized.startsWith("+")) {
            normalized = "+" + normalized;
        }
        
        System.out.println("DEBUG normalizePhoneNumber: Input='" + phoneNumber + "' -> Output='" + normalized + "'");
        return normalized;
    }

    public User registerNewUser(User user) {
        // Normalize phone number first
        if (user.getUserPhoneNumber() != null && !user.getUserPhoneNumber().isEmpty()) {
            String normalizedPhone = normalizePhoneNumber(user.getUserPhoneNumber());
            user.setUserPhoneNumber(normalizedPhone);
            System.out.println("DEBUG registerNewUser: Checking duplicate for normalized phone: " + normalizedPhone);
        }

        // Check for duplicate registration by phone number
        if (user.getUserPhoneNumber() != null && !user.getUserPhoneNumber().isEmpty()) {
            boolean phoneExists = userDao.findByUserPhoneNumber(user.getUserPhoneNumber()).isPresent();
            System.out.println("DEBUG registerNewUser: Phone '" + user.getUserPhoneNumber() + "' exists in DB: " + phoneExists);
            
            if (phoneExists) {
                String errorMsg = "User with phone number " + user.getUserPhoneNumber() + " already exists. Please use a different phone number or login if you already have an account.";
                System.err.println("ERROR: " + errorMsg);
                throw new RuntimeException(errorMsg);
            }
        }

        // Check for duplicate registration by username (email)
        if (user.getUserName() != null && !user.getUserName().isEmpty()) {
            String normalizedEmail = user.getUserName().toLowerCase().trim();
            boolean emailExists = userDao.findByUserName(normalizedEmail).isPresent();
            System.out.println("DEBUG registerNewUser: Email '" + normalizedEmail + "' exists in DB: " + emailExists);
            
            if (emailExists) {
                String errorMsg = "User with email/username " + user.getUserName() + " already exists. Please use a different email or login if you already have an account.";
                System.err.println("ERROR: " + errorMsg);
                throw new RuntimeException(errorMsg);
            }
            // Store email in normalized form (lowercase)
            user.setUserName(normalizedEmail);
        }

        Role role = roleDao.findById("User").get();
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(role);
        user.setRole(roleSet);

        String password = getEncodedPassword(user.getUserPassword());
        user.setUserPassword(password);

        System.out.println("INFO UserService: ✓ NEW USER REGISTERED - Phone: " + user.getUserPhoneNumber() + " | Email: " + user.getUserName());
        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
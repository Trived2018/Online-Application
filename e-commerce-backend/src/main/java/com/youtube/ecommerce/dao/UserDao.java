package com.youtube.ecommerce.dao;

import com.youtube.ecommerce.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDao extends CrudRepository<User, String> {
    Optional<User> findByUserPhoneNumber(String phoneNumber);
}
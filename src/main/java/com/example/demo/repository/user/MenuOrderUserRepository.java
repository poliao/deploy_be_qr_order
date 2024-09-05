package com.example.demo.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.user.MenuOrder_user;

@Repository
public interface MenuOrderUserRepository extends JpaRepository<MenuOrder_user, Long> {
    // คุณสามารถเพิ่ม custom query methods ได้หากจำเป็น
}

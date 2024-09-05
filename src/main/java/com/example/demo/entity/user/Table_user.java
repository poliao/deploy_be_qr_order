package com.example.demo.entity.user;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Table_user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;

    private String tableName;
    private String status;

    // Getters and Setters
}

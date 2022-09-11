package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Table(name = "t_categories")
@Entity
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id", nullable = false)
    private Long id; // 아이디

    @Column(name = "category_code", nullable = false)
    private String code;

    @Column(name = "category_kor", nullable = false)
    private String kor;

    @Column(name = "category_order", nullable = false)
    private int order;

}

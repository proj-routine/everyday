package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Table(name = "t_tools")
@Entity
public class Tools {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tool_id", nullable = false)
    private Long id; // 아이디

    @Column(name = "tool_code", nullable = false)
    private String code;

    @Column(name = "tool_kor", nullable = false)
    private String kor;

    @Column(name = "tool_order", nullable = false)
    private int order;

    @Column(name = "deleted", nullable = false)
    private Boolean deleted;

}

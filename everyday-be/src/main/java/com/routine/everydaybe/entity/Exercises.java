package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Table(name = "t_exercises")
@Entity
public class Exercises {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exercise_id", nullable = false)
    private Long id; // 아이디

    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    @Column(name = "tool_ids", nullable = false)
    private String toolIds;

    @Column(name = "eng", nullable = false)
    private String eng;

    @Column(name = "kor", nullable = false)
    private String kor;

    @Column(name = "ordered", nullable = false)
    private int ordered;
}

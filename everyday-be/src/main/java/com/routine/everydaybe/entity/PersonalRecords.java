package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Table(name = "t_personal_records")
@Entity
public class PersonalRecords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personal_records_id", nullable = false)
    private Long id; // 아이디

    @Column(name = "exercise_id", nullable = false)
    private Long exerciseId;

    @Column(name = "record_date", nullable = false)
    private LocalDate recordDate;

}

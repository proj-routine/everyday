package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Table(name = "t_personal_record_data")
@Entity
public class PersonalRecordData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personal_record_data_id", nullable = false)
    private Long id; // 아이디

    @Column(name = "personal_record_id", nullable = false)
    private Long personalRecordId;

    @Column(name = "kg")
    private int kg;

    @Column(name = "counts")
    private int counts;

    @Column(name = "times")
    private int times;

    @Column(name = "ordered")
    private int ordered;

    @Column(name = "done")
    private Boolean done;
}

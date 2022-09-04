package com.routine.everydaybe.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Getter
@Setter
@Entity
public class Rounds {
    @Id
    @GeneratedValue
    private Long id;

    // 운동 이름
    private String name;

    // 운동 종류[단일|세트]
    private Boolean type;

    @ManyToMany
    private List<Trainings>  trainings;
}

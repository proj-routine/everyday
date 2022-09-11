package com.routine.everydaybe.vo;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class DateByMonthQueryVO {
    private int month;
    private List<Integer> date ;
}

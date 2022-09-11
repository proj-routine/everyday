package com.routine.everydaybe.vo;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PersonalRecordsByDateQueryVO {

    private LocalDate date;

    private Long categoryId;
    private String categoryKor;

    private Long exerciseId;
    private String exerciseKor;



    /** inner class */
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class data {
        private int kg ;
        private int count ;
        private int time ;
        private Boolean done ;
    }
}



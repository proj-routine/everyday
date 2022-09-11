package com.routine.everydaybe.vo;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PersonalRecordDataByDateQueryVO {

    private String apiId;
    private String active;
    private Long companyId;

}

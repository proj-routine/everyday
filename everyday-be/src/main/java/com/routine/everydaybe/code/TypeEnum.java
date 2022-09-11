package com.routine.everydaybe.code;


import lombok.Getter;

import java.util.List;
import java.util.StringJoiner;

@Getter
public enum TypeEnum {
    WEIGHT(0, "무게"),
    NUMBER(1, "횟수"),
    TIME(2,"시간");

    private int typeId;
    private String kor ;

    TypeEnum(int i, String 무게) {
    }

    public static String getTypeIdsWithCommaByEnums(TypeEnum[] typeEnums){
        StringJoiner sj = new StringJoiner(",");
        for (TypeEnum type:typeEnums) {
            sj.add(Integer.toString(type.typeId));
        }
        return sj.toString();
    }
}

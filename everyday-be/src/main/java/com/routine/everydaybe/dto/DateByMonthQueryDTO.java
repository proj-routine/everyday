package com.routine.everydaybe.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class DateByMonthQueryDTO {
	@Schema(description = "Format yyyy-MM-dd(날짜는 무시됨)", example = "2022-02-22")
	private LocalDate searchDate = LocalDate.now();

}

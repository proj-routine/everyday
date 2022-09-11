package com.routine.everydaybe.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class PersonalRecordsByDateQueryDTO {
	@Schema(description = "Format yyyy-MM-dd", example = "2022-02-22")
	private LocalDate searchDate = LocalDate.now();

}

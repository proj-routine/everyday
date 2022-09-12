package com.routine.everydaybe.controller;

import com.routine.everydaybe.dto.DateByMonthQueryDTO;
import com.routine.everydaybe.dto.PersonalRecordDataByDateQueryDTO;
import com.routine.everydaybe.dto.PersonalRecordsByDateQueryDTO;
import com.routine.everydaybe.vo.DateByMonthQueryVO;
import com.routine.everydaybe.vo.PersonalRecordDataByDateQueryVO;
import com.routine.everydaybe.vo.PersonalRecordsByDateQueryVO;
import com.routine.everydaybe.vo.TestVO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/everyday/records")
public class PersonalRecordsController {
    @Operation(summary = "test", description = "test", method = "GET")
    @GetMapping("/test")
    public TestVO test() {
        return TestVO.builder().test("test").build();
    }
    @GetMapping
    public DateByMonthQueryVO dateByMonthQuery(DateByMonthQueryDTO dto) {
        return null;
    }

    @GetMapping("/{date}")
    public List<PersonalRecordsByDateQueryVO> personalRecordsByDateQuery(PersonalRecordsByDateQueryDTO dto) {
        return null;
    }

    @GetMapping("/{date}/detail")
    public List<PersonalRecordDataByDateQueryVO> PersonalRecordDataByDateQuery(PersonalRecordDataByDateQueryDTO dto) {
        return null;
    }
}

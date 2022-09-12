package com.routine.everydaybe.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PersonalRecordsControllerTest {

    @Autowired
    PersonalRecordsController personalRecordsController;

    private MockMvc mock;

    @BeforeEach
    public void setup(){
        mock = MockMvcBuilders.standaloneSetup(personalRecordsController).build();
    }

//    @Test
//    void test1() {
//        new RequestBuilder();
//        mock.perform()
//
//    }
}
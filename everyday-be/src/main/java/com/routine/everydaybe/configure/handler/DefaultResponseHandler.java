package com.routine.everydaybe.configure.handler;


import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice({"com.routine.everydaybe.controller"})
public class DefaultResponseHandler implements ResponseBodyAdvice {
    @Override
    public boolean supports(MethodParameter returnType, Class converterType) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType, Class selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {
        // response common
        Map responseData = new HashMap();
        responseData.put("code" , 1);
        responseData.put("longMessage" , "success");
        responseData.put("shortMessage" , "success");
        responseData.put("contents" , body);

        return responseData;
    }
}

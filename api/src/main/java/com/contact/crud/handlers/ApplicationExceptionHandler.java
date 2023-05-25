package com.contact.crud.handlers;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.contact.crud.dtos.ValidationMessageResponseDto;

@ControllerAdvice
public class ApplicationExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Collection<ValidationMessageResponseDto>> handle(MethodArgumentNotValidException exception) {

        var errors = exception.getBindingResult().getFieldErrors().stream().map((error) -> {
            return new ValidationMessageResponseDto(error.getField(), error.getDefaultMessage());
        }).collect(Collectors.toList());

        return ResponseEntity.badRequest().body(errors);
    }
}

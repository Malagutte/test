package com.contact.crud.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ValidationMessageResponseDto {

    private String field;

    private String message;

}

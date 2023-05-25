package com.contact.crud.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactRequestDto {

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String email;

    @NotBlank(message = "Phone is mandatory")
    private String phone;
}

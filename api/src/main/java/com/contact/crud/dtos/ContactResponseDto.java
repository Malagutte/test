package com.contact.crud.dtos;

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactResponseDto {

    private UUID id;

    private String name;

    private String email;

    private String phone;
}

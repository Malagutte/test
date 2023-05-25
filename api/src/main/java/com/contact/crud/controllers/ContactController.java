package com.contact.crud.controllers;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.Collection;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.contact.crud.converter.ModelMapperCustom;
import com.contact.crud.dtos.ContactRequestDto;
import com.contact.crud.dtos.ContactResponseDto;
import com.contact.crud.entities.ContactEntity;
import com.contact.crud.services.IContactService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController()
@RequestMapping("/api/v1/contacts")
@Tag(name = "contacts")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ContactController {

    private final ModelMapperCustom mapper;

    private final IContactService contactService;

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(CREATED)
    public void create(@Valid @RequestBody ContactRequestDto body) {
        var contactEntity = mapper.map(body, ContactEntity.class);
        contactService.create(contactEntity);
    }

    @PutMapping(value = "/{id}", consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(NO_CONTENT)
    public void update(@PathVariable("id") UUID id, @Valid @RequestBody ContactRequestDto body) {
        var contactEntity = mapper.map(body, ContactEntity.class);
        contactService.update(id, contactEntity);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(NO_CONTENT)
    public void delete(@PathVariable("id") UUID id) {
        contactService.delete(id);
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public Collection<ContactResponseDto> findAll(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        var contacts = contactService.findAll(page, size);
        return this.mapper.mapCollection(contacts, ContactResponseDto.class);
    }

}

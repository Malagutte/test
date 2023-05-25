package com.contact.crud.services;

import java.util.Collection;
import java.util.UUID;

import com.contact.crud.entities.ContactEntity;

public interface IContactService {
    void delete(UUID id);

    void create(ContactEntity contact);

    void update(UUID id, ContactEntity contact);

    Collection<ContactEntity> findAll(int page, int size);
}

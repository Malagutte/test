package com.contact.crud.services;

import java.util.Collection;
import java.util.UUID;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.contact.crud.entities.ContactEntity;
import com.contact.crud.repositories.IContactRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactService implements IContactService {
    private final IContactRepository contactRepository;

    public void delete(UUID id) {
        this.contactRepository.deleteById(id);
    }

    public void create(ContactEntity contact) {
        this.contactRepository.save(contact);
    }

    public void update(UUID id, ContactEntity contact) {
        this.contactRepository.findById(id).ifPresentOrElse((contactToUpdate) -> {
            contactToUpdate.setName(contact.getName());
            contactToUpdate.setEmail(contact.getEmail());
            contactToUpdate.setPhone(contact.getPhone());
            this.contactRepository.save(contactToUpdate);
        }, () -> {
            throw new RuntimeException("Contact not found");
        });
    }

    public Collection<ContactEntity> findAll(int page, int size) {
        var pageable = PageRequest.of(page, size);

        var result = this.contactRepository.findAll(pageable);

        return result.getContent();
    }

}

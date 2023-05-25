package com.contact.crud.repositories;

import java.util.Collection;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contact.crud.entities.ContactEntity;

@Repository
public interface IContactRepository extends CrudRepository<ContactEntity, UUID> {
    Collection<ContactEntity> findAll();
}

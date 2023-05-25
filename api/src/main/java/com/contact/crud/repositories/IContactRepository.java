package com.contact.crud.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contact.crud.entities.ContactEntity;

@Repository
public interface IContactRepository extends CrudRepository<ContactEntity, UUID> {
    Page<ContactEntity> findAll(Pageable pageable);
}

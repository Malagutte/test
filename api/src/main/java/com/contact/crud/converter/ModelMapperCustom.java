package com.contact.crud.converter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;

public class ModelMapperCustom extends ModelMapper {

    public <D, T> Collection<D> mapCollection(final Collection<T> entityList, Class<D> outCLass) {

        if (entityList == null || entityList.isEmpty()) {
            return new ArrayList<>();
        }

        return entityList.stream()
                .map(entity -> map(entity, outCLass))
                .collect(Collectors.toList());
    }
}

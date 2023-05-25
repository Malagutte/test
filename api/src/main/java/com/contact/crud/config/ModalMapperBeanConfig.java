package com.contact.crud.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.contact.crud.converter.ModelMapperCustom;

@Configuration
public class ModalMapperBeanConfig {

    @Bean
    public ModelMapperCustom modelMapper() {
        return new ModelMapperCustom();
    }

}

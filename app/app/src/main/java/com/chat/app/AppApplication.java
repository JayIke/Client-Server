package com.chat.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AppApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}
	
	@Autowired
	private PersonRepository personRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		this.personRepository.save(new Person("Jordin", "Eicher", "Hello"));
	}
}
	
			
			
			

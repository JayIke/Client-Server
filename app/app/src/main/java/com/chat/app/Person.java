package com.chat.app;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.fasterxml.jackson.annotation.JsonProperty;



import org.springframework.data.annotation.Id;


public class Person {

	  @Id private String id;

	  private String firstName;
	  private String lastName;
	  private String message; 

	  public Person(String firstName, String lastName, String message) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getFirstName() {
	    return firstName;
	  }

	  public void setFirstName(String firstName) {
	    this.firstName = firstName;
	  }

	  public String getLastName() {
	    return lastName;
	  }

	  public void setLastName(String lastName) {
	    this.lastName = lastName;
	  }
	}

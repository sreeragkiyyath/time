package com.in28minutes.time.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.util.UriComponentsBuilder;

import com.in28minutes.time.domain.JiraDetails;

@CrossOrigin(origins = "*",allowedHeaders = "*", maxAge = 3600, methods= {RequestMethod.POST,RequestMethod.GET})
@RestController
public class JiraController {

//    @CrossOrigin(origins = "*")
	@PostMapping("/create_jira")
	public ResponseEntity submitJiraDetails(@RequestBody String name) {
		System.out.println("hai" 	+ name
				);
		return new ResponseEntity("fffff", HttpStatus.OK);
	}
	}
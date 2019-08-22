package com.udemy.todo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	public String helloWorld = "Hello World";
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return helloWorld;
	}
	
	@GetMapping(path = "hello-world-bean")
	public HelloWorldBean helloWorldBean() {
//		throw new RuntimeException("Uh oh.  Something went wrong...");
		return new HelloWorldBean("Hello World Bean - Changed...NOW");
	}
	
	@GetMapping(path = "hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello, %s", name));
	}

}
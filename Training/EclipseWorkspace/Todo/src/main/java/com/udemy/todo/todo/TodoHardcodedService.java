package com.udemy.todo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "ZEXL", "Priesthood Power", new Date(), false));
		todos.add(new Todo(++idCounter, "ZEXL", "Health & Fitness", new Date(), false));
		todos.add(new Todo(++idCounter, "ZEXL", "Japanese Fluency", new Date(), false));
		todos.add(new Todo(++idCounter, "ZEXL", "Financial Stability", new Date(), false));
		todos.add(new Todo(++idCounter, "ZEXL", "Packed & Ready", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}

}

package com.revature.example;

import java.util.Arrays;

public class StringsAndArrays {

	public static void main(String[] args) {
		funWithStrings();
	}
	
	static void funWithStrings() {
		//srting literal
		String a = "Hello";
		String b = new String("Hello");
		
		/*
		 * .equals is inherited from Object
		 * most every reference type overrides to define equality
		 * (usually by the fields) 
		 * String has it overridden to check the string literal
		 */
		System.out.println("String a is equal to String b: " + a.equals(b));
		
		/*
		 * == is good for comparing primitives
		 * or checking whether two objects are the same object
		 * (compares the reference)
		 */
		System.out.println("String a is the same object as String b: " + (a==b));
		
		//a and b are two different objects pointing to the same literal in the string pool
		//so even though they are the same word twice, because they are different objects, 
		// ...
		
		/*
		 * String API methods
		 * substring
		 * concat
		 * toUpperCase
		 * toLowerCase
		 * replace
		 * indexOf
		 * split
		 * trim
		 * ...and many more
		 */
		
		String test1 = "Hello World";
		System.out.println(test1.toUpperCase());
		String test2 = "Hello World";
		System.out.println(test2.toLowerCase());
		System.out.println(test1.substring(3, 8));
		System.out.println(test1.concat(test2));
		System.out.println(test1.replace('l', 'p'));
		System.out.println(test1.indexOf('l'));
		System.out.println(test1.indexOf('l', 4));
		String test3 = "The quick brown fox jumped over the lazy dog";
		String[] words = test3.split(" ");
		for (String w : words) {
			System.out.println(w);
		}
		
		
	}

}

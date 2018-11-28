package com.revature.transport;

/*
 * Abstract class cannot be instantiated
 * if there is ONE (or more) abstract method(s), THE CLASS MUST BE ABSTRACT
 * (note: opposite of "abstract" in Java is "concrete" (but there is no keyword for it))
 * (all classes or methods are considered concrete unless you specify that they are abstract)
 */

public abstract class Vehicle {
	
	public Vehicle() {
		super(); //calls Object()
		System.out.println("Vehicle constructor completed");
	}
	
	/*
	 * I will have to implement this method in the first concrete subclass
	 */
	public abstract void move();

}

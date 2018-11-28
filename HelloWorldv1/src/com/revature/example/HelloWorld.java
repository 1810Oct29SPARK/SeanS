package com.revature.example;

public class HelloWorld {

	public static void main(String[] args) {
		System.out.println("Hello World!!!");

		//How to create an instance of the Calculator Class
		Calculator calc = new Calculator();
		
		System.out.println(calc.toString());
		
		System.out.println("three plus five is: " + calc.add(5, 3));
		System.out.println("Eighty-seven minus forty-five is: " + calc.subtract(87, 45));
		System.out.println("Fifteen times four is: " + calc.multiply(15, 4));
		System.out.println("Seventy-five divided by five is: " + calc.divide(75, 5));
		
		String s = "5";
		Double d = Double.parseDouble(s);
		//check type of d, should be parsed as the WRAPPER CLASS Double,
		//not the primitive double (which is why .getClass() works)
		System.out.println(d.getClass());
		
		//s = 3; no more loose typing!  This doesn't work because s was previously a string, so you can't reassign it to an integer just like that
		
	}

}

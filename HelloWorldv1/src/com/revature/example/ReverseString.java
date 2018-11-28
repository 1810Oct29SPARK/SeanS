package com.revature.example;

public class ReverseString {
	
	public static void main(String[] args) {
		
		reverse();
		
	}
	
	
	public static void reverse() {
		String str = "String Reversal";
		String[] strArray = {"S", "t", "r", "i", "n", "g ", "R", "e", "v", "e", "r", "s", "a", "l"};
		for (int i = strArray.length - 1; i >= 0; i --) {
			System.out.println(strArray[i]);
		}
	}
	

}

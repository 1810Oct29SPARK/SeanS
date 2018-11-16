public class Driver {

	public static void main(String[] args) {
		
		System.out.println("This is the point of entry into my program");
		//make a car object with no set fields
		//declare the variable carOne and assign a new Car to it
		Car carOne = new Car();
		//toString is a method inherited from Object
		System.out.println("carOne: " + carOne.toString());
		
		//make a Car Object with instance variables set in the constructor
		//declare a variable CarTwo and assign a new car to it
		Car carTwo = new Car(1972, "DeLorean", "DMC");
		//check out the toString result
		System.out.println("carTwo: " + carTwo.toString());
	
		//try to view the instance variables of carTwo
		//this does NOT compile		System.out.println(carTwo.model);
		System.out.println("model of carTwo: " + carTwo.getModel());
		
		//reset the model of carTwo
		carTwo.setModel("NotDeLorean");
		System.out.println("model of carTwo: " + carTwo.getModel());

		//test out carTwo's inherited move() method
		carTwo.move();

		//New stuff
		Plane P1 = new Plane("Boeing 777", "International Flight", "American Airlines");

		System.out.println("Wait!  What's this?");
		System.out.println("It's a bird!  It's a plane!  ...yes, it's a plane!");

		System.out.println("Type of plane: " + P1.getAirCraftType());

		P1.setAirCraftType("Jet Plane");
		System.out.println("Type of plane: " + P1.getAirCraftType());
		System.out.println("Type of flight: " + P1.getIntlDom());
		System.out.println("Airline: " + P1.getAirline());

		P1.move();
		P1.ascend();
		P1.descend();

	}

}

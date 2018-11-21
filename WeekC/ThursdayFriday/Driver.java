public class Driver {

	public static void main(String[] args) {
		//Make some cars
		Car myCar = new Car(2016, "Elantra", "Hyundai");
		Car myOtherCar = new Car(2018, "Model S", "Tesla");
		myCar.setMilesSinceOilChange(100);
		if (myCar.getMilesSinceOilChange() >= Car.milesBetweenOilChanges) {
			System.out.println("Time to change the oil");
		} else {
			int milesLeft = Car.milesBetweenOilChanges - myCar.getMilesSinceOilChange();
			System.out.println("You have " + milesLeft + " miles left");
	}


				//init as in initial
	public static void init() {
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



		//declared a variable garage which is an arrray of vehicles
		//created an empty array with 5 elements and assigned it to garage
		Vehicle[] garage = new Vehicle[5];
		//add vehicles to array
		garage[0] = carOne;
		garage[1] = new Boat("The Black Pearl", "black");
		garage[2] = new Car(1880, "Horse", "Horse");
		garage[3] = carTwo;
		garage[4] = new Boat("Boaty McBoatface", "green");
		for (int i=0; i < garage.length; i++) {
			garage[i].move();
		}

	}

}

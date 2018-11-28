package com.revature.vacation;

import com.revature.transport.*; //.* imports all classes in the package
//to get a specific class, use import package.classname;

//static imports within a class
import static com.revature.transport.Car.*;

public class GoOnVacation {

	public static void main(String[] args) {
		System.out.println("I'm going to Miami");
		System.out.println("Welcome to Miami");
		System.out.println("Bienvenido a Miami");
		System.out.println("");
		System.out.println("Okay, we need a car");
		//using fully qualified class name of Car (package.classname)
		//com.revature.transport.Car c = new com.revature.transport.Car();
		//or we could use imports...to save us typing!!!
		Car c = new Car(2021, "Spaceship", "Tesla", 50);
		//c.setMake("Tesla");
		//c.setModel("Spaceship");
		//c.setYearManufactured(2021);
		//c.setMilesSinceOilChange(50);
		System.out.println(c.toString());
		//turns out that System.out.println(c); does the same as System.out.println(c.toString());
		System.out.println("Do we need to change the oil first?");
		System.out.println("Recommended miles between oil changes: " + recommendedMilesBetweenOilChanges);
		if (c.getMilesSinceOilChange() >= recommendedMilesBetweenOilChanges) {
			System.out.println("Stop!  Change your oil!");
		} else {
			System.out.println("Good to go!");
		}
		System.out.println("Made it to Miami!  Let's go kayaking!");
		Kayak k = new Kayak("red", 4.2, 2, 2);
		//System.out.println(k.getColor()); //inherited from superclass
		System.out.println(k);
		
	}
	
	static Vehicle chooseAVehicle(Vehicle[] garage) {
		Vehicle chosenVehicle = null;
		//check for steerable vehicles that are not boats, choose the first one
		for (int i = 0; i < garage.length; i++) {
			Vehicle v = garage[i];
			if (v instanceof Steerable && !(v instanceof Boat)) {
				chosenVehicle = v;
				return chosenVehicle; //as soon as I find one, return that vehicle
			}
		}
		
		return chosenVehicle;
	}

}

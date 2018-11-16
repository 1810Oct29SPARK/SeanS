//First POJO!

public class Car extends Vehicle {

	//constructor with no fields (a "no-args" constructor)
	public Car(){
		System.out.println("called no args constructor");
	}

	//constructor with all the fields
	public Car(int yearManufactured, String model, String make){
		//"this" refers to the Car Object being created--NOT the argument
		this.yearManufactured = yearManufactured;
		this.model = model;
		this.make = make;
	}

	//private instance variables; accessible only within the class
	private int yearManufactured;
	private String model;
	private String make;

	//getters and setters (accessors and mutators)
	public int getYearManufactured() {
		return this.yearManufactured;
	}

	public String getModel(){
		return this.model;
	}

	public String getMake() {
		return this.make;
	}

	public void setYearManufactured(int year){
		this.yearManufactured = year;
	}

	public void setModel(String model){
		this.model = model;
	}
	//model is in METHOD SCOPE
	//this.model is in INSTANCE SCOPE

	public void setMake(String make){
		this.make = make;
	}

	//override inherited move() method
	@Override		//@Override doesn't DO anything in and of itself, but will cause the program to fail to compile if there is no matching superclass method
	public void move(){
		System.out.println("Car is moving");
	}
}


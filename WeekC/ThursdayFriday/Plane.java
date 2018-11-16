public class Plane extends Vehicle {

	public Plane(){
		System.out.println("This is my next subclass of Vehicle:");
		System.out.println("A Plane!!!");
	}

	public Plane(String AirCraftType, String IntlDom, String Airline) {
		this.AirCraftType = AirCraftType;
		this.IntlDom = IntlDom;
		this.Airline = Airline;
	}

	private String AirCraftType;
	private String IntlDom;
	private String Airline;

	public String getAirCraftType(){
		return this.AirCraftType;
	}

	public String getIntlDom(){
		return this.IntlDom;
	}

	public String getAirline(){
		return this.Airline;
	}

	public void setAirCraftType(String Type){
		this.AirCraftType = Type;
	}

	public void setIntlDom(String IntlDom){
		this.IntlDom = IntlDom;
	}

	public void setAirline(String AL){
		this.Airline = AL;
	}

	@Override
	public void move(){
		System.out.println("The Plane is moving!");
	}

	public void ascend() {
		System.out.println("Time for takeoff.  Going up!");
	}

	public void descend() {
		System.out.println("We're here!  Time to land!");
	}



}

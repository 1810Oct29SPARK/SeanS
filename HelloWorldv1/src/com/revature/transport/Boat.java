package com.revature.transport;

public class Boat extends Vehicle implements Steerable {
	
	public Boat(String color, double hullLengthInMeters) {
		super();
		this.color = color;
		this.hullLengthInMeters = hullLengthInMeters;
	}
	
	public Boat() {
		super();
		System.out.println("Boat noargs constructor completed");
	}

	protected String color;
	protected double hullLengthInMeters;

	@Override
	public void move() {
		System.out.println("Boat is moving");

	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getHullLengthInMeters() {
		return hullLengthInMeters;
	}

	public void setHullLengthInMeters(double hullLengthInMeters) {
		this.hullLengthInMeters = hullLengthInMeters;
	}

	@Override
	public String toString() {
		return "Boat [color=" + color + ", hullLengthInMeters=" + hullLengthInMeters + "]";
	}

	@Override
	public void turnRight() {
		System.out.println("turn helm clockwise");
	}

	@Override
	public void turnLeft() {
		System.out.println("turn helm counterclockwise");
	}

}

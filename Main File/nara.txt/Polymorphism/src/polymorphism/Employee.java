/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package polymorphism;

/**
 *
 * @author macbookair
 */
public class Employee {
    @Override
    public String toString() {
        return "Salary{" + "name=" + name + ", address=" + address + ", number=" + number + '}';
    }
    private String name;

    public void setAddress(String address) {
        this.address = address;
    }
    private String address;
    private int number;

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public int getNumber() {
        return number;
    }

    public Employee(String name, String address, int number) {
        System.out.println("-------ConStruter An Employee---------");
        this.name = name;
        this.address = address;
        this.number = number;
    }
    public void mailCheck(){
        System.out.println("mailing check to:"+ this.name + " " + this.address);
    }
}

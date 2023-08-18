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
public class Salary extends Employee {

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
    private double salary;
    public Salary(String name, String address , int number , double salary){
        super(name,adress,number);
        setSalary(salary);
    }
    public void mailCheck(){
        System.out.println("Plz Kindly check your box");
        System.out.println("Maling to check: ", getName()+ "with salary" +salary);
    }
    
}

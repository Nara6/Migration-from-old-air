/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

/**
 *
 * @author macbookair
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       Info nara = new Info();
       nara.age = 20;
       nara.name= "Yin Soknara";
       nara.sex= "Male";
       System.out.println("My name is " + nara.getName() +" I'm "+nara.getAge());
       
    }
}

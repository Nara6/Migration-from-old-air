/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package poly;

/**
 *
 * @author macbookair
 */
class Dog{
    public void Bark(){
        System.out.println("Vos Vos Vos");
    }
}
public class Polymorphism{
    public static void main(String[] args) {
        Dog B = new Dog();
        B.Bark();
    }

}
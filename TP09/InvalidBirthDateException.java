package TP09;
public class InvalidBirthDateException extends Exception {
    public InvalidBirthDateException(){
        super("Cannot Register under 18 Years old");
    }
}

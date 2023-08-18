import java.util.Scanner;

public class Hello_One_name {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input your name: ");
        String name = sc.nextLine();
        System.out.println("Hello " + name + "!");
    }
}
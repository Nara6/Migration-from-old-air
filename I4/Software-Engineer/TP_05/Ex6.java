import java.util.Scanner;

public class Ex6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter a word: ");
        String word = scanner.nextLine();
        String nstring = "";
        char ch;
        for (int i = 0; i < word.length(); i++) {
            ch = word.charAt(i);
            nstring = ch + nstring;
        }
        System.out.println(word + nstring);
    }
}

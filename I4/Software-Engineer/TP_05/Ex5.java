import java.util.Scanner;

public class Ex5 {
    public static void main(String[] args) {
        // Method reverse;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please gives a word to check: ");
        String word = scanner.nextLine();
        System.out.print("Choose method (REV, LOOP): ");
        String method = scanner.nextLine();
        if (method.equals("REV")) {
            String nstring = "";
            char ch;
            for (int i = 0; i < word.length(); i++) {
                ch = word.charAt(i);
                nstring = ch + nstring;
            }

            if (nstring.equalsIgnoreCase(word)) {
                System.out.println(word + " is palindrome");
            } else {
                System.out.println(word + " is not palindrome");
            }
        } else if (method.equals("LOOP")) {
            int check = 0;
            for (int i = 0; i < (word.length()); i++) {
                // System.out.println(word.charAt(word.length() - 1 - i));
                // // System.out.println();
                // System.out.println(word.charAt(i));
                if (word.charAt(i) == word.charAt(word.length() - 1 - i)) {
                    check++;
                }
            }
            if (word.length() == check) {
                System.out.println(word + " is palindrome");
            } else {
                System.out.println(word + " is not palindrome");
            }
        } else {
            System.out.println("Input Wrong Format Please Try Again!!!");
        }

    }

}

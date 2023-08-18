import java.util.Scanner;

public class Ex7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter a sentence: ");
        String sentence = scanner.nextLine();
        sentence = sentence.replace("\\n", "(new_line)");
        sentence = sentence.replace("\\t", "(tab)");
        sentence = sentence.replace("\\\\", "(slash)");
        sentence = sentence.replace("//", "(comment_line)");
        sentence = sentence.replace(":)", "(smile)");
        System.out.println("\n" + sentence);
    }
}

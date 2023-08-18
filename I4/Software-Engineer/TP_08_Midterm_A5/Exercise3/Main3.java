import java.util.Scanner;

public class Main3 {
    public static void main(String[] args) {
        RescueTheQueen Question1 = new RescueTheQueen();
        RescueTheQueen Question2 = new RescueTheQueen();
        RescueTheQueen Question3 = new RescueTheQueen();
        Scanner sc = new Scanner(System.in);
        Question1.setTextQuestion(
                "\n|Q1|. You have reached the big tree that the black wizard took the princess to. \nThere are 2 holes: the light hole and dark hole.\nWhich one will you enter? (A. Light hole, B. Dark hole)\n");
        Question1.setPosibleAnswer(
                "A. The light is the exit into another dimension. You can safely go through it.\nB. The dark is hell full of darkness, you are suffering from it and need to return to choose the hole again\n");

        Question2.setTextQuestion(
                "\n|Q2|. (Only if pass Q1) You pass into the other dimension. \nIn there you see 2 trees with the holes.\n Which one will you take? (A. Left hole, B. Right hole)\n");
        Question2.setPosibleAnswer(
                "A. The left whole leads to Q1.\nB. The right leads to the temple of the back wizard.\n");
        Question3.setTextQuestion(
                "\n|Q3|. (Only if pass Q2) You enter the temple.\n A person is attacking by a dragon! To move further,\n not paying to them of attention? (A. Yes, B. No)\n");
        Question3.setPosibleAnswer(
                "A. You try to pass past, but the dragon notices your presence and transforms you into ashes. You are dead!!! GAME is over!!!\nB. Congratulation, you have passed all tests of honor. Princess gets to you!!! (Hero becomes the future king)\n");
        System.out.println("-------------Welcome to Guessing Game!-------------");
        int hold = 0;
        while (1 > 0) {
            System.out.println(Question1.getTextQuestion());
            System.out.print("Enter your Answer (A|B): ");
            String choice = sc.nextLine();
            if (choice.equals("A")) {
                System.out.println("\nCongratulation you have passed Question1!!!\n\n");
                System.out
                        .println("A. The light is the exit into another dimension.\n You can safely go through it.");
                while (1 > 0) {
                    System.out.println(Question2.getTextQuestion());
                    System.out.print("Enter your Answer (A|B): ");
                    String choice1 = sc.nextLine();

                    if (choice1.equals("B")) {
                        while (1 > 0) {

                            System.out.println(Question3.getTextQuestion());
                            System.out.print("Enter your Answer (A|B): ");
                            String choice2 = sc.nextLine();
                            if (choice2.equals("A")) {
                                System.out.println(
                                        "You try to pass past, but the dragon notices your presence and transforms you into ashes. You are dead!!! GAME is over!!!");
                                hold++;

                            } else if (choice2.equals("B")) {
                                System.out.println(
                                        "Congratulation, you have passed all tests of honor. Princess gets to you!!! (Hero becomes the future king)");
                                hold++;
                            }
                            if (hold == 1) {
                                break;
                            }
                        }
                    } else if (choice1.equals("A")) {
                        System.out.println("\nA. The left whole leads to Q1.\n\n");
                        break;
                    }
                    if (hold == 1) {
                        break;
                    }
                }
            } else {
                System.out.println(
                        "B. The dark is hell full of darkness,\n you are suffering from it and need to return to choose the hole again");
                System.out.println("You are Dead!!!");
                break;
            }
            if (hold == 1) {
                break;
            }
        }

    }

}

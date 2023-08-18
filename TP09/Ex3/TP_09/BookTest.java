package TP_09;
import java.util.Scanner;

public class BookTest {
    //menu for displaying book class
    static void menu(){
        System.out.println("-------------------Book Class-------------------");
        System.out.println("1. Data input");
        System.out.println("2. Display book information");
        System.out.println("3. Search by title");
        System.out.println("4. Check availability");
        System.out.println("5. Check number of books in inventory");
        System.out.println("6. Decrease or Increase numbers of books");
        System.out.println("7. Check borrowing based on the condition of the book");
        System.out.println("8. Quit the program");
        System.out.println("-------------------------------------------------");
    }
    public static void main(String[] args) throws Exception{
        Book book = new Book();
        Scanner sc = new Scanner(System.in);
        int option, i=1;
        BookTest bookTest = new BookTest();
        bookTest.menu();
        while (i==1){
            System.out.print("Input option: ");
            option = Integer.parseInt(sc.nextLine());
            switch (option){
                case 1:
                    book.addData();
                    break;
                case 2:
                  // book.displayData();
                    System.out.println(book);
                    break;
                case 3:
                    book.searchByTitle();
                    break;
                case 4:
                    book.checkAvailable();
                    break;
                case 5:
                    book.checkNumberBook();
                    break;
                case 6:
                    book.increaseDecrease();
                    break;
                case 7:
                    book.borrowBook();
                    break;
                case 8:
                    System.out.println("Quit");
                    System.exit(0);
            }
        }
       // book.addData();
        //book.displayData();
        //book.searchByTitle();
        //book.checkAvailable();
        //book.checkNumberBook();
        //book.increaseDecrease();
        //book.borrowBook();
    }
}


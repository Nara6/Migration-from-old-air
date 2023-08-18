
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


public class Book{
    Scanner sc = new Scanner(System.in);
    ArrayList<Book1> book1s = new ArrayList<>();
    boolean status = false;
    public Book() {

    }

    //method to add data
    public void addData() throws Exception{
        System.out.print("Input title: ");
        String title = sc.nextLine();
        if(title == null){
            throw new NullPointerException("Title should not be null");
        }if(title.isEmpty() || title.isBlank()){
            throw  new IllegalArgumentException("Title should not be empty or blank");
        }
        System.out.print("Input ISBN: ");
        int isbn = Integer.parseInt(sc.nextLine());
        //check for unique number
        for (Book1 b: book1s) {
            if(isbn == b.getIsbn()){
                System.out.println("ISBN must be unique\nCant be duplicated");
                return;
            }
        }
        System.out.print("Input quantity: ");
        int quantity = Integer.parseInt(sc.nextLine());
        if(quantity<0){
            throw new IllegalArgumentException("Quantity cannot be negative");
        }
        System.out.print("Input description: ");
        String description = sc.nextLine();
        if(description == null){
            throw  new NullPointerException("Description should not be null");
        }if(description.isEmpty() || description.isBlank()){
            throw new IllegalArgumentException("Description should not be empty or blank");
        }
        System.out.print("Input category: ");
        String category = sc.nextLine();
        System.out.print("Input published date(DD/MM/YYYY): ");
        String publishedDate = sc.nextLine();
        int n = ValidateFormateDate.getvalues(publishedDate);
        if(n==1){
            System.out.println("Valid date format");
        }else{
            System.out.println("Invalid date format");
        }
        System.out.print("How many cooperation of author for published a book?: ");
        int num = Integer.parseInt(sc.nextLine());
        ArrayList<String> author = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            System.out.print("Input name" + i + ":");
            String name = sc.nextLine();
            author.add(name);
        }
        Book1 book1 = new Book1(title, description,category, isbn,quantity, publishedDate, author);
        book1s.add(book1);
    }


    //method to search by title
    public void searchByTitle(){
        System.out.println("Input title number for finding a book");
        System.out.print("Input title: ");
        String findTitle = sc.nextLine();
        System.out.println("Title\tPublishedDate\tCategory\tISBN\tQuantity\tDescription\tAuthor");
        for (Book1 b: book1s) {
            if(findTitle.equals(b.getTitle())){
                status = true;
                System.out.println(b.getTitle()+" "+b.getPublishedDate()+" "+b.getCategory()+" "+b.getIsbn()+" "+b.getQuantity()+" "+b.getDescription()+" "+b.getAuthor());
            }
        }
        if(status == false)
            System.out.println("Error! Not found");
    }

    //method to display data
    //public void displayData(){
    //    System.out.println("Title\tPublishedDate\tCategory\tISBN\tQuantity\tDescription\tAuthor");
      //  for (Book1 b: book1s) {
        //    System.out.println(b.getTitle()+" "+b.getPublishedDate()+" "+b.getCategory()+" "+b.getIsbn()+" "+b.getQuantity()+" "+b.getDescription()+" "+b.getAuthor());
        //}
    //}


    @Override
    public String toString() {
        return "Book{" +
                "book1s=" + book1s +
                '}';
    }

    //method to check availability
    //book available unless the quantity is bigger or equal to 1
    public void checkAvailable(){
        System.out.println("\nCheck the availability of the book");
        System.out.print("Input title: ");
        String findTitle = sc.nextLine();
        for (Book1 b: book1s) {
            if(findTitle.equals(b.getTitle())){
                if(b.getQuantity() >=1){
                    status = true;
                    System.out.println("This book is available for borrow");
                }
            }
        }
        if(status == false)
            System.out.println("Can't borrow this book");
    }


    //method to check number of books in inventory by input title
    public void checkNumberBook(){
        System.out.println("\nShow the amount of books in inventory");
        System.out.print("Input title: ");
        String findTitle = sc.nextLine();
        System.out.println("Title\tPublishedDate\tCategory\tISBN\tQuantity\tAuthor");
        for (Book1 b: book1s) {
            if(findTitle.equals(b.getTitle())){
                status = true;
                System.out.println(b.getTitle()+" "+b.getPublishedDate()+" "+b.getCategory()+" "+b.getIsbn()+" "+b.getQuantity()+" "+b.getAuthor());
            }
        }
        if(status == false)
            System.out.println("Book Not Found\nNo amount number of book to show");
    }


    //method to increase/decrease number of book
    //if user press 'yes' so the amount of book will be increase
    //if user press 'no' so the amount of book will be decrease
    public void increaseDecrease(){
        String[] increase = {"yes", "Yes", "Y", "y"};
        String[] decrease = {"No", "no", "n", "N"};
        System.out.println("\nShow the amount of book after increase or decrease");
        System.out.print("Input title: ");
        String findTitle = sc.nextLine();
        System.out.println("Title\tQuantity\tISBN");
        for (Book1 b: book1s) {
            if(findTitle.equals(b.getTitle())){
                status = true;
                System.out.println("Display the amount of book before increase or decrease");
                System.out.println(b.getTitle()+" "+b.getQuantity()+" "+b.getIsbn());
                int qty = b.getQuantity();
                System.out.println("Press yes for increase amount of books\nPress no for decrease amount of books");
                System.out.print("Input action: ");
                String action = sc.nextLine();
                if(Arrays.asList(increase).contains(action)){
                    System.out.print("How many amount of book do you want to increase?: ");
                    int inQty = Integer.parseInt(sc.nextLine());
                    int total = inQty + qty;
                    b.setQuantity(total);
                }else if(Arrays.asList(decrease).contains(action)){
                    System.out.print("How many amount of book do you want to decrease?: ");
                    int inQty = Integer.parseInt(sc.nextLine());
                    if(inQty < qty){
                        int total = qty - inQty;
                        b.setQuantity(total);
                    }else if(inQty > qty){
                        System.out.println("Can decrease amount of books\nSince the total books is smaller than decrease quantity");
                    }
                }
            }
        }
        if(status == false){
            System.out.println("Book not found\nNo suitable title");
        }
    }


    //method for borrowing book
    //if book in a good condition so can borrow
    //else cant borrow
    //can know book condition by input book description
    public void borrowBook(){
        System.out.println("Check whether borrower can borrow book or not");
        System.out.print("Input title: ");
        String findTitle = sc.nextLine();
        boolean status = false;
        String[] borrow1 = {"Good", "good", "g", "G"};
        String[] borrow2 = {"Bad", "bad", "b", "B"};
        for (Book1 b: book1s) {
            if(findTitle.equals(b.getTitle())){
                if(b.getQuantity()>=1){
                    if(Arrays.asList(borrow1).contains(b.getDescription())) {
                        status = true;
                        System.out.println("Can borrow book\nSince the condition is good");
                    }
                    else if(Arrays.asList(borrow2).contains(b.getDescription()))
                        System.out.println("Can't borrow book\nSince the condition is bad");

                }
            }
        }
        if(status == false){
            System.out.println("No book found\nSince the title does not match");
        }
    }
}


class Book1 {
    private String title, description, category;
    private int isbn;
    private int quantity;
    private String publishedDate;
    ArrayList<String> author = new ArrayList<>();

    public Book1() {
    }

    public Book1(String title, String description, String category, int isbn, int quantity, String publishedDate, ArrayList<String> author) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.isbn = isbn;
        this.quantity = quantity;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(String publishedDate) {
        ValidateFormateDate.getvalues(publishedDate);
        this.publishedDate = publishedDate;
    }

    public ArrayList<String> getAuthor() {
        return author;
    }

    public void setAuthor(ArrayList<String> author) {
        this.author = author;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public int getQuantity() {
        return quantity;
    }

    @Override
    public String toString() {
        return "Book1{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", isbn=" + isbn +
                ", quantity=" + quantity +
                ", publishedDate='" + publishedDate + '\'' +
                ", author=" + author +
                '}'+"\n";
    }
}
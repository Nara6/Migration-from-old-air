
import java.util.ArrayList;
import java.util.Scanner;

public class Library {
    Scanner sc = new Scanner(System.in);
    ArrayList<BookLibrary> bookLibraries = new ArrayList<>();

    public Library() {
    }

    //method to add library info, add new book
    public void addLibrary()throws Exception{
        System.out.print("Book title: ");
        String title = sc.nextLine();
        if(title == null){
            throw new NullPointerException("Title should not be null");
        }if(title.isEmpty() || title.isBlank())
            throw new IllegalArgumentException("Title should not be blank or empty");
        System.out.print("Book ISBN: ");
        int ISBN = Integer.parseInt(sc.nextLine());
        //check for unique number
        for (BookLibrary b: bookLibraries) {
            if(ISBN == b.getISBN())
                System.out.println("ISBN must be unique\nCannot be duplicated");
        }
        System.out.print("Published Date (DD/MM/YYYY): ");
        String publish = sc.nextLine();
        int n = ValidateFormateDate.getvalues(publish);
        if(n==1){
            System.out.println("Valid date format");
        }else{
            System.out.println("Invalid date format");
        }
        System.out.print("Book category: ");
        String category = sc.nextLine();
        if(category == null)
            throw new NullPointerException("Category should not be null");
        if(category.isBlank() || category.isEmpty())
            throw new IllegalArgumentException("Category should not be empty or blank");
        System.out.print("Book quantity: ");
        int qty = Integer.parseInt(sc.nextLine());
        if(qty<0)
            throw new IllegalArgumentException("Quantity cannot be negative");
        BookLibrary bookLibrary = new BookLibrary(title, publish, category, ISBN, qty);
        bookLibraries.add(bookLibrary);
    }

    //method to list category
    public void listCategory(){
        System.out.println("\nList all categories");
        for (BookLibrary b: bookLibraries) {
            System.out.println(b.getCategory());
        }
    }

    //list books by categories
    public void listBookByCategory(){
        System.out.println("\nList all the books in the category");
        System.out.print("Search category: ");
        String searchCat = sc.nextLine();
        System.out.println("ISBN\tBook Title");
        for (BookLibrary b: bookLibraries) {
            if(searchCat.equals(b.getCategory())){
                System.out.println(b.getISBN()+"\t"+b.getbTitle());
            }
        }if(bookLibraries.isEmpty()){
            System.out.println("No category found");
        }
    }

    //method to list available book
    public void listAvailableBook(){
        System.out.println("\nList available book");
        System.out.print("Book title: ");
        String title = sc.nextLine();
        for (BookLibrary b: bookLibraries) {
            if(title.equals(b.getbTitle())){
                System.out.println(b.getbTitle()+"\t"+b.getQuantity());
                for(int i=0; i<bookLibraries.size(); i++){
                    if(b.getQuantity()>=1){
                        System.out.println(b.getISBN()+"\t"+b.getbTitle()+"\t"+b.getQuantity());
                    }
                }
            }
        }
        if(bookLibraries.isEmpty()){
            System.out.println("No book title is found");
        }
    }

    //method to decrease book by isbn
    public void descreaseBook(){
        System.out.println("\nDecrease book by ISBN");
        System.out.print("Book ISBN: ");
        int bookISBN = Integer.parseInt(sc.nextLine());
        System.out.println("Book ISB\tBook title\tBook quantity");
        for (BookLibrary b: bookLibraries) {
            if(bookISBN == b.getISBN()){
                System.out.println(b.getISBN()+"\t"+b.getbTitle()+"\t"+b.getQuantity());
                System.out.print("Amount of book for decreasing: ");
                int amount = Integer.parseInt(sc.nextLine());
                if(amount > b.getQuantity()){
                    System.out.println("Out of range\nCannot decrease book");
                }else if(amount <= b.getQuantity()){
                    int total = b.getQuantity() - amount;
                    System.out.println("After decrease book: "+total);
                }
            }
        }if(bookLibraries.isEmpty()){
            System.out.println("No ISBN number is found");
        }
    }

    //method to remove book by isbn
    public void removeBook(){
        System.out.println("\nRemove book by ISBN");
        System.out.print("Book ISBN: ");
        int removeISBN = Integer.parseInt(sc.nextLine());
        for (BookLibrary b: bookLibraries) {
            if(b.getISBN() == removeISBN){
                System.out.println("Book is removed");
                b.setbTitle(" ");
                b.setISBN(0);
            }
        }

        for (BookLibrary b: bookLibraries) {
            System.out.println(b.getISBN()+"\t"+b.getbTitle());
        }
        if(bookLibraries.isEmpty()){
            System.out.println("No ISBN number if found");
        }
    }

    @Override
    public String toString() {
        return "Library{" +
                "bookLibraries=" + bookLibraries +
                '}';
    }
}
class BookLibrary{
    String bTitle, bDescription, bCopy;
    String bPublishedDate, bBorrowDate, bReturnDate;
    ArrayList<String> authors = new ArrayList<>();
   // ArrayList<String> category = new ArrayList<>();
    String category, sName;
    int ISBN, quantity;
    ArrayList<String> borrowTitle = new ArrayList<>();
    ArrayList<Number> numberBorrowBook = new ArrayList<>();
    int durationBorrow;


    public BookLibrary(String sName, ArrayList<String> borrowTitle, ArrayList<Number> numberBorrowBook, int durationBorrow) {
        this.sName = sName;
        this.borrowTitle = borrowTitle;
        this.numberBorrowBook = numberBorrowBook;
        this.durationBorrow = durationBorrow;
    }

    public BookLibrary(String bTitle, String bPublishedDate, String category, int ISBN, int quantity) {
        this.bTitle = bTitle;
        this.bPublishedDate = bPublishedDate;
        this.category = category;
        this.ISBN = ISBN;
        this.quantity = quantity;
    }

    public BookLibrary(String bTitle, String bDescription, String bCopy, String bPublishedDate, String bBorrowDate, String bReturnDate,
                       ArrayList<String> authors, String category, int ISBN, String sName, ArrayList<Number> numberBorrowBook,
                       int durationBorrow, int quantity, ArrayList<String> borrowTitle) {
        this.bTitle = bTitle;
        this.bDescription = bDescription;
        this.bCopy = bCopy;
        this.bPublishedDate = bPublishedDate;
        this.bBorrowDate = bBorrowDate;
        this.bReturnDate = bReturnDate;
        this.authors = authors;
        this.category = category;
        this.ISBN = ISBN;
        this.sName = sName;
        this.numberBorrowBook = numberBorrowBook;
        this.durationBorrow = durationBorrow;
        this.quantity = quantity;
        this.borrowTitle = borrowTitle;
    }

    public BookLibrary() {
    }

    public BookLibrary(ArrayList<Number> numberBorrowBook, int durationBorrow) {
            this.numberBorrowBook = numberBorrowBook;
            this.durationBorrow = durationBorrow;
    }

    public String getbTitle() {
        return bTitle;
    }

    public void setbTitle(String bTitle) {
        this.bTitle = bTitle;
    }

    public String getbDescription() {
        return bDescription;
    }

    public void setbDescription(String bDescription) {
        this.bDescription = bDescription;
    }

    public String getbCopy() {
        return bCopy;
    }

    public void setbCopy(String bCopy) {
        this.bCopy = bCopy;
    }

    public String getbPublishedDate() {
        return bPublishedDate;
    }

    public void setbPublishedDate(String bPublishedDate) {
        this.bPublishedDate = bPublishedDate;
    }

    public String getbBorrowDate() {
        return bBorrowDate;
    }

    public void setbBorrowDate(String bBorrowDate) {
        this.bBorrowDate = bBorrowDate;
    }

    public String getbReturnDate() {
        return bReturnDate;
    }

    public void setbReturnDate(String bReturnDate) {
        this.bReturnDate = bReturnDate;
    }

    public ArrayList<String> getAuthors() {
        return authors;
    }

    public void setAuthors(ArrayList<String> authors) {
        this.authors = authors;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getISBN() {
        return ISBN;
    }

    public void setISBN(int ISBN) {
        this.ISBN = ISBN;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public ArrayList<Number> getNumberBorrowBook() {
        return numberBorrowBook;
    }

    public void setNumberBorrowBook(ArrayList<Number> numberBorrowBook) {
        this.numberBorrowBook = numberBorrowBook;
    }

    public int getDurationBorrow() {
        return durationBorrow;
    }

    public void setDurationBorrow(int durationBorrow) {
        this.durationBorrow = durationBorrow;
    }


    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public ArrayList<String> getBorrowTitle() {
        return borrowTitle;
    }

    public void setBorrowTitle(ArrayList<String> borrowTitle) {
        this.borrowTitle = borrowTitle;
    }

    @Override
    public String toString() {
        return "BookLibrary{" +
                "bTitle='" + bTitle + '\'' +
                ", bDescription='" + bDescription + '\'' +
                ", bCopy='" + bCopy + '\'' +
                ", bPublishedDate='" + bPublishedDate + '\'' +
                ", bBorrowDate='" + bBorrowDate + '\'' +
                ", bReturnDate='" + bReturnDate + '\'' +
                ", authors=" + authors +
                ", category='" + category + '\'' +
                ", ISBN=" + ISBN +
                ", quantity=" + quantity +
                ", sName=" + sName +
                ", numberBorrowBook=" + numberBorrowBook +
                ", durationBorrow=" + durationBorrow +
                '}';
    }
}

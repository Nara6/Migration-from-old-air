package TP_09;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


public class Category {
    Scanner sc = new Scanner(System.in);
    ArrayList<Category1> category1s = new ArrayList<>();


    //method to input new category
    public void addCategory() {
        System.out.print("\tCategory name: ");
        String cName = sc.nextLine();
        if(cName == null){
            throw new NullPointerException("Category name should not be null");
        }if(cName.isEmpty() || cName.isBlank()){
            throw new IllegalArgumentException("Category name should not be empty or blank");
        }
        System.out.print("\tCategory description: ");
        String cDescription = sc.nextLine();
        System.out.print("\tHow many books for a category? :");
        int num = Integer.parseInt(sc.nextLine());
        ArrayList<Integer> bQuantity = new ArrayList<>();
        ArrayList<String> bTitle = new ArrayList<>();
        ArrayList<Integer> bISBN = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            System.out.print("\tBook title " + i + ":");
            String title = sc.nextLine();
            if(title == null){
                throw new NullPointerException("Title should not be null");
            }if(title.isEmpty() || title.isBlank()){
                throw  new IllegalArgumentException("Title should not be empty or blank");
            }
            System.out.print("\tBook quantity: ");
            int qty = Integer.parseInt(sc.nextLine());
            if(qty <0){
                throw new IllegalArgumentException("Quantity cannot be negative");
            }
            System.out.print("\tBook ISBN: ");
            int isbn = Integer.parseInt(sc.nextLine());
            //check for unique number
            if(findByIndex(isbn) !=null){
                System.out.println("ISBN already exited");
            }
            bISBN.add(isbn);
            bTitle.add(title);
            bQuantity.add(qty);
        }
        Category1 category = new Category1(cName, cDescription, bTitle, bQuantity, bISBN);
        category1s.add(category);
    }

    public void listBookCategory() {
        System.out.println("\nList Book by category");
        System.out.println("Category name\tCategory description\tBook title\tBook quantity\tISBN");
        for (Category1 c : category1s) {
            System.out.println(c.getcName()+"\t"+ c.getcDescription()+"\t"+c.bTitle+"\t"+c.getbQuantity()+"\t"+c.getbISBN());
        }
        if (category1s.isEmpty()) {
            System.out.println("There isn't any category");
        }
    }

    //add or remove book(s) in the category
    //user press add or yes for adding books
    //user press remove or no for removing books
    public void addRemoveBook(){
        ArrayList<String> bTitle = new ArrayList();
        String[] add = {"add", "yes", "Yes"};
        String[] remove = {"remove", "no", "No"};
        System.out.println("\nAdd or Remove book(s) from category");
        System.out.print("Search category: ");
        String searchCategory = sc.nextLine();
        for (Category1 c: category1s) {
            if(searchCategory.equals(c.getcName())) {
                System.out.println(c.getcName()+"\t"+ c.getcDescription()+"\t"+c.bTitle+"\t"+c.getbQuantity());
                System.out.println("Press add or yes for adding books\nPress no or remove for removing book");
                System.out.print("What action do you want to perform?: ");
                String action = sc.nextLine();
                if(Arrays.asList(add).contains(action)){
                    System.out.print("Book ISBN: ");
                    int isbn = Integer.parseInt(sc.nextLine());
                    for(int i=0; i<c.bISBN.size(); i++){
                        if(isbn == c.bISBN.get(i)){
                            System.out.print("Book quantity: ");
                            int qty = Integer.parseInt(sc.nextLine());
                            int total = qty + c.bQuantity.get(i);
                            System.out.println("Total books after added: "+total);
                            //how to set into array

                        }
                    }
                }else if(Arrays.asList(remove).contains(action)){
                    System.out.print("Book ISBN: ");
                    int isbn = Integer.parseInt(sc.nextLine());
                    for(int i=0; i<c.bISBN.size(); i++){
                        if(isbn == c.bISBN.get(i)){
                            System.out.print("Book quantity: ");
                            int qty = Integer.parseInt(sc.nextLine());
                            if (qty <= c.bISBN.get(i)){
                                int total = c.bQuantity.get(i) - qty;
                                System.out.println("Total book after remove: "+total);
                                //how to set in to array back
                            }else if(qty > c.bISBN.get(i)){
                                System.out.println("The remove book is out of range\nCannot remove book");
                            }
                        }
                    }
                }else{
                    System.out.println("You press the wrong choice");
                }
            }
        }if(category1s.isEmpty()){
            System.out.println("No category found");
        }
    }

    //find book in category by isbn
    public void findBook() {
        System.out.println("\nFind Book in category by using ISBN");
        System.out.println("Category name\tCategory description\tBook title\tBook quantity");
        System.out.print("Category name: ");
        String findCategory = sc.nextLine();
        for (Category1 c : category1s) {
            if (findCategory.equals(c.getcName())) {
                System.out.println(c.getcName() + "\t" + c.getcDescription() + "\t" + c.bTitle + "\t" + c.getbQuantity());
                System.out.print("Book ISBN: ");
                int findISBN = Integer.parseInt(sc.nextLine());
                for (int i=0; i<c.bISBN.size(); i++){
                    if(findISBN == c.bISBN.get(i)){
                        System.out.println(c.getcName() + "\t" + c.getcDescription() + "\t" + c.bTitle + "\t" + c.getbQuantity());
                    }
                }
            }
        }
        if (category1s.isEmpty()) {
            System.out.println("There isn't any category");
        }
    }

    //method to fnd by index
    public Category1 findByIndex(int i){
        int j=0;
        for (Category1 c: category1s) {
            if(i == j)
                return c;
        }
        return null;
    }

    //method to count book in the category
    public void countBook(){
        int total =0;
        System.out.println("\nCount books in category");
        System.out.print("Category name: ");
        String catName = sc.nextLine();
        for (Category1 c: category1s) {
            if(catName.equals(c.getcName())){
                for (int i=0; i<c.bQuantity.size(); i++){
                    total = total + c.bQuantity.get(i);
                }
                //System.out.println("Book title: "+c.getbTitle());
                System.out.println("The total for each category is: "+total);
            }
        }if(category1s.isEmpty()){
            System.out.println("Category not found");
        }
    }
}

class Category1 {
    String cName;
    String cDescription;
    ArrayList<String> bTitle = new ArrayList<>();
    ArrayList<Integer> bQuantity = new ArrayList<>();
    ArrayList<Integer> bISBN = new ArrayList<>();

    public Category1(String cName, String cDescription, ArrayList<String> bTitle, ArrayList<Integer> bQuantity, ArrayList<Integer> bISBN) {
        this.bISBN = bISBN;
        this.cName = cName;
        this.cDescription = cDescription;
        this.bTitle = bTitle;
        this.bQuantity = bQuantity;
    }

    public Category1() {
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getcDescription() {
        return cDescription;
    }

    public void setcDescription(String cDescription) {
        this.cDescription = cDescription;
    }

    public ArrayList<String> getbTitle() {
        return bTitle;
    }

    public void setbTitle(ArrayList<String> bTitle) {
        this.bTitle = bTitle;
    }

    public ArrayList<Integer> getbQuantity() {
        return bQuantity;
    }

    public void setbQuantity(ArrayList<Integer> bQuantity) {
       // ConvertStringToInteger1.convertStringIoInt(bQuantity);
        this.bQuantity = bQuantity;
    }

    public ArrayList<Integer> getbISBN() {
        return bISBN;
    }

    public void setbISBN(ArrayList<Integer> bISBN) {
        this.bISBN = bISBN;
    }
}
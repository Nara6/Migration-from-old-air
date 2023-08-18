import java.util.Scanner;
import java.util.ArrayList;

public class ProductManagement {
    ArrayList<Product> products = new ArrayList<Product>();
    Scanner scanner = new Scanner(System.in);

    public ProductManagement() {
        products.add(new Product("1", "Product_1", 30, 100));
        products.add(new Product("2", "Product_2", 10, 50));
        products.add(new Product("3", "Product_3", 20, 110));
        products.add(new Product("4", "Product_4", 40, 222));
        products.add(new Product("5", "Product_5", 130, 550));
        products.add(new Product("6", "Product_6", 10, 150));
        products.add(new Product("7", "Product_7", 33, 120));
        products.add(new Product("8", "Product_8", 43, 120));
        products.add(new Product("9", "Product_9", 330, 120));
        products.add(new Product("10", "Product_10", 230, 300));
        products.add(new Product("11", "Product_11", 12, 100));
        products.add(new Product("12", "Product_12", 31, 140));
        products.add(new Product("13", "Product_13", 39, 150));
        products.add(new Product("14", "Product_14", 22, 160));
        products.add(new Product("15", "Product_15", 25, 170));
        products.add(new Product("16", "Product_16", 130, 180));
        products.add(new Product("17", "Product_17", 22, 300));
        products.add(new Product("18", "Product_18", 310, 310));
        products.add(new Product("19", "Product_19", 80, 320));
    }

    public void ListAllProduct() {
        System.out.println("\n1. List all products in shop with product number, name, price, and amount in stock");
        System.out.printf("%-10s%15s%30s%20s", "|No:", "|Name:", "|Price:", "|Amount:\n\n");
        for (Product product : products) {
            System.out.printf("%-10s%18s%30s%20s\n", product.getID(), product.getName(), product.getPrice(),
                    product.getAmount());
        }

    }

    public void AddNewProduct() {
        System.out.println("\n2. Add new product to the list");
        System.out.println("\tFollow Instruction Below!!!");
        System.out.print("ID: ");
        String ID = scanner.nextLine();
        System.out.print("Name: ");
        String name = scanner.nextLine();
        System.out.print("Price: ");
        int price = scanner.nextInt();
        System.out.print("Amount: ");
        int amount = scanner.nextInt();
        products.add(new Product(ID, name, price, amount));
    }

    public void RemoveProductByIndex() {
        System.out.println("\n3. Remove product from list by index");
        System.out.print("\tPlease Input Index to be deleted in list: ");
        int index = scanner.nextInt();
        boolean state = false;
        for (Product product : products) {
            if (this.products.indexOf(product) == index) {
                state = true;
            }
        }
        if (state == true) {
            products.remove(index);
        } else {
            System.out.println("\nINDEX NOT FOUND IN THE LIST!!!");
        }
    }

    public void UpdateProductInList() {
        System.out.println("\n4. Update product in list");
        System.out.print("\tPlease Input Product ID: ");
        String ID = scanner.nextLine();
        boolean State = false;
        int index = 0;
        for (Product product : products) {
            if (ID.equals(product.getID())) {
                State = true;
                index = products.indexOf(product);
            }
        }
        if (State) {
            System.out.println("\nID FOUND!!!");
            System.out.println("\tPlease Input Info to be updated");
            System.out.print("Name: ");
            String newName = scanner.next();
            System.out.print("Price: ");
            int price = scanner.nextInt();
            System.out.print("Amount: ");
            int amount = scanner.nextInt();
            this.products.set(index,
                    new Product(ID, newName, price, amount));
        } else {
            System.out.println("\n\nID NOT FOUND!!!");
        }
    }

    public static void main(String[] args) {
        ProductManagement product = new ProductManagement();
        Scanner scanner = new Scanner(System.in);
        int option;
        do {
            System.out.println("\n\n\t\t\t\t |MENU|");
            System.out.println("1. List all products in shop with product number, name, price, and amount in stock");
            System.out.println("2. Add new product to the list");
            System.out.println("3. Remove product from list by index");
            System.out.println("4. Update product in list");
            System.out.println("5. Exit program");
            System.out.print("Option [1-5]: ");
            option = scanner.nextInt();
            switch (option) {
                case 1:
                    product.ListAllProduct();
                    break;
                case 2:
                    product.AddNewProduct();
                    break;
                case 3:
                    product.RemoveProductByIndex();
                    break;
                case 4:
                    product.UpdateProductInList();
                    break;
                case 5:
                    System.out.println("EXIT!!!");
                    break;
            }
        } while (option != 5);
    }
}

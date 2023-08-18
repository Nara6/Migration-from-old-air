package Ex2;

public class Main {
    public static void main(String[] args) {
        Changeslog main = new Changeslog();
		//toString
		System.out.println("toString");
		System.out.println(main);
		//list by date
		System.out.println("list by date");
		main.listingChangeByDates("2023-01-03");
		//list by date range
		System.out.println("\nlist by date range");
		main.listingChangeByDateRange("2022-02-02", "2023-02-03");
    }
}

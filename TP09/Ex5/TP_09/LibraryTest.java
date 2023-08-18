package TP_09;
public class LibraryTest {
    public static void main(String[] args)throws Exception{
        Library library = new Library();
        library.addLibrary();
        System.out.println("\nList all information of the library");
        System.out.println(library);
        library.listCategory();
        library.listBookByCategory();
        library.listAvailableBook();
        library.descreaseBook();
        library.removeBook();
    }
}

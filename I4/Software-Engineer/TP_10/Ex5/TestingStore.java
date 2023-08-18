package Ex5;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Scanner;
public class TestingStore {
    public static void main(String[] args) throws SQLException, ParseException {
        Scanner s =  new Scanner(System.in);
       Connection connection = ManageStore.getCon();
       ManageStore storeManager = new ManageStore();

        int option=1;
        while (option!=0){
            System.out.println("\n1.Add new customer to  waiting\n2.Display ordered list\n0.Exit");
            System.out.print("\nChoose any option: ");
            option=s.nextInt();
            switch (option){
                case 1: storeManager.dataInput();
                    break;
                case 2:storeManager.dataOutput();
                    break;

                case 0:System.out.println("\nThanks for using");
                    break;
                default: System.out.println("\ninvalid choice please input again!!\n");
            }

        }


    }
}

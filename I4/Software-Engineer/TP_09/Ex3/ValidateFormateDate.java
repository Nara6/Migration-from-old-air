

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
//import java.util.Scanner;
public class ValidateFormateDate {

    public static int getvalues(String s1) {

        if(s1.matches("[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}"))
        {
            SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
            sdf.setLenient(false);
            try {
                Date d1=sdf.parse(s1);
                return 1;
            } catch (ParseException e) {
                return -1;
            }
        }
        else
            return -1;
    }
}

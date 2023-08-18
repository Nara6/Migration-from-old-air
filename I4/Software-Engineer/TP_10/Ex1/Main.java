package Ex1;
import java.util.Calendar;

public class Main {
    public static void main(String[] args) {
        Calendar date1 = Calendar.getInstance();
		date1.set(2023, 1, 1);
		Calendar date2 = Calendar.getInstance();
		//test substraction
		DateUtil sub = new DateUtil();
		sub.setDate_start(date1);
		sub.setDate_end(date2);
		sub.substraction();
		//test increment
		DateUtil incre = new DateUtil();
		incre.setDate_start(date1);
		incre.increment(10);
    }

}

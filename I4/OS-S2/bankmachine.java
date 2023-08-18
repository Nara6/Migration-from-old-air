package counter;

public class bankmachine {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		bank b1= new bank();
		Thread t1 = new Thread(b1, "Thread1");
		Thread t2 = new Thread(b1, "Thread2");
		t1.start();
		t2.start();
	}

}

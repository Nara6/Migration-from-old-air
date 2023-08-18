package counter;

public class bank implements Runnable {

	private static int balance = 0;

	private static void deposit() {
	    
	    try   
	    {  
	    Thread.sleep(10);  
	    }   
	    catch (InterruptedException e)   
	    {  
	    //Auto-generated catch block  
	    e.printStackTrace();  
	    }  
	    balance = balance + 1;
	}  

	private static void withdraw() {
	    balance = balance - 1;
	}
	public int getValue() {
		return balance;
	}
	private static void cashMachine() {
	    for (int i = 0; i < 100; ++i) {
	        deposit(); // put a dollar in
	        withdraw(); // take it back out
	    }
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
//		this.cashMachine();
		synchronized(this) {
		this.deposit();
		System.out.println("Value for Thread after deposit "+ Thread.currentThread().getName()+" "+this.getValue());
		this.withdraw();
		System.out.println("Value for Thread after withdraw "+ Thread.currentThread().getName()+" "+this.getValue());
		}
	}
}

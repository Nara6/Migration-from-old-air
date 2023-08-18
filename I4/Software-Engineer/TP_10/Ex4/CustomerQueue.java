package Ex4;
import Ex3.Customer;
import java.util.ArrayList;

public class CustomerQueue {
    private ArrayList<Customer> queue = new ArrayList<>();
	private int count = 0;
	
	public int getCount() {
		return count;
	}
	public boolean addNewCustomer(Customer cus) {
		if(this.count<100) {
			this.queue.add(cus);
			this.count += 1;
			return true;
		}
		return false;
	}
	public boolean removeCustomer() {
		if(this.count>0) {
			this.queue.remove(0);
			this.count -= 1;
			return true;
		}
		return false;
	}
	public Customer getFirstCustomer() {
		if(this.count>0) {
			Customer cus = this.queue.get(0);
			return cus;			
		}
		return null;
	}
}

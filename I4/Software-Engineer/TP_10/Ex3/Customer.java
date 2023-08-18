package Ex3;
import java.time.LocalDate;

public class Customer {
    private int number;
	private LocalDate date;
	private String status;
	private String orderProduct;
	private float paid;
	
	public Customer(int number, String status) {
		this.number = number;
		this.date = LocalDate.now();
		this.status = status;
	}

	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}

	public float getPaid() {
		return paid;
	}

	public void setPaid(float paid) {
		this.paid = paid;
	}

	public String getOrderProduct() {
		return orderProduct;
	}

	public void setOrderProduct(String orderProduct) {
		this.orderProduct = orderProduct;
	}
	
}

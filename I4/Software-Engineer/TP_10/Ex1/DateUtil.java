package Ex1;
import java.sql.*;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;

public class DateUtil {
    static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		}catch(ClassNotFoundException e) {
			e.printStackTrace();
		}
		Connection con = null;
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/?user=root&password=");
			Statement statement = con.createStatement();
			String query = "CREATE DATABASE if NOT EXISTS SE_TP10;";
			statement.execute(query);
			query = "USE SE_TP10;";
			statement.execute(query);
			query = """
					CREATE TABLE if NOT EXISTS exercise1(
						id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
						date_start DATE,
						date_end DATE,
						n_days INT,
						method TEXT(15),
						changed_date TIMESTAMP);
					""";
			statement.execute(query);
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				con.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
	}
    private Calendar date_start;
	private Calendar date_end;
	private long n_days;
	
	public Calendar getDate_start() {
		return date_start;
	}
	public void setDate_start(Calendar date_start) {
		this.date_start = date_start;
	}
	public Calendar getDate_end() {
		return date_end;
	}
	public void setDate_end(Calendar date_end) {
		this.date_end = date_end;
	}
	public long getN_days() {
		return n_days;
	}
	public void setN_days(int n_days) {
		this.n_days = n_days;
	}
    public void substraction() {
		String date_start = String.format("%d-%d-%d", this.date_start.get(Calendar.YEAR), this.date_start.get(Calendar.MONTH)+1, this.date_start.get(Calendar.DATE));
		String date_end = String.format("%d-%d-%d", this.date_end.get(Calendar.YEAR), this.date_end.get(Calendar.MONTH)+1, this.date_end.get(Calendar.DATE));
		LocalDate start = LocalDate.ofInstant(this.date_start.toInstant(), ZoneId.systemDefault());
		LocalDate end = LocalDate.ofInstant(this.date_end.toInstant(), ZoneId.systemDefault());
		n_days = ChronoUnit.DAYS.between(start, end);
		Connection con = null;
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/se_tp10?user=root&password=");
			Statement state = con.createStatement();
			String query = String.format("INSERT INTO exercise1 (date_start, date_end, n_days, method) VALUES('%s','%s',%d,'Substraction');", date_start, date_end, this.n_days);
			boolean check = state.execute(query);
			if(!check) {
				System.out.println("Successed");
			}else {
				System.err.println("Failed");
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				con.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public void increment(int n) {
		String date_start = String.format("%d-%d-%d", this.date_start.get(Calendar.YEAR), this.date_start.get(Calendar.MONTH)+1, this.date_start.get(Calendar.DATE));
		this.date_end = this.date_start;
		this.date_end.add(Calendar.DATE, n);
		String date_end = String.format("%d-%d-%d", this.date_end.get(Calendar.YEAR), this.date_end.get(Calendar.MONTH)+1, this.date_end.get(Calendar.DATE));
		Connection con = null;
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/se_tp10?user=root&password=");
			Statement state = con.createStatement();
			String query = String.format("INSERT INTO exercise1 (date_start, date_end, n_days, method) VALUES('%s','%s',%d,'Increment');", date_start, date_end, n);
			boolean check = state.execute(query);
			if(!check) {
				System.out.println("Successed");
			}else {
				System.err.println("Failed");
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				con.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}


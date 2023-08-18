package Ex2;
import java.sql.*;
public class Changeslog {
    Connection con = null;
	
	@Override
	public String toString() {
		try {
			this.con = DriverManager.getConnection("jdbc:mysql://localhost:3306/se_tp10?user=root&password=");
			Statement state = con.createStatement();
			String query = """
					SELECT * FROM exercise1 
						ORDER BY changed_date DESC LIMIT 5;
					""";
			ResultSet result = state.executeQuery(query);
			this.Display(result);
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				this.con.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return "";
	}
	
	public void Display(ResultSet result) {
		try {
			System.out.println("id\tstart_date\tend_date\tn_days\tmethod\t\tchange_date");
			while(result.next()) {
				int id = result.getInt(1);
				String date_start = result.getString(2);
				String date_end = result.getString(3);
				int n_day = result.getInt(4);
				String method = result.getString(5);
				String changed_date = result.getString(6);
				System.out.printf("%d\t%s\t%s\t%d\t%s\t%s\n", id, date_start, date_end, n_day, method, changed_date);
			}	
		}catch(SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void listingChangeByDates(String date) {
		try {
			this.con = DriverManager.getConnection("jdbc:mysql://localhost:3306/se_tp10?user=root&password=");
			Statement state = this.con.createStatement();
			String query = "SELECT * FROM exercise1 WHERE changed_date LIKE \"" + date + "%\";";
			ResultSet result = state.executeQuery(query);
			this.Display(result);
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				this.con.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	public void listingChangeByDateRange(String from, String to) {
		try {
			this.con = DriverManager.getConnection("jdbc:mysql://localhost:3306/se_tp10?user=root&password=");
			Statement state = this.con.createStatement();
			String query = "SELECT * FROM exercise1 WHERE changed_date >= \"" +from+"\" AND changed_date < \""+to+"\";";
			ResultSet result = state.executeQuery(query);
			this.Display(result);
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				this.con.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
}

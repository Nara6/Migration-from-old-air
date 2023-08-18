import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class BookingSystem {
    private int available;
    private Lock lock;

    public BookingSystem(int totalTicket) {
        this.available = totalTicket;
        this.lock = new ReentrantLock();
    }

    public void bookTickets(int numTicket, String passengerName) {
        lock.lock();

        try {
            if (numTicket > available) {
                System.out.println("Sorry, " + passengerName + "! Not enough ticket available.");
                return;
            }

            System.out.println("Booking " + numTicket + " seat(s) for " + passengerName + "...");
            Thread.sleep(1000);
            available -= numTicket;
            System.out.println(numTicket + " seat(s) booked for " + passengerName + ". Remaining seats: " + available);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }
}

class PassengerThread extends Thread {
    private BookingSystem bookingSystem;
    private int numTicket;
    private String passengerName;

    public PassengerThread(BookingSystem bookingSystem, int numTicket, String passengerName) {
        this.bookingSystem = bookingSystem;
        this.numTicket = numTicket;
        this.passengerName = passengerName;
    }

    @Override
    public void run() {
        bookingSystem.bookTickets(numTicket, passengerName);
    }
}

public class booking_ticket {
    public static void main(String[] args) {
        BookingSystem bookingSystem = new BookingSystem(9);

        PassengerThread passenger1 = new PassengerThread(bookingSystem, 3, "Nara");
        PassengerThread passenger2 = new PassengerThread(bookingSystem, 5, "Lend");
        PassengerThread passenger3 = new PassengerThread(bookingSystem, 2, "Pop");

        passenger1.start();
        passenger2.start();
        passenger3.start();
    }
}

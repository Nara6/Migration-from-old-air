import java.util.ArrayList;

public class Sms {
    String fromNumber;
    String receiveNumber;
    String subject;
    String type;
    ArrayList<Sms> message = new ArrayList<>();

    public Sms() {
    }

    public Sms(String fromNumber, String receiveNumber, String subject, String type) {
        this.fromNumber = fromNumber;
        this.receiveNumber = receiveNumber;
        this.subject = subject;
        this.type = type;
    }

    void sendMessage(int index, String fromNumber, String receiveNumber, String subject, String type) {

        message.add(index, new Sms(fromNumber, receiveNumber, subject, type));
    }

    void viewDetail(String receiveNumber) {
        for (Sms sms : message) {
            if (sms.receiveNumber.equals(receiveNumber)) {
                System.out.println("Number that send: " + sms.fromNumber);
                System.out.println("Number that receive: " + sms.receiveNumber);
                System.out.println("Subject: " + sms.subject);
                System.out.println("Type: " + sms.type);
                break;
            }
        }
    }

    void listDetail() {
        System.out.println("From number \t Receive number \t Subject \t Type");
        for (Sms sms : message) {
            System.out.println(sms.fromNumber + "\t\t" + sms.receiveNumber + "\t\t" + sms.subject + "\t\t" + sms.type);
        }
    }

    void listRemoved(String receiveNumber) {
        message.removeIf(message -> message.receiveNumber.equals(receiveNumber));
    }

}
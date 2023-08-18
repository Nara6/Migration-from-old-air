
public class SMS {
    private String phoneNumber;
    private String receiveNumber;
    private String passwd;
    private String status;
    private String content;

    public SMS(String phoneNumber, String receiveNumber, String passwd, String status, String content) {
        this.phoneNumber = phoneNumber;
        this.receiveNumber = receiveNumber;
        this.passwd = passwd;
        this.status = status;
        this.content = content;
    }

    public SMS() {
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public String getReceiveNumber() {
        return this.receiveNumber;
    }

    public String getPasswd() {
        return this.passwd;
    }

    public String getStatus() {
        return this.status;
    }

    public String getContent() {
        return this.content;
    }

    public void showDetail(String passwd) {
        if (this.passwd == passwd) {
            System.out.printf("\tSender   : %s\n", this.phoneNumber);
            System.out.printf("\tTo       : %s\n", this.receiveNumber);
            System.out.printf("\tContent  : %s\n", this.content);
            if (this.status.equals("true")) {
                System.out.printf("\tStatus  : %s\n", "New");
            } else {
                System.out.printf("\tStatus  : %s\n", "Read");
            }
        }

    }

    public void ListSMSes() {
        System.out.printf("\tSender   : %s\n", this.phoneNumber);
        System.out.printf("\tTo       : %s\n", this.receiveNumber);
        System.out.printf("\tContent  : %s\n", this.content);
        if (this.status.equals("true")) {
            System.out.printf("\tStatus  : %s\n", "New");
        } else {
            System.out.printf("\tStatus  : %s\n", "Read");
        }
    }

    public void Arraylist(String line) {
        String[] lines = line.split(",");
        this.phoneNumber = lines[1];
        this.receiveNumber = lines[2];
        this.passwd = lines[0];

        if (lines[4].equals("true"))
            this.status = "false";
        else
            this.status = "true";

        this.content = lines[4];
    }
}

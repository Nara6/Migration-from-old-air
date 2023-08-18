public class SMS {
    private String phoneNumber;
    private String receiverNumber;
    private String passwd;
    private String type;
    private String content;
    private String status;

    public SMS(String phoneNumber, String receiverNumber, String passwd, String type, String content, String status) {
        this.phoneNumber = phoneNumber;
        this.receiverNumber = receiverNumber;
        this.type = type;
        this.content = content;
        this.status = status;
        this.passwd = passwd;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getReceiverNumber() {
        return this.receiverNumber;
    }

    public void setReceiverNumber(String receiverNumber) {
        this.receiverNumber = receiverNumber;
    }

    public String getPasswd() {
        return this.passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void showDetail() {
        System.out.printf("\tSender   : %s\n", this.phoneNumber);
        System.out.printf("\tTo       : %s\n", this.receiverNumber);
        System.out.printf("\tType     : %s\n", this.type);
        System.out.printf("\tSubject  : %s\n", this.status);
        System.out.printf("\tContent  : %s\n", this.content);
    }

    public void toSMS(String line) {
        String[] lines = line.split(",");
        this.from = lines[0];
        this.receiver = lines[1];
        this.type = lines[2];

        if (lines[3].equals("false"))
            this.status = false;
        else
            this.status = true;

        this.passwd = lines[4];
        this.content = lines[5];

    }

}

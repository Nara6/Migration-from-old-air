public class SMS {
    private String subject;
    private String fromPhoneNumber;
    private String receiverNumber;
    private String type;
    private String content;
    private String status;
    private String userName;
    private String password;
    // private String password;

    public SMS(String status, String fromPhoneNumber, String receiverNumber) {
        this.status = status;
        this.fromPhoneNumber = fromPhoneNumber;
        this.receiverNumber = receiverNumber;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getFromPhoneNumber() {
        return this.fromPhoneNumber;
    }

    public void setFromPhoneNumber(String fromPhoneNumber) {
        this.fromPhoneNumber = fromPhoneNumber;
    }

    public String getReceiverNumber() {
        return this.receiverNumber;
    }

    public void setReceiverNumber(String receiverNumber) {
        this.receiverNumber = receiverNumber;
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

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void readLine(String line) {
        String[] lines = line.split(" ");
        this.userName = lines[0];
        this.password = lines[1];

    }

}

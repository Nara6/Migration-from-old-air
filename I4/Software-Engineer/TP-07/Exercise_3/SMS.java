public class SMS {
    private String subject;
    private String fromPhoneNumber;
    private String receiverNumber;
    private String type;
    private String content;
    private String status;
    // private String password;

    public SMS(String status, String fromPhoneNumber, String receiverNumber) {
        this.status = status;
        this.fromPhoneNumber = fromPhoneNumber;
        this.receiverNumber = receiverNumber;
    }

    public String getSubject() {
        return subject;
    }

    public String getFromPhoneNumber() {
        return fromPhoneNumber;
    }

    public String getReceiverNumber() {
        return receiverNumber;
    }

    public String getType() {
        return type;
    }

    public String getContent() {
        return content;
    }

    public String getStatus() {
        return status;
    }

    // public String getPassword() {
    // return password;
    // }
    public void setFromPhoneNumber(String fromPhoneNumber) {
        this.fromPhoneNumber = fromPhoneNumber;
    }

    public void setReceiverNumber(String receiverNumber) {
        this.receiverNumber = receiverNumber;
    }

    public void setContent(String content) {
        this.content = content;
    }

}

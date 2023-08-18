import java.util.ArrayList;

public class SMS {
  private String subject, passwd;
  private ArrayList<String> content = new ArrayList<>();
  private static final String[] typeList = {"text", "MMS"};
  private String type = typeList[0];
  private boolean isRead = false;
  protected String from, receiver;
  
  public SMS(String subject, String from, String receiver, ArrayList<String> content) {
    this.subject = subject;
    this.from = from;
    this.receiver = receiver;
    this.content = content;
  }

  public SMS(String to, String subject, ArrayList<String> content) {
    this.receiver = to;
    this.subject = subject;
    this.content = content;
  }

  public SMS(String to, ArrayList<String> content) {
    this.receiver = to;
    this.content = content;
  }


  public SMS(String from, String to, String type, String isRead, String passwd, String Subject, ArrayList<String> content) {
    this.from = from;
    this.receiver = to;
    this.type = type;
    if(isRead.equals("false")) this.isRead = false;
    else this.isRead = true;
    this.passwd = passwd;
    this.subject = Subject;
    this.content = content;
  }

  public void setType(int i) {
    if(i == 0 || i == 1) {
      this.type = this.typeList[i];
    }
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public String getSubject() {
    return this.subject;
  }

  public void setContent(ArrayList<String> content) {
    this.content = content;
  }

  public ArrayList<String> getContent() {
    return this.content;
  }

  public void encryptContent(String passwd) {
    this.passwd = passwd;
    AES aes = new AES();
    String textEncrypt;

    for(int i=0; i<this.content.size(); i++) {
      textEncrypt = aes.encrypt(this.content.get(i), passwd);
      this.content.set(i, textEncrypt);
    }
  }

  public void displayContent(String tap) {
    for(int i=0; i<this.content.size(); i++) {
      if(i == 0) {
        System.out.println(this.content.get(i));
      } else System.out.println(tap + this.content.get(i));
    }
  }

  private void displayContent(String tap, String passwd) {
    AES aes = new AES();
    if(this.passwd.equals(passwd)) {
      for(int i=0; i<this.content.size(); i++) {
        String decode = aes.decrypt(this.content.get(i), passwd);
        if(i == 0) {
          System.out.println(decode);
        } else {
          System.out.println(tap + decode);
        }
      }
    } else System.out.print("Error while decrypting - password incorrect!");
  }

  public void read() {
    this.isRead = true;
  }

  public SMS() {}

  public String getType() {
    return this.type;
  }

  public void showDetail() {
    System.out.printf("\tSender   : %s\n", this.from);
    System.out.printf("\tTo       : %s\n", this.receiver);
    System.out.printf("\tType     : %s\n", this.type);
    System.out.printf("\tSubject  : %s\n", this.subject);
    System.out.printf("\tContent  : ");
    this.displayContent("\t\t   ");
  }

  public void showDetail(String passwd) {
    System.out.printf("\tSender   : %s\n", this.from);
    System.out.printf("\tTo       : %s\n", this.receiver);
    System.out.printf("\tType     : %s\n", this.type);
    System.out.printf("\tSubject  : %s\n", this.subject);
    System.out.printf("\tContent  : ");
    this.displayContent("\t\t   ", passwd);
  }

  public String toLine() {
    String line = "";
    line = this.from+ "," +this.receiver+ "," +this.type+ "," +this.isRead+ ","+this.passwd+ "," +this.subject;
    for(var text : this.content) {
      line += "," + text;
    }
    return line;
  }

  public void toSMS(String line) {
    String [] lines = line.split(",");
    this.from = lines[0];
    this.receiver = lines[1];
    this.type = lines[2];

    if(lines[3].equals("false")) this.isRead = false;
    else this.isRead = true;

    this.passwd = lines[4];
    this.subject = lines[5];
    for(int i=6; i<lines.length; i++) {
      this.content.add(lines[i]);
    }
    
  }

}
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;

public class SMSList {
  private ArrayDeque<SMS> SMSList = new ArrayDeque<>();
  static int max_characters_per_sms = 160;

  public SMSList() {
  }

  public void add(SMS sms) {
    this.SMSList.addFirst(sms);
  }

  public void add(ArrayList<String> smg) {
    this.SMSList.addFirst(new SMS("", smg));
  }

  public void add(ArrayList<String> smg, String title) {
    this.SMSList.addFirst(new SMS(title, smg));
  }

  public void removeSMSByIndex(int index) {
    SMS sms = this.getSMSByIndex(index);
    this.SMSList.remove(sms);
  }

  public void viewSMSDetail(int index) {
    int i = 0;
    for (var sms : this.SMSList) {
      if (index == i) {
        sms.showDetail();
        break;
      }
      i++;
    }
  }

  public void viewSMSDetail(int index, String passwd) {
    int i = 0;
    for (var sms : this.SMSList) {
      if (index == i) {
        this.SMSList.peek().read();
        sms.showDetail(passwd);
        break;
      }

      i++;
    }
  }

  public void readDataFromFile(String filename) throws IOException {
    List<String> textList = Files.readAllLines(Path.of(filename, new String[] {}));

    for (String txt : textList) {
      System.out.println(txt);
      SMS sms = new SMS();
      sms.toSMS(txt);
      this.SMSList.addLast(sms);
    }
  }

  public void updateStorage(String fileame) throws IOException {
    Files.delete(Path.of(fileame));
    String text;

    int i = 0;
    for (var sms : this.SMSList) {
      if (i == 0) {
        text = sms.toLine();
        Files.write(Path.of(fileame, new String[] {}), text.getBytes(), StandardOpenOption.CREATE);
      } else {
        text = "\n" + sms.toLine();
        Files.write(Path.of(fileame, new String[] {}), text.getBytes(), StandardOpenOption.APPEND);
      }
      i++;
    }
  }

  public void listSMSes() {
    for (var sms : this.SMSList) {
      System.out.println(sms.from + ", " + sms.receiver);
    }
  }

  public SMS getSMSByIndex(int index) {
    int i = 0;
    for (var sms : this.SMSList) {
      if (i == index) {
        return sms;
      }
      i++;
    }
    return null;
  }

  public static void main(String[] args) {
    SMSList smslist = new SMSList();
    Scanner scanner = new Scanner(System.in);
    int option;
    do {
      System.out.println("\n\n\t\t\t\t |MENU|");
      System.out.println("1. Send new SMS with Encrypted content using password method");
      System.out.println("2. View SMS detail");
      System.out.println("3. List SMSes");
      System.out.println("4. Remove SMSes by index");
      System.out.println("5. Quit!!");
      System.out.print("Option [1-5]: ");
      option = scanner.nextInt();
      switch (option) {
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;
        case 4:

        case 5:
          System.out.println("QUIT!!!");
          break;
      }
    } while (option != 5);
  }

}

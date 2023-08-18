import java.util.Scanner;
import java.util.ArrayList;

public class ManagePCLab {
    ArrayList<PC_Lab306> pclab = new ArrayList<PC_Lab306>();
    Scanner scanner = new Scanner(System.in);

    public ManagePCLab() {
        this.pclab.add(new PC_Lab306(1, false));
        this.pclab.add(new PC_Lab306(2, false));
        this.pclab.add(new PC_Lab306(3, false));
        this.pclab.add(new PC_Lab306(4, false));
        this.pclab.add(new PC_Lab306(5, true));
        this.pclab.add(new PC_Lab306(6, false));
        this.pclab.add(new PC_Lab306(7, false));
        this.pclab.add(new PC_Lab306(8, false));
        this.pclab.add(new PC_Lab306(9, false));
        this.pclab.add(new PC_Lab306(10, false));
        this.pclab.add(new PC_Lab306(11, true));
        this.pclab.add(new PC_Lab306(12, false));
        this.pclab.add(new PC_Lab306(13, true));
        this.pclab.add(new PC_Lab306(14, false));
        this.pclab.add(new PC_Lab306(15, true));
        this.pclab.add(new PC_Lab306(16, true));
        this.pclab.add(new PC_Lab306(17, false));
        this.pclab.add(new PC_Lab306(18, false));
        this.pclab.add(new PC_Lab306(19, false));
        this.pclab.add(new PC_Lab306(20, false));
    }

    public void ListAllPC() {
        System.out.println("1. LIST ALL LAB PCs");
        System.out.println("|DESK ID:\t\t|CONDITION:");
        for (PC_Lab306 pc : this.pclab) {
            System.out.printf("\t%s\t\t%s\n", pc.getDesk(), (pc.getIsDamaged() == false) ? "Good" : "Demage");
        }
    }

    public void DamagePC() {
        System.out.println("2. LIST ALL DEMAGE PCs");
        System.out.println("|DESK ID:\t\t|CONDITION:");
        for (PC_Lab306 pc : this.pclab) {
            if (pc.getIsDamaged() == true) {
                System.out.println("\t" + pc.getDesk() + "\t\tDemage");
            }
        }
    }

    public void GoodPC() {
        System.out.println("3. LIST ALL GOOD PCs");
        System.out.println("|DESK ID:\t\t|CONDITION:");
        for (PC_Lab306 pc : this.pclab) {
            if (pc.getIsDamaged() == false) {
                System.out.println("\t" + pc.getDesk() + "\t\tGood");
            }
        }
    }

    public void MarkDemage() {
        System.out.print("PLEASE PROVIDES DESK ID TO BE MARK AS DEMAGE: ");
        int ID = scanner.nextInt();
        for (PC_Lab306 pc : this.pclab) {
            if (ID == (pc.getDesk())) {
                if (pc.getIsDamaged() != true) {
                    this.pclab.set(this.pclab.indexOf(pc), new PC_Lab306(pc.getDesk(), true));
                    System.out.println("\n\tMARK SUCCESSFULLY!!!\n");
                } else {
                    System.out.println("\n\tALREADY IN DEMAGE CONDITION!!!\n");
                }
            }
        }
    }

    public void MarkNotDemage() {
        System.out.print("PLEASE PROVIDES DESK ID TO BE MARK AS NOT DEMAGE: ");
        int ID = scanner.nextInt();
        for (PC_Lab306 pc : this.pclab) {
            if (ID == (pc.getDesk())) {
                if (pc.getIsDamaged() == true) {
                    this.pclab.set(this.pclab.indexOf(pc), new PC_Lab306(pc.getDesk(), false));
                    System.out.println("\n\tMARK SUCCESSFULLY!!!\n");
                } else {
                    System.out.println("\n\tALREADY IN GOOD CONDITION!!!\n");
                }
            }
        }
    }

    public static void main(String[] args) {
        ManagePCLab pclab = new ManagePCLab();
        Scanner scanner = new Scanner(System.in);
        int option;
        do {
            System.out.println("\n\n\t\t\t\t |MENU|");
            System.out.println("1. List all PCs");
            System.out.println("2. List all damages PCs");
            System.out.println("3. List all good PCs");
            System.out.println("4. Mark a PC as damaged");
            System.out.println("5. Mark a PC as not damaged");
            System.out.println("6. QUIT");
            System.out.print("Option [1-6]: ");
            option = scanner.nextInt();
            switch (option) {
                case 1:
                    pclab.ListAllPC();
                    break;
                case 2:
                    pclab.DamagePC();
                    break;
                case 3:
                    pclab.GoodPC();
                    break;
                case 4:
                    pclab.MarkDemage();
                    break;
                case 5:
                    pclab.MarkNotDemage();
                    break;
                case 6:
                    System.out.println("EXIT!!!");
                    break;
            }
        } while (option != 6);
    }
}

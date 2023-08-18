import java.util.Scanner;
import java.util.ArrayList;

public class SetCourse {
    ArrayList<Course> courses = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);

    public SetCourse() {
        courses.add(new Course("Networks I", "NHEM Thayheng", 18, "MS-Teams", "Course/TD"));
        courses.add(new Course("Telecommunication", "Chea Socheat", 18, "MS-Teams", "Course"));
        courses.add(new Course("Internet Programming I", "Chun Thavorac", 18, "F404", "Course/TD"));
        courses.add(new Course("Advanced Database", "Nop Phearum", 36, "MS-Teams", "Course/TD"));
        courses.add(new Course("Advanced Computer Architecture", "Chun Thavorac", 18, "MS-Teams", "Course"));
        courses.add(new Course("Operating System I", "Heng Rathpisey", 18, "F404", "Course/TD"));
        courses.add(new Course("Software Engineering I", "Tal Tongsreng", 18, "F404", "Course/TD"));
        courses.add(new Course("Software Engineering I", "Tal Tongsreng", 18, "F404", "TP"));
        courses.add(new Course("Internet Programming I", "Hok Tin", 18, "F209", "TP"));
        courses.add(new Course("Networks I", "NHEM Thayheng", 18, "F309", "TP"));
        courses.add(new Course("Operating System I", "Heng Rathpisey", 18, "F209", "TP"));
        courses.add(new Course("Telecommunication", "Chea Socheat", 18, "F309", "TP"));
        courses.add(new Course("Advanced Database", "Nop Phearum", 18, "F210", "TP"));
    }

    public void ListAllCourses() {
        System.out.println("1. List all courses");
        System.out.printf("%s%40s%25s%20s%20s\n\n", "|Name:", "|TeachBy:", "|Duration:", "|Room:", "|Type:");
        System.out.println(
                "---------------------------------------------------------------------------------------------------------------");
        for (Course c : courses) {
            System.out.printf("%-30s%20s%20s%20s%20s\n", c.getName(), c.getTeachBy(), c.getDuration(), c.getRoom(),
                    c.getType());
        }
        System.out.println(
                "---------------------------------------------------------------------------------------------------------------");
    }

    public void FindCourseByName() {
        System.out.println("2. Find courses by name");
        System.out.print("Please Input a course name: ");
        String course = scanner.nextLine();
        System.out.printf("%s%40s%25s%20s%20s\n\n", "|Name:", "|TeachBy:", "|Duration:", "|Room:", "|Type:");
        System.out.println(
                "---------------------------------------------------------------------------------------------------------------");
        boolean state = false;
        for (Course c : courses) {
            if (c.getName().equalsIgnoreCase(course)) {
                state = true;
                System.out.printf("%-30s%20s%20s%20s%20s\n", c.getName(), c.getTeachBy(), c.getDuration(), c.getRoom(),
                        c.getType());
            }
        }
        if (state == false) {
            System.out.println("\t\t\t--------------------------COURSE INVALID!!!------------------------");
        }
    }

    public void addNewCourse() {
        System.out.println("3. Add new course");
        System.out.println("Please Provide The Info of Course Below to be added!!!\n");
        System.out.print("\tName: ");
        String name = scanner.nextLine();
        System.out.print("\tTeachBy: ");
        String teachBy = scanner.nextLine();
        System.out.print("\tDuration: ");
        int duration = scanner.nextInt();
        System.out.print("\tRoom: ");
        String room = scanner.next();
        System.out.print("\tType (TP | Course): ");
        String type = scanner.next();
        this.courses.add(new Course(name, teachBy, duration, room, type));
    }

    public static void main(String[] args) {
        SetCourse SetCourses = new SetCourse();
        Scanner scanner = new Scanner(System.in);
        int option;
        do {
            System.out.println("\n\n\t\t\t\t |MENU|");
            System.out.println("1. List all courses");
            System.out.println("2. Find courses by name");
            System.out.println("3. Add new course");
            System.out.println("4. Quit");
            System.out.print("Option [1-4]: ");
            option = scanner.nextInt();
            switch (option) {
                case 1:
                    SetCourses.ListAllCourses();
                    break;
                case 2:
                    SetCourses.FindCourseByName();
                    break;
                case 3:
                    SetCourses.addNewCourse();
                    break;
                case 4:
                    System.out.println("QUIT!!!");
                    break;
            }
        } while (option != 4);
    }
}

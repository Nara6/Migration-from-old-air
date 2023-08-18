import java.util.Scanner;
import java.util.ArrayList;

public class ModifiedStudent {
    ArrayList<Student> students = new ArrayList<Student>();
    Scanner scanner = new Scanner(System.in);

    public ModifiedStudent() {
        students.add(new Student("e20191298", "Nara", 21, "GIC"));
        students.add(new Student("e20191111", "Heng", 22, "GIC"));
        students.add(new Student("e20191199", "BeBe", 22, "GIM"));
    }

    public void AddStudent() {
        System.out.println("\n\n|--------1. Add new student---------|\n");
        System.out.print("ID: ");
        String ID = scanner.nextLine();
        System.out.print("Name: ");
        String name = scanner.nextLine();
        System.out.print("Age: ");
        int age = scanner.nextInt();
        System.out.print("Department: ");
        String department = scanner.next();
        students.add(new Student(ID, name, age, department));
    }

    public void removeStudentByName() {
        System.out.println("\n\n|--------3. Remove student by name---------|\n");
        System.out.print("\nPlease Enter the name to be removed: ");
        String name = scanner.next();
        boolean State = true;
        for (Student student : this.students) {
            if (name.equalsIgnoreCase(student.getName())) {
                State = false;
                this.students.remove(this.students.indexOf(student));
                System.out.println("Delete Successfully!!!");
                break;
            }
        }
        if (State) {
            System.out.println("\nDOES NOT EXIST!!!");
        }
    }

    public void ListStudent() {
        System.out.println("\n\n|--------2. List students---------|\n");
        System.out.println("|ID:\t       |Name:\t        |Age:\t|Department:");
        for (Student student : this.students) {
            System.out.println("\n" + student.getID() + "\t" + student.getName() + "\t\t" + student.getAge() + "\t"
                    + student.getDepartment());
        }
    }

    public void updateStudentByID() {
        System.out.println("\n\n|--------4. Update student information by id---------|\n");
        System.out.print("\nPlease Enter ID to be updated: ");
        boolean State = false;
        String ID = scanner.next();
        int index = 0;
        for (Student student : this.students) {
            if (ID.equals(student.getID())) {
                State = true;
                index = this.students.indexOf(student);
            }
        }
        if (State) {
            System.out.println("\nID FOUND!!!");
            System.out.println("Please Input Info to be updated");
            System.out.print("Name: ");
            String newName = scanner.next();
            System.out.print("Age: ");
            int age = scanner.nextInt();
            System.out.print("Department: ");
            String department = scanner.next();
            this.students.set(index,
                    new Student(ID, newName, age, department));
        } else {
            System.out.println("\n\nID NOT FOUND!!!");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ModifiedStudent modStudent = new ModifiedStudent();
        int option;
        do {
            System.out.println("\n\n\t\t\t\t |MENU|");
            System.out.println("1. Add new student");
            System.out.println("2. List students");
            System.out.println("3. Remove student by name");
            System.out.println("4. Update student information by id");
            System.out.println("5. Quit");
            System.out.print("Option [1-5]: ");
            option = scanner.nextInt();
            switch (option) {
                case 1:
                    modStudent.AddStudent();
                    break;
                case 2:
                    modStudent.ListStudent();
                    break;
                case 3:
                    modStudent.removeStudentByName();
                    break;
                case 4:
                    modStudent.updateStudentByID();
                    break;
                case 5:
                    System.out.println("QUIT!!!");
                    break;
            }
        } while (option != 5);
    }
}

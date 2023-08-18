public class Student {
    private String ID;
    private String name;
    private int age;
    private String department;

    public Student(String ID, String name, int age, String department) {
        this.ID = ID;
        this.name = name;
        this.age = age;
        this.department = department;
    }

    public String getID() {
        return this.ID;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    public String getDepartment() {
        return this.department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

}
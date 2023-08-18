public class Ex1 {
    int age;
    String name;

    public Ex1(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Name: " + name + "Age: " + age;
    }

    public static void main(String[] args) {
        Ex1 test = new Ex1(20, "Meow");
        System.out.println(test);
    }

}

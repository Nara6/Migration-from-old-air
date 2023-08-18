public class Person {
    String id;
    String name;
    int age;

    void show() {
        System.out.printf("ID: %s; Name: %s; Age: %d\n", id, name, age);
    }

    public static void main(String[] args) {
        Person p1 = new Person();
        p1.id = "e20192923";
        p1.name = "Nara";
        p1.age = 21;
        p1.show();
    }
}

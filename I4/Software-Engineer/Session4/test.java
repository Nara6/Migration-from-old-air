public class test {
    int age;
    String name;

    public test(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Name: " + name + "Age: " + age;
    }

    public static void main(String[] args) {
        test test = new test();
        test(21, "Nara");
        System.out.println(test);
    }

}

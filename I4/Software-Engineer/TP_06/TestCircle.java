public class TestCircle {
    public static void main(String[] args) {
        Point p = new Point(5, 5);
        Point p1 = new Point(2, 0);
        Circle c = new Circle(p, p1);
        System.out.println("Length: " + c.length());
        System.out.println("Radius: " + c.radius());
        System.out.println("Surface: " + c.surface());
    }
}

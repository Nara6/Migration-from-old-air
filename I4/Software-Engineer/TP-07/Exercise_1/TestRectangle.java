public class TestRectangle {
    // Create an instance of class Rectangle (call its constructor)
    static Rectangle rectangle = new Rectangle(2, 3);

    public static void main(String[] args) {
        // Display perimeter of it (the new created rectangle object)
        System.out.println("Result of Perimeter: " + rectangle.calculatePerimeter());
        // Display surface of it (the new created rectangle object)
        System.out.println("Result of Surface: " + rectangle.calculateSurface());

    }
}

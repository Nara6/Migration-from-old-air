public class Rectangle {
    private int height;
    private int width;

    public Rectangle(int height, int width) {
        this.height = height;
        this.width = width;
    }

    public int calculatePerimeter() {
        return (width + height) * 2;
    }

    public int calculateSurface() {
        return width * height;
    }

}

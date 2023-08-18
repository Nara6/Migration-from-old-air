public class Circle {
    private Point center;
    private Point p;

    public Circle(Point _center, Point p) {
        this.center = _center;
        this.p = p;
    }

    public double radius() {
        return this.center.distance(p);
    }

    public double length() {
        return (2 * Math.PI * this.radius());
    }

    public double surface() {
        return (Math.PI * Math.pow(this.radius(), 2));
    }
}
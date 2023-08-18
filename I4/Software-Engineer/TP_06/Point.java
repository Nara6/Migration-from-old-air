public class Point {
    private int x;
    private int y;

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }

    public Point() {
        this.x = 0;
        this.y = 0;
    }

    public Point(int x) {
        this.x = x;
        this.y = 0;
    }

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public double distance(Point newPoint) {
        double dis;
        dis = Math.sqrt(Math.pow(newPoint.x - this.x, 2) + Math.pow(newPoint.y - this.y, 2));
        return dis;
    }

}

import java.util.Scanner;

public class Point3D {
    private String x, y, z;

    public Point3D(String x, String y, String z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Point3D() {
    }

    public static Point3D dataInput(){
        Scanner sc = new Scanner(System.in);
        Point3D point = new Point3D();
        System.out.print("Input X: ");
        point.setX(sc.nextLine());
        System.out.print("Input Y: ");
        point.setY(sc.nextLine());
        System.out.print("Input Z: ");
        point.setZ(sc.nextLine());
        return point;
    }

    public String getX() {
        return x;
    }

    public void setX(String x){
        ConvertStringToInteger.convertStringToInt(x);
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        ConvertStringToInteger.convertStringToInt(y);
        this.y = y;
    }

    public String getZ() {
        return z;
    }

    public void setZ(String z) {
        ConvertStringToInteger.convertStringToInt(z);
        this.z = z;
    }

    @Override
    public String toString() {
        return "Point3D{" +
                "x='" + x + '\'' +
                ", y='" + y + '\'' +
                ", z='" + z + '\'' +
                '}';
    }

}


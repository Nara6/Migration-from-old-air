package TP_09;
import java.util.Scanner;

public class Point3D {
    private int x, y, z;

    public int getX() {
        return this.x;
    }

    public void setX(int x) {
        this.x=x;
    }

    public int getY() {
        return this.y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getZ() {
        return this.z;
    }

    public void setZ(int z) {
        this.z = z;
    }

    public static Point3D InputData(){
        Scanner sc = new Scanner(System.in);
        Point3D point = new Point3D();
        System.out.print("x: ");
        try{
            point.setX(Integer.parseInt(sc.nextLine()));
        }catch(Exception e){
            System.out.println("Accept Only Integer number");
        }
        System.out.print("y: ");
        try{
            point.setY(sc.nextInt());
        }catch(Exception e){
            System.out.println("Accept Only Integer number");
        }
        System.out.print("z: ");
        try{
            point.setZ(sc.nextInt());
        }catch(Exception e){
            System.out.println("Accept Only Integer number");
        }
        
        return point;
    }
    public void Display(Point3D point) {
        System.out.printf("x: %d, y: %d, z: %d\n", point.x, point.y, point.z);
    }
    public static void main(String[] args) {
        
        Point3D point = Point3D.InputData();
        point.Display(point);
    }

}

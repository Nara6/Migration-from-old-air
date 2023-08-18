import javax.swing.JFrame;

public class Window extends JFrame {
    public static void main(String[] args) {
        Window win = new Window();
        win.setSize(500, 500);
        win.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Design design = new Design();
        Smiley smiley = new Smiley();
        design.addObject(smiley);
        win.setContentPane(design);

        win.setVisible(true);
    }
}

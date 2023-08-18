import java.awt.*;

public class Smiley {
    // attributes
    Color color = Color.ORANGE;
    int width = 60, height = 60;
    boolean isSad = false, isSmile = false;
    int x = 50, y = 50;

    void smile() {
        isSmile = true;
        isSad = false;
    }

    void sad() {
        isSmile = false;
        isSad = true;
    }

    void draw(Graphics g) {
        g.setColor(color);
        g.setPaintMode();// fill background of drawing
        g.fillOval(x, y, width, height);// fill the background
        g.setColor(Color.black);
        g.drawOval(x, y, width, height);// draw the black border
        // draw the face
        int eyeW = width / 5;
        int eyeH = height / 5;
        int mid = width / 4;
        g.drawOval(x + mid - eyeW / 2, y + eyeH, eyeW, eyeH);
        g.drawOval(x + (3 * mid - eyeW / 2), y + eyeH, eyeW, eyeH);
        g.drawLine(x + 2 * mid, y + 2 * eyeH, x + 2 * mid, y + 3 * eyeH);
        if (isSad == false && isSmile == false)
            g.drawLine(x + mid, y + 4 * eyeH, x + 3 * mid, y + 4 * eyeH);
        else if (isSad)
            g.drawArc(x + mid, y + 4 * eyeH, 2 * mid, 2 * eyeH, 45, 90);
        else
            g.drawArc(x + mid, y + 2 * eyeH, 2 * mid, 2 * eyeH, 225, 90);
    }
}
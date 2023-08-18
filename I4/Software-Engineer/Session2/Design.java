import javax.swing.JPanel;
import java.util.LinkedList;
import java.awt.Graphics;

public class Design extends JPanel {
    LinkedList<Smiley> smileys = new LinkedList<>();

    void erase() {
        smileys.clear();// remove everything from array
    }

    void draw(Graphics g) {
        if (g == null)
            g = getGraphics();
        for (int i = 0; i < smileys.size(); i++) {
            smileys.get(i).draw(g);
        }
    }

    void addObject(Smiley smiley) {
        smileys.add(smiley);
    }

    public void paint(Graphics g) {
        draw(g);
    }
}
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Range_UtilClass {
    private int start;
    private int end;
    private int step;
    private String type;
    private String string;
    List<Integer> list = new ArrayList<>();

    public Range_UtilClass(int start, int end, int step, String type) {
        this.start = start;
        this.end = end;
        this.step = step;
        this.type = type;
    }

    public void to_String() {
        if (this.type.equals("SMALLER")) {
            for (Integer i = this.start; i <= this.end; i = i + this.step) {
                list.add(i);
            }
            this.string = list.stream().map(String::valueOf).collect(Collectors.joining(", "));
            System.out.println(this.string);
        } else if (this.type.equals("BIGGER")) {
            for (Integer i = this.end; i >= this.start; i = i - this.step) {
                list.add(i);
            }
            this.string = list.stream().map(String::valueOf).collect(Collectors.joining(", "));
            System.out.println(this.string);
        }

    }
}

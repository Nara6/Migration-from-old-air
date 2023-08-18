public class SequenceDP {
    private int number;

    // public SequenceDP(int number) {
    // this.number = number;
    // }

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public void disOddnumber() {
        for (int i = 1; i <= this.number; i++) {
            if (i % 2 == 0) {
                System.out.printf("%02d ", i);
            }
        }
    }

    public void disEvennumber() {
        for (int i = this.number; i >= 0; i--) {
            if (i % 2 != 0) {
                System.out.printf("%02d ", i);
            }
        }
    }
}

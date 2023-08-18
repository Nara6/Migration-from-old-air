public class LuckyNumber {
    private int number;
    private int[] digit = new int[6];
    private int first3Digit;
    private int last3Digit;

    public LuckyNumber(int number) {
        setNumber(number);
    }

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public boolean isLucky() {
        int num = this.number;
        for (int i = 0; i < 6; i++) {
            digit[i] = num % 10;
            num = num / 10;
        }
        first3Digit = digit[3] + digit[4] + digit[5];
        last3Digit = digit[0] + digit[1] + digit[2];
        return (first3Digit == last3Digit) ? true : false;
    }

    public boolean isValid() {
        return (this.number / 100000 > 0 && this.number / 100000 < 10) ? false : true;
    }

}

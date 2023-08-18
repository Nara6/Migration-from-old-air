public class ReverseNumber {
    private int number;
    private int[] digit = new int[4];

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int Reverse() {
        int num = this.number;
        for (int i = 0; i < 4; i++) {
            digit[i] = num % 10;
            num = num / 10;
        }
        for (int i = 0; i < 4; i++) {
            num = num * 10 + digit[i];
        }
        return num;
    }

    public boolean isValid() {
        return (this.number / 1000 > 0 && this.number / 1000 < 10) ? false : true;
    }
}

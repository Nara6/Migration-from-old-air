public class PrimeNumber {
    private int num;
    private int faultNum;

    public PrimeNumber(int num) {
        setNum(num);
    }

    public int getNum() {
        return this.num;
    }

    public int getFaulatNum() {
        return this.faultNum;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public boolean isPrime() {
        if (this.num > 1) {
            for (int i = 2; i <= this.num / 2; i++) {
                if (this.num % i == 0) {
                    faultNum = i;
                    return false;
                }
            }
        }
        return true;
    }
}
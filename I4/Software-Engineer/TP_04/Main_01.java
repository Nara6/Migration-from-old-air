import java.util.Scanner;

public class Main_01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input number to check whether it is prime number: ");
        int num = sc.nextInt();
        PrimeNumber prime = new PrimeNumber(num);
        Boolean check = prime.isPrime();
        if (check) {
            System.out.printf("%d is prime number\n", prime.getNum());
        } else {
            System.out.printf("%d is not prime number, because it is divisible to %d.\n", prime.getNum(),
                    prime.getFaulatNum());
        }
    }
}

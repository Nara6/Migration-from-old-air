import java.util.concurrent.Semaphore;

class PrintThread extends Thread {
    private Semaphore currentSemaphore;
    private Semaphore nextSemaphore;
    private String message;

    public PrintThread(Semaphore currentSemaphore, Semaphore nextSemaphore, String message) {
        this.currentSemaphore = currentSemaphore;
        this.nextSemaphore = nextSemaphore;
        this.message = message;
    }

    @Override
    public void run() {
        try {
            currentSemaphore.acquire();
            System.out.print(message);
            nextSemaphore.release();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class SemaphoreExercise {
    public static void main(String[] args) {
        Semaphore semaphoreA = new Semaphore(1);
        Semaphore semaphoreB = new Semaphore(0);
        Semaphore semaphoreC = new Semaphore(0);

        PrintThread thread1 = new PrintThread(semaphoreA, semaphoreB, "H");
        PrintThread thread2 = new PrintThread(semaphoreB, semaphoreC, "E");
        PrintThread thread3 = new PrintThread(semaphoreC, semaphoreA, "LLO");

        thread1.start();
        thread2.start();
        thread3.start();

        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

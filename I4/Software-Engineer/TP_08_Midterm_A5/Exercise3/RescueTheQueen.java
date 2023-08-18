public class RescueTheQueen {
    private String textQuestion;
    private String posibleAnswer;
    private boolean isCorrect;
    private String correctAnswer;

    public RescueTheQueen(String posibleAnswer) {
        this.posibleAnswer = posibleAnswer;
    }

    public RescueTheQueen() {
    }

    public String getTextQuestion() {
        return this.textQuestion;
    }

    public void setTextQuestion(String textQuestion) {
        this.textQuestion = textQuestion;
    }

    public String getPosibleAnswer() {
        return this.posibleAnswer;
    }

    public void setPosibleAnswer(String posibleAnswer) {
        this.posibleAnswer = posibleAnswer;
    }

    public boolean getIsCorrect() {
        return this.isCorrect;
    }

    public void setIsCorrect(boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public String getCorrectAnswer() {
        return this.correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public void CheckAnswer() {
        if (this.isCorrect) {
            System.out.println("Congrate You have passed Question1");
        } else {
            System.out.println("Please Try Again");
        }
    }
}

public class Rescue {
    private String Question;
    private String Answer;
    private boolean isCorrect;

    public Rescue(String Question, String Answer, boolean isCorrect) {
        this.Question = Question;
        this.Answer = Answer;
        this.isCorrect = isCorrect;
    }

    public Rescue() {
    }

    public String getQuestion() {
        return this.Question;
    }

    public void setQuestion(String Question) {
        this.Question = Question;
    }

    public String getAnswer() {
        return this.Answer;
    }

    public void setAnswer(String Answer) {
        this.Answer = Answer;
    }

    public boolean isIsCorrect() {
        return this.isCorrect;
    }

    public boolean getIsCorrect() {
        return this.isCorrect;
    }

    public void setIsCorrect(boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

}

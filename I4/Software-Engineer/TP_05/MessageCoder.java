public class MessageCoder {
    private String text;
    private String newText;

    public MessageCoder(String text) {
        this.text = text;
        this.newText = text;
    }

    public String Encoder() {
        newText = newText.replace("\\n", "");
        newText = newText.replace("\\t", "");
        newText = newText.replace("\\\\", "");
        newText = newText.replace("//", "");
        newText = newText.replace(":)", "");
        newText = newText.replace("\"", "");
        newText = newText.replace("\\", "");
        newText = newText.replace(":", "");
        newText = newText.replace(")", "");
        return newText;
    }

    public String Decoder() {
        return text;
    }
}

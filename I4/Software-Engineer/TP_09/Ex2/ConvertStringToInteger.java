

public class ConvertStringToInteger{
    public static void convertStringToInt(String str){
        try{
            int result = Integer.parseInt(str);
        }catch (NumberFormatException e){
            System.out.println("Unable to convert string to integer");
        }
    }
}

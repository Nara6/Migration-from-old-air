package Exceptions;

public class DBException extends RuntimeException {
    public DBException(Throwable e){
        super(e);
    }
}

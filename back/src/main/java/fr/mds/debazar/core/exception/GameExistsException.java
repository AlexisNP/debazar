package fr.mds.debazar.core.exception;

@SuppressWarnings("serial")
public class GameExistsException extends Throwable {

    public GameExistsException(final String message) {
        super(message);
    }
}

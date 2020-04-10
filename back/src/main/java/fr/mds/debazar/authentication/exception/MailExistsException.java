package fr.mds.debazar.authentication.exception;

@SuppressWarnings("serial")
public class MailExistsException extends Throwable {
	
	public MailExistsException(final String message) {
		super(message);
	}

}


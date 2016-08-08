package io.egen.rest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND)
public class SeriesNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 405802649322364762L;

	public SeriesNotFoundException(String message) {
		super(message);
	}

	public SeriesNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

}

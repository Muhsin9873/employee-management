export class ToastrMessages {
    /**
     * Description: Contains an oject with custom error messages for HTTP errors
     */
    public static HTTP_ERROR_MESSAGES = {
      DEFAULT: 'Something went wrong.',
      ERROR_GENERIC_0: 'Generic error.',
      ERROR_INTERNAL_2: 'Something went wrong on the server.',
      ERROR_FORBIDDEN_403: 'Forbidden.',
      ERROR_NOT_FOUND_404: 'Not found.',
      ERROR_BAD_REQUEST_400: 'Bad request.',
      ERROR_AUTHENTICATION_ERROR_401: 'Session expired, please login again.',
      ERROR_AUTHENTICATION_ERROR_429: 'Something went wrong, please refresh the page.',
      ERROR_SERVER_ERROR_500: 'Internal server error.',
      ERROR_SERVICE_ERROR_503: 'Service unavailable.',
      ERROR_GATEWAY_ERROR_504: 'Gateway timeout error, please try again later.',
      ERROR_FALIURE_ERROR_FAILURE_0: 'API call failed'
    };
  
    /**
     * Description: Stores Generic titles of alert messages
     */
    public static TOASTR_TITLES = {
      success: 'Success',
      error: 'Error',
      warning: 'Warning'
    };
  
    /**
     * Description: Contains the common form error messages
     */
    public static FORM_ERROR_MSGS = {
      invalidFormat: 'Invalid Format',
      invalidEmail: 'Invalid email address',
      mandarotyFields: 'This field is mandatory'
    };
  }
  
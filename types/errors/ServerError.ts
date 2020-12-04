import { CodedError } from "./CodedError";

/**
 * Defines a unhandled error of the Chexxo server API.
 */
export class ServerError extends CodedError {
  readonly name: string = "Server error";
  readonly message: string = "An internal server error occured.";
  readonly trace?: string;

  readonly code = 500;
  readonly publicMessage = "An internal server error occured.";

  /**
   * @param uuid The uuid that identifies this particular error.
   * @param error The error which lead to this exception.
   */
  constructor(error?: Error) {
    super();
    if (error) {
      super.stack = error.stack;
      this.name = error.name;
      this.message = error.message;
      this.trace = error.stack;
    }
  }
}

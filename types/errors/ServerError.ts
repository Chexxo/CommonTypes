import { CodedError } from "./CodedError";

/**
 * Defines a unhandled error of the Chexxo server API.
 */
export class ServerError extends CodedError {
  readonly name: string;
  readonly message: string;
  readonly trace?: string;

  readonly code = 500;
  readonly publicMessage = "An internal server error occured.";

  /**
   * @param error The error which lead to this exception.
   */
  constructor(readonly uuid: string, error: Error) {
    super();
    super.stack = error.stack;
    this.name = error.name;
    this.message = error.message;
    this.trace = error.stack;
  }
}

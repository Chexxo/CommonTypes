import CodedError from "./CodedError";

/**
 * Defines a not handled error of the chexxo server api.
 */
export default class ServerError extends CodedError {
  readonly name: string;
  readonly message: string;
  readonly stack?: string;

  readonly code = 500;
  readonly publicMessage = "An internal server error occured.";

  /**
   * @param error The error which lead to this exception.
   */
  constructor(error: Error) {
    super();
    this.name = error.name;
    this.message = error.message;
    this.stack = error.stack;
  }
}

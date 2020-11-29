import { CodedError } from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export class InvalidUrlError extends CodedError {
  readonly name: string = "Invalid url exception";
  readonly message: string = "The url provided is not valid.";

  readonly code: number = 505;
  readonly publicMessage: string = this.message;

  /**
   * @param trace Can optionally include the stacktrace of the undelying error.
   */
  constructor(message?: string, readonly trace?: string) {
    super();
    if (message) {
      this.message = message;
      this.publicMessage = this.message;
    }
  }
}

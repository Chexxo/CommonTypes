import { CodedError } from "./CodedError";

/**
 * If the host responds with an unsupported http-code this error is thrown.
 */
export class InvalidResponseError extends CodedError {
  readonly name: string = "Invalid response exception";
  readonly message: string =
    "Server responded with unsupported statuscode. Status:" + this.statusCode;

  readonly code: number = 502;
  readonly publicMessage: string = this.message;

  /**
   * @param statusCode The status code the remote host returned.
   * @param trace Can optionally include the stacktrace of the undelying error.
   */
  constructor(
    readonly uuid: string,
    readonly statusCode: number,
    readonly trace?: string
  ) {
    super();
  }
}

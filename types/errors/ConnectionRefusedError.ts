import { CodedError } from "./CodedError";

/**
 * Indicates that the other party refused to open a tls connection.
 */
export class ConnectionRefusedError implements CodedError {
  readonly name: string = "Connection refues Error";
  readonly message: string = "The host refused to open a connection.";

  readonly code: number = 501;
  readonly publicMessage: string = this.message;

  /**
   * @param trace Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly uuid: string, readonly trace?: string) {}
}
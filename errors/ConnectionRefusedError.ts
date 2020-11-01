import CodedError from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export default class ConnectionRefusedError extends CodedError {
  readonly name: string = "Connection refues Error";
  readonly code: number = 400;
  readonly message: string = "The host refused to open a connection.";

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {
    super();
  }
}

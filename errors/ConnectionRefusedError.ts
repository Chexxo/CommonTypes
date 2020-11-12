/**
 * If no host was found for the requested domain this error gets thrown.
 */
export default class ConnectionRefusedError extends Error {
  readonly name: string = "Connection refues Error";
  readonly code: number = 501;
  readonly message: string = "The host refused to open a connection.";
  readonly publicMessage: string = this.message;

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {
    super();
  }
}

/**
 * Error which contains a code. Is parent of all
 * errors thrown by the Chexxo server API.
 */
export default abstract class CodedError extends Error {
  /**
   * The code of the error.
   */
  readonly code: number = 0;

  /**
   * The UUID of the error. If a ServerProvider is used the
   * uuid will be the same.
   */
  readonly uuid: string = "";

  /**
   * The public message of the error which will be
   * exposed by the Chexxo server API.
   */
  readonly publicMessage: string = this.message;
}

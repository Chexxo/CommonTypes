/**
 * Error which contains a code. Is parent of all
 * errors thrown by the chexxo server api.
 */
export default abstract class CodedError extends Error {
  /**
   * The code of the error.
   */
  readonly code: number = 0;
  /**
   * The public message of the error which will be
   * exposed by the chexxo server api.
   */
  readonly publicMessage: string = this.message;
}

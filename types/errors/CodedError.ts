/**
 * Error which contains a code. Is parent of all
 * errors thrown by the Chexxo server API.
 */
export abstract class CodedError extends Error {
  /**
   * The code of the error.
   */
  readonly code: number = 0;

  /**
   * A field in which to save the original errors stack.
   */
  readonly trace?: string;

  /**
   * The public message of the error which will be
   * exposed by the Chexxo server API.
   */
  readonly publicMessage: string = this.message;
}

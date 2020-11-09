import CodedError from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export default class NoHostError extends CodedError {
  readonly name: string = "Host not found exception";
  readonly code: number = 503;
  readonly message: string = "No host could be found with the domain provided.";
  readonly publicMessage: string = this.message;

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {
    super();
  }
}

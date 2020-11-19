import CodedError from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export default class NoHostError extends CodedError {
  readonly name: string = "Host not found exception";
  readonly message: string = "No host could be found with the domain provided.";

  readonly code: number = 503;
  readonly publicMessage: string = this.message;

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly uuid: string, readonly stack?: string) {
    super();
  }
}

import { CodedError } from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export class NoHostError extends CodedError {
  readonly name: string = "Host not found exception";
  readonly message: string = "No host could be found with the domain provided.";

  readonly code: number = 503;
  readonly publicMessage: string = this.message;

  /**
   * @param uuid The uuid that identifies this particular error.
   * @param trace Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly trace?: string) {
    super();
  }
}

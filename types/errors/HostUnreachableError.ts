import { CodedError } from "./CodedError";

/**
 * If no host was found for the requested domain this error gets thrown.
 */
export class HostUnreachableError extends CodedError {
  readonly name: string = "Host unreachable exception";
  readonly message: string = "No route to host.";

  readonly code: number = 504;
  readonly publicMessage: string = this.message;

  /**
   * @param trace Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly trace?: string) {
    super();
  }
}

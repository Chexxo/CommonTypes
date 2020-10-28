/**
 * If no host was found for the requested domain this error gets thrown.
 */
export default class NoHostError implements Error {
  readonly name: string = "Host not found exception";
  readonly code: number = 5;
  readonly message: string = "No host could be found with the domain provided.";

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {}
}

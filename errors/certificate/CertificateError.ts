/**
 * Abstract class which is the base class of all certificate related errors.
 */
export default abstract class CertificateError implements Error {
  readonly name: string = "Certificate Error";
  readonly code: number = 0;
  readonly message: string = "This is an abstract CertificateError.";

  /**
   * @param stack Can optionally include the stacktrace of the undelying error.
   */
  constructor(readonly stack?: string) {}
}

import CertificateError from "./CertificateError";

/**
 * If a certificate has an untrusted link in its chain this error gets thrown.
 */
export default class UntrustedRootError extends CertificateError {
  readonly name: string = "Certificate untrusted root exception";
  readonly code: number = 1;
  readonly message: string =
    "The certificate has an untrusted link in its chain.";
}

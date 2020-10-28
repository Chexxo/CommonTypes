import CertificateError from "./CertificateError";

/**
 * If a certificate is not valid for the requested domain this error gets thrown.
 */
export default class WrongHostError extends CertificateError {
  readonly name: string = "Certificate wrong host exception";
  readonly code: number = 3;
  readonly message: string = "The certificate is not valid for this domain.";
}

/**
 * Encapsulates the PEM-formatted certificate of a website.
 */
export default class RawCertificate {
  constructor(
    /**
     * PEM-formatted representation of the certificate.
     */
    readonly pem: string
  ) {}
}

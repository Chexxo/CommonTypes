/**
 * Encapsulates the pem-formated certificate of a website.
 */
export default class RawCertificate {
  constructor(
    /**
     * Pem-formated representation of the certificate.
     */
    readonly pem: string
  ) {}
}

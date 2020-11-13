/**
 * Represents an error reported by the chexxo
 * server api.
 */
export default class APIResponseError {
  constructor(
    /**
     * The code of the {@link CodedError}
     * which occured.
     */
    readonly code: number,
    /**
     * The description of the error which
     * occured.
     */
    readonly publicMessage: string
  ) {}
}

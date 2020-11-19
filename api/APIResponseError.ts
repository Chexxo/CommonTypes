/**
 * Represents an error reported by the Chexxo
 * server API.
 */
export default class APIResponseError {
  constructor(
    /**
     * The uuid of the {@link CodedError}
     * which occured.
     */
    readonly uuid: string,

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

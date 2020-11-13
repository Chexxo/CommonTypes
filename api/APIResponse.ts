import APIResponseBody from "./APIResponseBody";

/**
 * Represents an APIResponse which is returned
 * from the chexxo server API.
 */
export default class APIResponse {
  constructor(
    /**
     * The HTTP-StatusCode of the response.
     */
    readonly statusCode: number,
    /**
     * The content of the HTTP body respresented
     * as {@link APIResponseBody}.
     */
    readonly body: APIResponseBody
  ) {}
}

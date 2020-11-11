import APIResponseBody from "./APIResponseBody";

export default class APIResponse {
  constructor(readonly statusCode: number, readonly body: APIResponseBody) {}
}

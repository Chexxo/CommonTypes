import APIResponseError from "./APIResponseError";

export default class APIResponseBody {
  constructor(readonly error: APIResponseError, readonly certificate: string) {}
}

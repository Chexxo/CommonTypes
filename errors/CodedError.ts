export default abstract class CodedError extends Error {
  readonly code: number = 0;
  readonly publicMessage: string = this.message;
}

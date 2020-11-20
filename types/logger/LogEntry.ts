import { LogLevel } from "../../logger/Logger";
import { CodedError } from "../errors/CodedError";

export class LogEntry {
  constructor(
    readonly logLevel: LogLevel,
    readonly millisecTimestamp: number,
    readonly message: string,
    readonly error?: CodedError
  ) {}
}

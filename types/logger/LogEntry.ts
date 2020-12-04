import { LogLevel } from "../../logger/Logger";
import { CodedError } from "../errors/CodedError";

/**
 * Represents a log entry. Which was either read
 * from the log or will be written into the log.
 */
export class LogEntry {
  constructor(
    readonly requestUuid: string,
    readonly logLevel: LogLevel,
    readonly millisecTimestamp: number,
    readonly message: string,
    readonly error?: CodedError
  ) {}
}

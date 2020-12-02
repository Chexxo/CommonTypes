import { CodedError } from "../types/errors/CodedError";
import { LogEntry } from "../types/logger/LogEntry";
import { LoggerPersistenceManager } from "./LoggerPersistenceManager";

/**
 * Enum which represents the different log levels.
 */
export enum LogLevel {
  /**
   * Represents an error which is fatal to the
   * current request.
   */
  ERROR,
  /**
   * Respresents something that may happen but could
   * result in unwanted behaviour for the user.
   */
  WARNING,
  /**
   * Useful additional information.
   */
  INFO,
}
/**
 * Class for logging messages.
 */
export class Logger {
  /**
   * @param persistence The {@link LoggerPersistenceManager} which will
   * be used to persist the log messages handled by this logger.
   */
  constructor(protected persistence: LoggerPersistenceManager) {}

  /**
   * Creates and persists a {@link LogEntry}.
   *
   * @param uuid The uuid of the request which lead to this entry.
   * @param logLevel The log level of the entry to be created.
   * @param message The message the entry to be created should contain.
   * @param error The error which triggered this log entry.
   */
  public log(
    uuid: string,
    logLevel: LogLevel,
    message: string,
    error?: CodedError
  ): void {
    const millisecTimestamp = Date.now();
    const logEntry = new LogEntry(
      uuid,
      logLevel,
      millisecTimestamp,
      message,
      error
    );
    this.persistence.save(logEntry);
  }
}

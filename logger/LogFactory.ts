import { CodedError } from "../types/errors/CodedError";
import { LogEntry } from "../types/logger/LogEntry";
import { LogLevel } from "./Logger";

/**
 * Provides static functions regarding log formatting.
 */
export abstract class LogFactory {
  /**
   * Converts the given log level into it's string representation.
   *
   * @param logLevel The log level to be converted.
   * @returns The string representation of given log level.
   */
  public static logLevelToString(logLevel: LogLevel): string {
    switch (logLevel) {
      case LogLevel.ERROR:
        return "err";
      case LogLevel.WARNING:
        return "warn";
      case LogLevel.INFO:
        return "info";
      default:
        return "unknown";
    }
  }

  /**
   * Converts a timestamp into a human readable format.
   *
   * @param timestamp The timestamp to be converted.
   * @returns A stirng representation of the timestamp
   * given e.g. `2020-11-22 18:19:41 +537`.
   */
  public static formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    const millisec = String(date.getMilliseconds()).padStart(3, "0");
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second +
      " +" +
      millisec
    );
  }

  /**
   * Converts a given {@link LogEntry} into a human readable format.
   *
   * @param logEntry The log entry to be converted.
   * @param small If set to true the generated log entry does not
   * contain the prefix including time, loglevel and uuid.
   * @returns A human readable log entry.
   */
  public static formatLogEntry(logEntry: LogEntry, small?: boolean): string {
    let errorString = "";
    if (logEntry.error) {
      errorString = LogFactory.formatError(logEntry.error);
    }

    const prefix = `(${LogFactory.formatTimestamp(
      logEntry.millisecTimestamp
    )})[${logEntry.requestUuid}][${LogFactory.logLevelToString(
      logEntry.logLevel
    )}] `;

    let main = logEntry.message;

    if (errorString !== "") {
      main = main + "\n" + errorString;
    }

    if (small) {
      return main;
    }
    return prefix + main;
  }

  /**
   * Converts a given {@link CodedError} into a human readable format.
   *
   * @param error The error to be converted.
   * @returns A human readable error.
   */
  private static formatError(error: CodedError): string {
    let errorString =
      `    Error: ${error.name}[${error.code}]\n` +
      `        Message: ${error.message}`;

    if (error.trace) {
      errorString +=
        "\n" +
        `        Trace:   ${error.trace.replace(/\n/g, "\n                 ")}`;
    }

    return errorString;
  }
}

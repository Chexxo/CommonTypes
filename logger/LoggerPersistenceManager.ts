import { LogEntry } from "../types/logger/LogEntry";

/**
 * Interface for abstracting different persistence managers.
 * Those will then be used to persist logging data.
 */
export interface LoggerPersistenceManager {
  /**
   * Persists the given {@link LogEntry} according to it's
   * {@link LogLevel}.
   *
   * @param logEntry The log entry to be persisted.
   */
  save(logEntry: LogEntry): void;
}

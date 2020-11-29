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
   * @param uuid The uuid of the request which lead to this entry.
   * @param logEntry The log entry to be persisted.
   */
  save(uuid: string, logEntry: LogEntry): void;
}

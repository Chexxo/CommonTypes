import { LogEntry } from "../types/logger/LogEntry";

export interface LoggerPersistenceManager {
  save(logEntry: LogEntry): void;
}

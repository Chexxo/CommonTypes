import { ConnectionRefusedError } from "../types/errors/ConnectionRefusedError";
import { InvalidResponseError } from "../types/errors/InvalidResponseError";
import { LogEntry } from "../types/logger/LogEntry";
import { Logger, LogLevel } from "./Logger";
import { LoggerPersistenceManager } from "./LoggerPersistenceManager";

const persistent = <LoggerPersistenceManager>{
  save: jest.fn(),
};
const logger = new Logger(persistent);
const fifthOfOctober = 1601856000 * 1000;

const logEntryInfo = new LogEntry(LogLevel.INFO, fifthOfOctober, "Hello Info!");
const logEntryWarning = new LogEntry(
  LogLevel.WARNING,
  fifthOfOctober,
  "Hello Warning!"
);
const logEntryError = new LogEntry(
  LogLevel.ERROR,
  fifthOfOctober,
  "Hello Error!"
);

beforeEach(() => {
  jest.resetAllMocks();
});

test("Calls persistence manager", () => {
  logger.log(LogLevel.INFO, "Hello Info!");
  expect(persistent.save).toHaveBeenCalled();
});

test("Formats timestamp correctly", () => {
  const result = Logger.formatTimestamp(fifthOfOctober);
  expect(result).toBe("2020-10-05 02:00:00 +000");
});

test("Formats info log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryInfo);
  expect(result).toBe("(2020-10-05 02:00:00 +000)[info] Hello Info!\n");
});

test("Formats warning log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryWarning);
  expect(result).toBe("(2020-10-05 02:00:00 +000)[warn] Hello Warning!\n");
});

test("Formats error log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryError);
  expect(result).toBe("(2020-10-05 02:00:00 +000)[err] Hello Error!\n");
});

test("Formats unknown log entry correctly", () => {
  const logEntryUnknown = new LogEntry(28, fifthOfOctober, "Hello Unknown!");
  const result = Logger.formatLogEntry(logEntryUnknown);
  expect(result).toBe("(2020-10-05 02:00:00 +000)[unknown] Hello Unknown!\n");
});

test("Includes uuid correctly", () => {
  const result = Logger.formatLogEntry(logEntryError, "abc123");
  expect(result).toBe("(2020-10-05 02:00:00 +000)[abc123][err] Hello Error!\n");
});

test("Includes error correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new InvalidResponseError("123nbd", 302)
  );
  const result = Logger.formatLogEntry(logEntryErrorIncluded, "abc123");
  expect(result).toMatch(
    /Trace:   Invalid response exception: Server responded with unsupported statuscode. Status:302/
  );
});

test("Handles no stack correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new ConnectionRefusedError("123nbd")
  );
  const result = Logger.formatLogEntry(logEntryErrorIncluded, "abc123");
  expect(result).not.toMatch(/Trace:/);
});

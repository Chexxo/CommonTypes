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
  expect(result).toMatch(/2020-10-05/);
});

test("Formats info log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryInfo);
  expect(result).toMatch(/\)\[info\] Hello Info!/);
});

test("Formats warning log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryWarning);
  expect(result).toMatch(/\)\[warn\] Hello Warning!/);
});

test("Formats error log entry correctly", () => {
  const result = Logger.formatLogEntry(logEntryError);
  expect(result).toMatch(/\)\[err\] Hello Error!/);
});

test("Formats unknown log entry correctly", () => {
  const logEntryUnknown = new LogEntry(28, fifthOfOctober, "Hello Unknown!");
  const result = Logger.formatLogEntry(logEntryUnknown);
  expect(result).toMatch(/\)\[unknown\] Hello Unknown!/);
});

test("Includes uuid correctly", () => {
  const result = Logger.formatLogEntry(logEntryError, "abc123");
  expect(result).toMatch(/\)\[abc123\]\[err\] Hello Error!/);
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

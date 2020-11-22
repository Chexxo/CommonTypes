import { ConnectionRefusedError } from "../types/errors/ConnectionRefusedError";
import { NoHostError } from "../types/errors/NoHostError";
import { LogEntry } from "../types/logger/LogEntry";
import { LogFactory } from "./LogFactory";
import { LogLevel } from "./Logger";

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

test("Formats timestamp correctly", () => {
  const result = LogFactory.formatTimestamp(fifthOfOctober);
  expect(result).toMatch(/2020-10-05/);
});

test("Formats info log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryInfo);
  expect(result).toMatch(/\)\[info\] Hello Info!/);
});

test("Formats warning log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryWarning);
  expect(result).toMatch(/\)\[warn\] Hello Warning!/);
});

test("Formats error log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryError);
  expect(result).toMatch(/\)\[err\] Hello Error!/);
});

test("Formats unknown log entry correctly", () => {
  const logEntryUnknown = new LogEntry(28, fifthOfOctober, "Hello Unknown!");
  const result = LogFactory.formatLogEntry(logEntryUnknown);
  expect(result).toMatch(/\)\[unknown\] Hello Unknown!/);
});

test("Includes uuid correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryError, "abc123");
  expect(result).toMatch(/\)\[abc123\]\[err\] Hello Error!/);
});

test("Includes error correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new NoHostError("123nbd", "No host could be found.")
  );
  const result = LogFactory.formatLogEntry(logEntryErrorIncluded, "abc123");
  expect(result).toMatch(/Trace:   No host could be found./);
});

test("Handles no stack correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new ConnectionRefusedError("123nbd")
  );
  const result = LogFactory.formatLogEntry(logEntryErrorIncluded, "abc123");
  expect(result).not.toMatch(/Trace:/);
});

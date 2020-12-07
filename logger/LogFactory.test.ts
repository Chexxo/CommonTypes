import { ConnectionRefusedError } from "../types/errors/ConnectionRefusedError";
import { NoHostError } from "../types/errors/NoHostError";
import { LogEntry } from "../types/logger/LogEntry";
import { LogFactory } from "./LogFactory";
import { LogLevel } from "./Logger";

const fifthOfOctober = 1601856000 * 1000;
let requestUuid = "abc123";

const logEntryInfo = new LogEntry(
  requestUuid,
  LogLevel.INFO,
  fifthOfOctober,
  "Hello Info!"
);
const logEntryWarning = new LogEntry(
  requestUuid,
  LogLevel.WARNING,
  fifthOfOctober,
  "Hello Warning!"
);
const logEntryError = new LogEntry(
  requestUuid,
  LogLevel.ERROR,
  fifthOfOctober,
  "Hello Error!"
);

beforeEach(() => {
  jest.resetAllMocks();
  requestUuid = "abc123";
});

test("Formats timestamp correctly", () => {
  const result = LogFactory.formatTimestamp(fifthOfOctober);
  expect(result).toMatch(/2020-10-05/);
});

test("Formats info log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryInfo);
  expect(result).toMatch(/\]\[info\] Hello Info!/);
});

test("Formats warning log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryWarning);
  expect(result).toMatch(/\]\[warn\] Hello Warning!/);
});

test("Formats error log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryError);
  expect(result).toMatch(/\]\[err\] Hello Error!/);
});

test("Formats unknown log entry correctly", () => {
  const logEntryUnknown = new LogEntry(
    requestUuid,
    28,
    fifthOfOctober,
    "Hello Unknown!"
  );
  const result = LogFactory.formatLogEntry(logEntryUnknown);
  expect(result).toMatch(/\]\[unknown\] Hello Unknown!/);
});

test("Formats small log entry correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryError, true);
  expect(result).toBe("Hello Error!");
});

test("Includes uuid correctly", () => {
  const result = LogFactory.formatLogEntry(logEntryError);
  expect(result).toMatch(/\)\[abc123\]\[err\] Hello Error!/);
});

test("Includes error correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    requestUuid,
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new NoHostError("No host could be found.")
  );
  const result = LogFactory.formatLogEntry(logEntryErrorIncluded);
  expect(result).toMatch(/Trace:   No host could be found./);
});

test("Handles no stack correctly", () => {
  const logEntryErrorIncluded = new LogEntry(
    requestUuid,
    LogLevel.ERROR,
    fifthOfOctober,
    "Hello Error!",
    new ConnectionRefusedError()
  );
  const result = LogFactory.formatLogEntry(logEntryErrorIncluded);
  expect(result).not.toMatch(/Trace:/);
});

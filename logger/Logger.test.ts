import { UUIDFactory } from "../../helpers/UUIDFactory";
import { Logger, LogLevel } from "./Logger";
import { LoggerPersistenceManager } from "./LoggerPersistenceManager";

const persistent = <LoggerPersistenceManager>{
  save: jest.fn(),
};
const logger = new Logger(persistent);

beforeEach(() => {
  jest.resetAllMocks();
});

test("Calls persistence manager", () => {
  logger.log(UUIDFactory.uuidv4(), LogLevel.INFO, "Hello Info!");
  expect(persistent.save).toHaveBeenCalled();
});

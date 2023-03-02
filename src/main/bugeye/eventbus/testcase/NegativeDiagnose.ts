import SensorNeuron from "../SensorNeuron";
import NegativeDiagnoseException from "./NegativeDiagnoseException";
import TestCase from "./TestCase";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

//@Immutable
export default class NegativeDiagnose implements SensorNeuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord.name, new LogRecord(this.constructor.name, this.testCase.toString()));
        throw new NegativeDiagnoseException(this.testCase.toString());
    }
}

import {Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

export default abstract class TestCaseTransition implements Neuron {

    private readonly method: Method;

    constructor(method: Method) {
        this.method = Strict.notNull(method);
    }

    public activate(testClassInstance: RecognitionPayload) {
        Strict.notNull(testClassInstance);
        this.method.call(testClassInstance.value());
    }
}

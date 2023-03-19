import Neuron from "../Neuron";
import Immutable from "../../../Immutable";
import Strict from "../../ethics/Strict";

@Immutable
export default class LogRecord implements Neuron {

    private readonly date: Date;
    private readonly record: string[];

    constructor(...args: string[]) {
        this.date = new Date();
        this.record = Strict.notNull(args);
    }

    public activate(): void {
        console.log(this.date, this.record);
    }
}

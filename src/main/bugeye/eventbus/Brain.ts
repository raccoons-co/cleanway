import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "./Neuron";
import RecognitionPayload from "./RecognitionPayload";

@Immutable
export default class Brain {

    private static singleInstance: Brain;
    private readonly neurons: Map<object, Array<Neuron>>;

    private constructor() {
        this.neurons = new Map<object, Array<Neuron>>();
    }

    public static instance(): Brain {
        if (!Brain.singleInstance) {
            Brain.singleInstance = new Brain();
        }
        return Brain.singleInstance;
    }

    /** Stores neuron in memory associated with the signal. */
    public learn(signal: object, neuron: Neuron): this {
        Strict.notNull(signal);
        Strict.notNull(neuron);
        this.cerebrumMemory(signal).push(neuron);
        return this;
    }

    /** Activates all neurons in memory associated with the signal with optional payload. */
    public recognize(signal: object, payload?: RecognitionPayload): this {
        Strict.notNull(signal);
        if (this.neurons.has(signal)) {
            this.cerebrumMemory(signal).forEach(neuron => neuron.activate(payload));
        }
        return this;
    }

    /** Removes memory associated with the signal. */
    public forget(signal: object): this {
        Strict.notNull(signal);
        this.neurons.delete(signal);
        return this;
    }

    /** Returns count of neurons in memory associated with the signal.*/
    public memorySize(signal: object): number {
        Strict.notNull(signal);
        return Brain.instance().cerebrumMemory(signal).length;
    }

    /** Returns the chain of neurons (memory) associated with the signal.*/
    private cerebrumMemory(signal: object): Array<Neuron> {
        const memory = this.neurons.get(signal);
        if (memory) {
            return memory;
        } else {
            const newMemory = new Array<Neuron>();
            this.neurons.set(signal, newMemory);
            return newMemory;
        }
    }
}

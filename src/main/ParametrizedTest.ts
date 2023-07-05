import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedArgumentsSource from "./bugeye/eventbus/neuron/AssignedArgumentsSource";

/**
 * `@ParametrizedTest` is used to annotate a method as parameterized test method.
 *
 * Such methods must not be private or static and must not return a value.
 * `@ParameterizedTest` methods must specify at least one `@ArgumentsSource`.
 *
 * @public
 */
@Immutable
class ParametrizedTest implements Annotation {

    public decorator(): Method {
        return this.handleParametrizedTest;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private handleParametrizedTest(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .recognize(AssignedArgumentsSource)
            .forget(AssignedArgumentsSource);
    }
}

export default new ParametrizedTest().decorator();

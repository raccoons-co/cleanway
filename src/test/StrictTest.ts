import {
    Immutable,
    Log,
    Test,
    Strict,
    NullPointerException
} from "../main/index";
import {assert} from "chai";

@Immutable
export default class StrictTest {

    @Log
    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Strict.notNull(null, "Strict for null"),
            NullPointerException,
            "Strict for null"
        );
    }

    @Log
    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Strict.notNull(undefined, "Strict for undefined"),
            NullPointerException,
            "Strict for undefined"
        );
    }

    @Log
    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Strict.notNull(reference), reference);
    }

    @Log
    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Strict.notNull(new Object()), new Object());
    }
}
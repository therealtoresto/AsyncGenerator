'use strict';

async function* genFn() {
    yield 10;
    yield 20;
    yield 30;
}

(async () => {
    try {
        const g = genFn();
        const val1 = await g.next();
        const val2 = await g.next();
        const val3 = await g.next();
        const val4 = await g.throw('Error message');
        console.log(val1, val2, val3, val4);
    } catch (err) {
    console.error(err);
    }
})();

(async () => {
    try {
        const g = genFn();
        const val1 = await g.next();
        const val2 = await g.throw('Error message 1');
        const val3 = await g.next();
        const val4 = await g.throw('Error message 2');
        console.log(val1, val2, val3, val4);
    } catch (err) {
    console.error(err);
    }
})();
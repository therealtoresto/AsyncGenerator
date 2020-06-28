'use strict';

async function* genFn() {
    yield 10;
    yield 20;
    yield 30;
}

(async () => {
    const g = genFn();
    const val1 = await g.next();
    const val2 = await g.next();
    const val3 = await g.next();
    const val4 = await g.return(40);
    console.log({ val1, val2, val3, val4 });
})();

(async () => {
    const g = genFn();
    const val1 = await g.next();
    const val2 = await g.return(40);
    const val3 = await g.next();
    const val4 = await g.return(50);
    console.log({ val1, val2, val3, val4 });
})();
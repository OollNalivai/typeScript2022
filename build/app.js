"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 2, 4]);
getSplitedHalf(['2', '3', '4']);
const split = getSplitedHalf;
const logLin = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};

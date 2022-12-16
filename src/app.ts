function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<number>(10);


function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l)
}

getSplitedHalf([1, 2, 4])
getSplitedHalf<string>(['2', '3', '4'])


const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface LogLineInterface<T> {
    timeStamp: Date,
    data: T
}

type LogLineType<T> = {
    timeStamp: Date,
    data: T
}

const logLin: LogLineInterface<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

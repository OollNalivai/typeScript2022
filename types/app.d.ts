declare abstract class Logger {
    abstract log(message: string): void;
    printDate(date: Date): void;
}
declare class MyLogger extends Logger {
    log(message: string): void;
    logWithDate(message: string): void;
}
declare const logger: MyLogger;

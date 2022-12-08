"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(message) {
        console.log('printDate message: ', message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new MyLogger();
logger.logWithDate('time > on time');

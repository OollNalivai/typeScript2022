interface LoggerInterface {
    log(...args: string[]): void;

    test(...args: string[]): void;

    error(...args: string[]): void;
}

class Logger implements LoggerInterface {
    error(...args: string[]): void {
        console.log(...args);
    }

    async test(...args: string[]): Promise<void> {
        ///
    }

    log(...args: string[]): void {
        //отправить запрос во внешнюю систему
        console.log();
    }
}

interface Payable {
    pay(paymentId: number): void;

    price?: number;
}

interface Deletable {
    delete(): void;
}

class User implements Payable, Deletable {
    delete(): void {
    }

    pay(paymentId: number): void {
        ///
    }

}

interface ProviderInterface {
    sendMessage(message: string): void;

    connect<T>(config: T): void;

    disconnect(): void;
}

class TelegramProvider implements ProviderInterface {

    sendMessage(message: string): void {
        console.log(message);
    }

    connect<T>(config: T): void {
        console.log(config);
    }

    disconnect(): void {
        console.log("Disconnected");
    }
}

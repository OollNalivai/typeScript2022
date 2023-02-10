interface ProviderInterface {
    sendMessage(message: string): void;

    connect(config: unknown): void;

    disconnect(): void;
}

class TelegramProvider implements ProviderInterface {

    sendMessage(message: string): void {
        console.log(message);
    }

    connect(config: string): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('Disconnected TG');
    }
}

class WhatsUpProvider implements ProviderInterface {

    sendMessage(message: string): void {
        console.log(message);
    }

    connect(config: string): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('Disconnected WU');
    }
}

class NotifacationSender {

    constructor(private provider: ProviderInterface) {
    }

    send() {
        this.provider.connect('Connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotifacationSender extends NotifacationSender {

    constructor(provider: ProviderInterface) {
        super(provider);
    }

    sendDalayed() {

    }
}

const sender = new NotifacationSender(new TelegramProvider());
sender.send();

const sender2 = new NotifacationSender((new WhatsUpProvider()));
sender2.send();

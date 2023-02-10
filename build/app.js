"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected TG');
    }
}
class WhatsUpProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected WU');
    }
}
class NotifacationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('Connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayNotifacationSender extends NotifacationSender {
    constructor(provider) {
        super(provider);
    }
    sendDalayed() {
    }
}
const sender = new NotifacationSender(new TelegramProvider());
sender.send();
const sender2 = new NotifacationSender((new WhatsUpProvider()));
sender2.send();

interface Mediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Notifications {
    sand() {
        console.log('Отправляю уведомление');
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class EventHandler extends Mediated{
    myEvent() {
        this.mediator.notify('', '')
    }
}

"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Отправляю уведомление');
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    constructor(notifications, logger, eventHandler) {
        this.notifications = notifications;
        this.logger = logger;
        this.eventHandler = eventHandler;
    }
    notify(_, event) {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Едрыть, отправлено!');
                break;
        }
    }
}
const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();
const m = new NotificationMediator(notifications, logger, handler);
handler.setMediator(m);
handler.myEvent();

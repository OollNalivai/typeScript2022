"use strict";
class Notify {
    send(template, to) {
        console.log(`Отправляю ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.template = [
            { name: 'other', template: '<h1>Hello World!</h1>' }
        ];
    }
    getByName(name) {
        return this.template.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Не найден шаблон');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('Шаблон отправлен');
    }
}
const s = new NotificationFacade();
s.send('a@d.sa', 'other');

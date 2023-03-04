"use strict";
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class Commad {
    constructor(histoty) {
        this.histoty = histoty;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Commad {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.histoty.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.histoty.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохраняю пользователя с id ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаляем пользователя с id ${userId}`);
    }
}
class Contriller {
    run() {
    }
}

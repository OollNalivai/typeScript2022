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

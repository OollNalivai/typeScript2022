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
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.histoty);
        addUserCommand.undo();
        console.log(addUserCommand.histoty);
    }
}
const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();

class User {
    constructor(public userId: number) {
    }
}

class CommandHistory {
    commands: Commad[] = [];

    push(command: Commad) {
        this.commands.push(command);
    }

    remove(command: Commad) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}

abstract class Commad {
    public commandId: number;

    abstract execute(): void

    constructor(public histoty: CommandHistory) {
        this.commandId = Math.random();
    }
}

class AddUserCommand extends Commad {

    constructor(private user: User, private receiver: UserService, history: CommandHistory) {
        super(history);
    }

    execute(): void {
        this.receiver.saveUser(this.user);
        this.histoty.push(this);
    }

    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.histoty.remove(this);
    }
}

class UserService {
    saveUser(user: User) {
        console.log(`Сохраняю пользователя с id ${user.userId}`);
    }

    deleteUser(userId: number) {
        console.log(`Удаляем пользователя с id ${userId}`);
    }
}

class Contriller {
    run() {

    }
}

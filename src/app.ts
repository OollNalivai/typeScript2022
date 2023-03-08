class Task {
    constructor(public priority: number) {
    }
}

class TaskList {
    private tasks: Task[];

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

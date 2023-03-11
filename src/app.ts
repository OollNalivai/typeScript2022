class Task {
    constructor(public priority: number) {
    }
}

class TaskList {
    private tasks: Task[];

    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            // if (a.priority > b.priority) {
            //     return 1;
            // } else {
            //     return -1
            // }
            return a.priority !== b.priority ? (a.priority > b.priority ? 1 : -1) : 0;
        });
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

    count() {
        return this.tasks.length;
    }
}

interface IteratorInterface<T> {
    current(): T | undefined;

    next(): T | undefined;

    prev(): T | undefined;

    index(): number;
}

class PriorityTaskIterator implements IteratorInterface<Task> {

    private position: number = 0;
    private taskList: TaskList;

    constructor(taskList: TaskList) {
        this.taskList = taskList;
    }

    current(): Task | undefined {
        return this.taskList.getTasks()[this.position];
    }

    next(): Task | undefined {
        this.position += 1;
        return this.taskList.getTasks()[this.position];
    }

    prev(): Task | undefined {
        this.position -= 1;
        return this.taskList.getTasks()[this.position];
    }

    index(): number {
        return this.position;
    }

}

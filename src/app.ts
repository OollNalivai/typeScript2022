class Task {
    constructor(public priority: number) {
    }
}

class TaskList {
    private tasks: Task[];

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

    index: number;
}

class PriorityTaskIterator implements IteratorInterface<Task> {
    index: number;

    current(): Task | undefined {
        return undefined;
    }

    next(): Task | undefined {
        return undefined;
    }

    prev(): Task | undefined {
        return undefined;
    }

}

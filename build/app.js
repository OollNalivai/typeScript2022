"use strict";
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
}
class PriorityTaskIterator {
    current() {
        return undefined;
    }
    next() {
        return undefined;
    }
    prev() {
        return undefined;
    }
}

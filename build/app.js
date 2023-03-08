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
}

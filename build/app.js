"use strict";
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            return a.priority !== b.priority ? (a.priority > b.priority ? 1 : -1) : 0;
        });
    }
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
    constructor(taskList) {
        this.position = 0;
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTasks()[this.position];
    }
    next() {
        this.position += 1;
        return this.taskList.getTasks()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.taskList.getTasks()[this.position];
    }
    index() {
        return this.position;
    }
}

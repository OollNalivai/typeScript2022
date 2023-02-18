"use strict";
class KVDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    savePersistent(_) {
    }
}
class PersistentDBAdapter {
}
function run(base) {
    base.save('key', 'myValue');
}

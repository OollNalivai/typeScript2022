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
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDBAdapter extends KVDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistent({ key, value });
    }
}
function runR(base) {
    base.save('key', 'myValue');
}
runR(new PersistentDBAdapter(new PersistentDB));

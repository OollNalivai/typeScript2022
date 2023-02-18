class KVDatabase {
    private db: Map<string, string> = new Map();
    save(key: string, value: string) {
        this.db.set(key, value)
    }
}

class PersistentDB {
    savePersistent(_: Object) {
        //
    }
}

class PersistentDBAdapter {

}

function run(base: KVDatabase) {
    base.save('key', 'myValue')
}

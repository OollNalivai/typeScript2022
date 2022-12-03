class UserService {
    // static  name: string = '123123';
    private static db: any;

    static getUser(id: number) {
        return this.db.finedById(id);
    }

    constructor(id: number) {
    }

    create() {
        UserService.db = {};
    }

    static {
        UserService.db = '123';
    }
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();

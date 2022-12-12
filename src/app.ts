class User {
    role?: 'admin' | 'user' | undefined;
    static role: 'admin' | 'user' | undefined;

    constructor(private name: string) {
    }
}

function createUser(name: User) {
    //logic
    const defaultUser = new User('asdassda');
    defaultUser.role = undefined;

  switch (User.role) {
      case 'admin':
          return;
      case 'user':
          return true;
  }
}

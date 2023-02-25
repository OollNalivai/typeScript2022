"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthidMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('AuthidMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: 'Вы не авторизированы' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'Нет body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log('Controller');
        return { success: request };
    }
}

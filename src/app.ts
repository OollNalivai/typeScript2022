interface MiddlewareInterface {
    next(mid: MiddlewareInterface): MiddlewareInterface;

    handle(request: any): any;
}

abstract class AbstractMiddleware implements MiddlewareInterface {

    private nextMiddleware: MiddlewareInterface;

    next(mid: MiddlewareInterface): MiddlewareInterface {
        this.nextMiddleware = mid;
        return mid;
    }

    handle(request: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}

class AuthidMiddleware extends AbstractMiddleware {
    override handle(request: any) {
        console.log('AuthidMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return {error: 'Вы не авторизированы'};
    }
}

class ValidateMiddleware extends AbstractMiddleware {
    override handle(request: any) {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return {error: 'Нет body'};
    }
}

class Controller extends AbstractMiddleware {
    override handle(request: any) {
        console.log('Controller');
        return {success: request};
    }
}

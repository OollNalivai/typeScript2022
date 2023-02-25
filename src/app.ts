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

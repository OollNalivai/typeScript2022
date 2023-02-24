interface MiddlewareInterface {
    next(mid: MiddlewareInterface): MiddlewareInterface;

    handle(request: any): any;
}

// abstract class AbstractMiddleware implements MiddlewareInterface {
//
//     next(mid: MiddlewareInterface): MiddlewareInterface {
//         return undefined;
//     }
//
//     handle(request: any): any {
//     }
// }

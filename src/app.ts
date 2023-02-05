import run, { a, type MyType2 } from './module/app2';
import running from './module/app2';
import * as all from './module/app2';
import { Test as MyTest } from './module/app2';
import type { MyType } from './module/app2';


running();
run();
new MyTest;
console.log(a);
console.log(all.Test);

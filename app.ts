function fetchWidthAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    console.log(method)
    return -1;
}

const a = 'sasd';
let b: 'dsfsdkasd' = 'dsfsdkasd';

fetchWidthAuth('s', 'post');

const method = 'post';
fetchWidthAuth('s', method);

let method2: 'post' = 'post';
fetchWidthAuth('s', method2);

let method3 = 'get';
fetchWidthAuth('s', method3 as 'get');



const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
    data2: T extends 'success' ? string : number;

    // additionalData: string | number;
}



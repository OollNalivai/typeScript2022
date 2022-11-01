interface Payment {
    sum: number,
    from: number,
    to: number
}

interface PaymentRequest extends Payment {
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface DataSuccess extends Payment {
    databaseId: number;
}

interface DataFailed {
    errorMessage: string,
    errorCode: number
}

interface ResponseSuccess {
    status: PaymentStatus.Success,
    data: DataSuccess
}

interface ResponseFailed {
    status: PaymentStatus.Failed,
    data: DataFailed
}

// function get(data: PaymentRequest): ResponseSuccess | ResponseFailed {
//
// }



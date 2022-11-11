interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function paymentStatusGuard(
    res: IResponseSuccess | IResponseFailed):
    res is IResponseSuccess {
    return 'databaseId' in res.data;
}

type Res = IResponseSuccess | IResponseFailed

function getIdFromData(res: Res): number {
    if(paymentStatusGuard(res)) {
        console.log(res)
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}

getIdFromData({
    status: PaymentStatus.Failed,
    data: {
        errorMessage: '11111',
        errorCode: 4008,
    }
})



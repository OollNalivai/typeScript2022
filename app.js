"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function paymentStatusGuard(res) {
    return 'databaseId' in res.data;
}
function getIdFromData(res) {
    if (paymentStatusGuard(res)) {
        console.log(res);
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
getIdFromData({
    status: PaymentStatus.Failed,
    data: {
        errorMessage: '11111',
        errorCode: 4008,
    }
});

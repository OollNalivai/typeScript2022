"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function paymentStatusGuard(res) {
    return res.status === PaymentStatus.Success;
}
function getIdFromData(res) {
    if (paymentStatusGuard(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}

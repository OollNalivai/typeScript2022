"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILD"] = 3] = "FAILD";
})(StatusCode || (StatusCode = {}));
var StatusCodeStr;
(function (StatusCodeStr) {
    StatusCodeStr["SUCCESS"] = "a";
    StatusCodeStr["IN_PROCESS"] = "c";
    StatusCodeStr["FAILD"] = "f";
})(StatusCodeStr || (StatusCodeStr = {}));
var StatusCodeGeter;
(function (StatusCodeGeter) {
    StatusCodeGeter[StatusCodeGeter["SUCCESS"] = 1] = "SUCCESS";
    StatusCodeGeter["IN_PROCESS"] = "h";
    StatusCodeGeter["FAILD"] = "f";
})(StatusCodeGeter || (StatusCodeGeter = {}));
const res = {
    message: 'Платеж успешен',
    status: StatusCode.SUCCESS
};
function action(status) {
    console.log('res = ' + status);
}
const res2 = 1 /* Roles.ADMIN */;
action(StatusCodeGeter.FAILD);
console.log(res.status === StatusCode.SUCCESS);

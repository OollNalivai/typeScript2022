"use strict";
var options;
(function (options) {
    options["yes"] = "yes";
    options["no"] = "no";
})(options || (options = {}));
const b = 2323;
const fun = (opt) => console.log(opt + opt);
fun(options.yes);

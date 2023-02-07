"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const really_relaxed_json_1 = require("really-relaxed-json");
const js = (0, really_relaxed_json_1.toJs)('["one", "two", "three", {"foo": "bar"}]');
console.log(js);

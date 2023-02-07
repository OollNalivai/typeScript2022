import { toJson, toRJson } from 'really-relaxed-json';

// const rjson = '[ one two three {foo:bar} ]';
// const json = toJson(rjson);

const json = '["one", "two", "three", {"foo": "bar"}]'
const rjson = toRJson(json)
console.log(rjson);

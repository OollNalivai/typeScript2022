import { toJson, toRJson, toJs } from 'really-relaxed-json';

// const rjson = '[ one two three {foo:bar} ]';
// const json = toJson(rjson);

// const json = '["one", "two", "three", {"foo": "bar"}]'
// const rjson = toRJson(json)

const js = toJs('["one", "two", "three", {"foo": "bar"}]')
console.log(js);

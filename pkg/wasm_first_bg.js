import * as wasm from './wasm_first_bg.wasm';

/**
* @param {number} n1
* @param {number} n2
* @returns {number}
*/
export function add(n1, n2) {
    var ret = wasm.add(n1, n2);
    return ret;
}

/**
* @param {number} num
* @returns {number}
*/
export function fib(num) {
    var ret = wasm.fib(num);
    return ret;
}


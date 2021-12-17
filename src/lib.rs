use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2
}

#[wasm_bindgen]
pub fn fib(num: i32) -> i32 {
    if num <= 1 {
        return 1
    }

    fib(num - 1) + fib(num - 2)
}

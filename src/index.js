import * as wasm from "../pkg";
import fib from "./fib";

console.log("Quick test that wasm functions are working:");
let wasmAdd = wasm.add(2, 8);
console.log(`wasm.add result: ${wasmAdd}`);
console.log("\n=============================\n");
let fibPosition = 45;
console.log(
  "Waiting for JS fibonacci to finish... (this will take a few seconds)\n\n"
);

console.time("Time JS fibonacci took");
let jsResult = fib(fibPosition);
console.log(
  `JS result for fibonacci computation at position ${fibPosition}: ${jsResult}`
);
console.timeEnd("Time JS fibonacci took");

console.log("\n=============================\n");
console.log(
  "Waiting for Rust fibonacci to finish... (this will take a few seconds, but should be quicker than JS just took)\n\n"
);

console.time("Time Rust fibonacci took");
let rustResult = wasm.fib(fibPosition);
console.log(
  `Rust result for fibonacci computation at position ${fibPosition}: ${rustResult}`
);
console.timeEnd("Time Rust fibonacci took");
console.log("\n=============================\n");

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3e5e181-159a-4c5b-a9ea-0a5026ddb42c/deploy-status)](https://app.netlify.com/sites/elegant-mestorf-426815/deploys)

# WASM with Rust and Webpack

This project is just for playing around with WASM, for the first time for me. I wanted to see how easy or difficult it was to set up, how practical it could be in a single repo, and if it improved on the speed of JS.

To test the speed, I defaulted to recursive fibonacci as it's the easiest way I know to make the program struggle.

**Important Note:** I've included the `pkg` folder in this repo which you normally shouldn't do as it's what is built by Rust.
This is because it was taking forever to build on the server, and what I'm compiling is very small. I also must have set something up wrong on Netlify because it still couldn't find the `pkg` folder when Webpack build was running.

## build WASM code

In order to build as a javascript package, you need a separate builder which you can install and run like so:

```bash
cargo install wasm-pack
wasm-pack build
```

You may also be able to build without `wasm-pack` by running something like:

```bash
cargo build --target wasm32-unknown-unknown --release
```

However, this won't give you typescript definitions, or a package.json and such which all makes it ready to import as a package.

## install JS and run Webpack

```
npm i
npm start
```

## What is doing what?

In this repo JS and Rust live side by side as I haven't formed an opinion on how it should be structured.
The `src` directory contains all the JS and Rust source code.
`src/index.js` is the JS entrypoint (for Webpack), and `src/lib.rs` is the entrypoint for Rust.
Two functions are creating in the Rust library, in the standard way, with declarations above them for exporting to a WASM module. Running `cargo build` won't create the target you want, that will just make a normal binary still. The `wasm-pack build` command above is required to make a WASM target ready for JS. So the `target` folder that is generated on build is basically useless for this project.

The output folder is `dist`, as default with Webpack. As of right now the `experiments.asyncWebAssembly` flag must be set to true in the Webpack config, which it will tell you if you run without it.

I am not sure what the following line in `Cargo.toml` is doing, I just saw someone else use it.

```toml
[lib]
crate-type = ["cdylib"]
```

This, however is the only dependency that is required in Rust:

```toml
[dependencies]
wasm-bindgen = "0.2.78"
```

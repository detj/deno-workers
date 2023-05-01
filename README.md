# thread safe deno workers

A basic implmementation of thread safe Deno workers using [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) & [SharedArrayBuffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

## Run

After cloning, run

```sh
deno run --allow-read mod.ts
```

## See also

[thread-safe-workers](https://github.com/detj/thread-safe-workers)

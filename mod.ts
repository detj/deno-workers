const workers: Worker[] = [];
let doneCount = 0;
const count = 12;
const sharedArrayBuffer = new SharedArrayBuffer(1);
const mutexStore = new SharedArrayBuffer(4);
const typedArray = new Uint8Array(sharedArrayBuffer);
typedArray[0] = 10;

function log(...args: unknown[]) {
  console.log(`main:`, ...args);
}

for (let i = 0; i < count; ++i) {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });

  worker.addEventListener("message", () => {
    doneCount = doneCount + 1;
    if (doneCount === count) {
      queueMicrotask(() => terminate());
    }
  });

  workers.push(worker);
  worker.postMessage({ sharedArrayBuffer, mutexStore });
}

function terminate() {
  workers.forEach((worker) => worker.terminate());
  log(`final value`, typedArray[0]);
}

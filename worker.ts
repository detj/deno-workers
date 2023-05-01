/// <reference no-default-lib="true" />
/// <reference lib="deno.worker" />

import { Mutex } from "./mutex.ts";

self.addEventListener("message", (event: MessageEvent) => {
  const { sharedArrayBuffer, mutexStore } = event.data;
  const ta = new Uint8Array(sharedArrayBuffer);
  const mutex = new Mutex(mutexStore);

  mutex.lock();
  ta[0] = ta[0] + 10;
  mutex.unlock();
  postMessage("done");
});

import { EventEmitter } from "events";

const myEmiter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds`);
}

myEmiter.on("timeout", timeoutListenerFn);

setTimeout(() => myEmiter.emit("timeout", 1), 1000);
setTimeout(() => myEmiter.emit("timeout", 2), 2000);

myEmiter.once('singleEvents', () => {
  console.log('Single event occurred');
})

setTimeout(() => myEmiter.emit("singleEvents"), 500);
setTimeout(() => myEmiter.emit("singleEvents"), 1500);

setTimeout(() => myEmiter.off('timeout', timeoutListenerFn), 3000);

setTimeout(() => myEmiter.emit("timeout", 4), 4000);

import { EventEmitter } from "events";

const myEmiter = new EventEmitter();

myEmiter.on('myEvent', () => {
  console.log('First event listener');
})

myEmiter.on('myEvent', () => {
  console.log('Second event listener');
})

myEmiter.on('otherEvent', () => {
  console.log('Other event listener');
})

setTimeout(() => myEmiter.emit('myEvent'), 1000)
let isRunning = true;
const fs = require('fs');

setTimeout(() => (isRunning = false), 20);

function setImmediatePromise() {
  return new Promise ((resolve, reject) => {
    setImmediate(() => resolve())
  })
}

async function whileLoop() {
  while (isRunning) {
    console.log("While loop is running...");
    await setImmediatePromise()
  }
  
}

whileLoop().then(() => console.log("While loop ended"))
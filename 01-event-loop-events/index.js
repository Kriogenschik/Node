const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log("Program Start");

setTimeout(() => info("Timeout 1"), 0);

setTimeout(() => {
  process.nextTick(() => info("Next tick 2"));
  info("Timeout 2"), 100;
});

fs.writeFile("./test.txt", "Hello Node.js", () =>
  info("File written")
);

Promise.resolve().then(() => info("Promice 1"));

process.nextTick(() => info("Next tick 1"));

setImmediate(() => info("Immediate 1"));

let intervalCount = 0
const intervalId = setInterval(() => {
  info(`Interval ${intervalCount += 1}`)
  if (intervalCount === 2) clearInterval(intervalId)
}, 50)

dns.lookup("google.com", (err, adress, family) => {
  info("DNS 1 google.com", adress,);
})

console.log("Program End");

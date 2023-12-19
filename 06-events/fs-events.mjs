import EventEmitter from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

const filePath = "./first.txt";

fileEmitter.on("writeComplete", () => {
  console.log(console.log("File first.txt was written"));
  fs.appendFile(filePath, "\nOne more line", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("appendComplete", () => {
  console.log(console.log("Appended text to the first.txt"));
  fs.rename(filePath, "./renamed-first.txt", () => {
    fileEmitter.emit("renameComplete");
  });
});

fileEmitter.on("renameComplete", () => {
  console.log(console.log("File was renamed"));
});

fs.writeFile(filePath, "First file text", () => {
  fileEmitter.emit("writeComplete");
});

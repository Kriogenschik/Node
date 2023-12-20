import stream from "stream";
import fs from "fs";

const filePath = "./files/stdin-dump.txt";

// const writeStream = fs.createWriteStream(filePath);

// process.stdin.pipe(writeStream);

const upperCaseStream = new stream.Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

const reversStream = new stream.Transform({
  transform(chunk, encoding, cb) {
    const reversed = chunk.toString().split("").reverse().join("");
    cb(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reversStream).pipe(process.stdout);

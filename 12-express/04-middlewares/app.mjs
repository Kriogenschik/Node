import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//     let data = "";
//     req.on("data", (chunk) => (data += chunk.toString()));
//     req.on("end", () => {
//       const parsedFormData = qs.parse(data);
//       req.body = parsedFormData;
//       next();
//     });
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   let data = "";
//   req.on("data", (chunk) => (data += chunk));
//   req.on("end", () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });

app.use((req, res) => {
  console.log(req.body);
  res.send("This is express server");
});

app.listen(5000, () => console.log("server is listening at port 5000"));

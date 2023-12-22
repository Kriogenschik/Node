import express from "express";
import morgan from "morgan";
import cors from 'cors';

const app = express();


//logs info about request
app.use(morgan("tiny"));
//converts JSON to JS Object in POST, PUY, PATCH request
app.use(express.json());
//converts form data to JS Object in POST, PUY, PATCH request
app.use(express.urlencoded({ extended: true }));
//enable all CORS requests
app.use(cors())

app.use((req, res) => {
  const personData = {
    name: "Oleg",
    isDev: true
  }
  console.log(req.body);
  res.json(personData);
});

app.listen(5000, () => console.log("server is listening at port 5000"));

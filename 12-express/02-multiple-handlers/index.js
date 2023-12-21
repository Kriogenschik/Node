const express = require('express');

const app = express();

const firstHandler = (req, res) => res.send('Response from server');
const secondHandler = (req, res) => console.log('Second Handler');

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => console.log("server was started on port 5000"))

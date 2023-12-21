const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Response from server'))

app.listen(5000, () => console.log("server was started on port 5000"))

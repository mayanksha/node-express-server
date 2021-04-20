const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const port = 9000

app.use(cors());
app.use(bodyParser());
app.post('/test', (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, 400);
});

app.get('/test-get-body', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

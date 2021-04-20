import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 9000;
app.use(cors());
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  res.send(req.body);
});

app.get('/test-get-body', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('CORS proxy server is up and running!');
});

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => res.status(500).send(error.message));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CORS proxy server is listening on port ${port}`);
});

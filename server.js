var express = require('express');
var router = require('./router');
const path = require('path');


// Initialize http server
const app = express();

// Logger that outputs all requests into the console
// Use v1 as prefix for all API endpoints
app.use('/v1', router);
app.use('/static', express.static("./build/static"));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

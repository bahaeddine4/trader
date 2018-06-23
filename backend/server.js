const express = require('express');

const app = express();

app.use('/ping', (req, res) => res.send('pong'))

app.listen(3000, () => console.log('server listening'))
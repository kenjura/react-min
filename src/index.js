const express   = require('express');
const jsxHelper = require('./helper/jsxHelper');
const path      = require('path');

const app = express();
const clientRoot = 'src/client';

app.use(jsxHelper.serveJSX(clientRoot));
app.use('/node_modules', express.static('node_modules'));
app.use(express.static(clientRoot));

app.listen(3000, () => console.info('Express server listening on port 3000'));

const express   = require('express');
const jsxHelper = require('./helper/jsxHelper');
const fs        = require('fs');
const path      = require('path');

const port = 3300;


module.exports = function({ clientRoot }) {
	if (!clientRoot) throw new Error('must provide a clientRoot');
	if (!fs.lstatSync(clientRoot).isDirectory()) throw new Error('clientRoot must be a valid directory');

	const app = express();

	app.use(jsxHelper.serveJSX(clientRoot));
	app.use('/node_modules', express.static('node_modules'));
	app.use(express.static(clientRoot));

	app.listen(port, () => console.info(`Express server listening on port ${port}`));

	return app;
}

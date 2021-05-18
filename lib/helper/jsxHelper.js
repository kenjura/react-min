const babel = require('babel-core');
const st = require('connect-static-transform');


module.exports = { parseJSX, serveJSX };

function parseJSX(jsx) {
  const babelPresets  = { presets: ['react'] };
  return babel.transform(jsx, babelPresets).code;
}

function serveJSX(root) {
  return st({
    root,
    match: /.+\.jsx/,
    transform: (path, text, send) => send(parseJSX(text), { 'Content-Type':'application/x-javascript' })
  });
}
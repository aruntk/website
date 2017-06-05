//
// This script will run a local development server. This is useful when
// developing the theme.
//
// Usage:
// `node serve`
//

var http = require("http");
var fs = require('fs');
var resume = require('./resume.json');
var theme = require("./index.js");

var port = process.env.PORT || 80;
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(render());
}).listen(port);

console.log("Preview: http://localhost:"+port+"/");
console.log("Serving..");

function render() {
    try {
        return theme.render(resume);
    } catch (e) {
        console.log(e.message);
        return "";
    }
}

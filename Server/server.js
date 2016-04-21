var http = require('http');
var url = require('url');

function start() {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		var querystring = url.parse(request.url).query['param'];

		console.log("Request received " + pathname + ", param :" + querystring);
		response.writeHead(200,{"Content-Tpe":"text/plain"});
		response.write("HelloNodejs");
		response.end();
	}
	http.createServer(onRequest).listen(9999);
	console.log("server has started.");
}

exports.start = start;
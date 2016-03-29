/*
* Cytonn Technologies
* @author Kenneth Thumi<kthumi.cytonn.com>
*
*/
//get the utilities required
var http = require('http');
var fs = require('fs');

http.createServer (function (request, response){
	var url = request.url;
	//routing algorithm
	getStaticFileContent(response, 'index.htm', 'text/html');
}).listen(9090);

console.log('Server running at http://localhost:9090');

//function that reads the filepath
function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.writeHead(404, {'contentType': 'text/plain'});
			response.end('404 - Internal Server Error.');
		}
		if(data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	});
}
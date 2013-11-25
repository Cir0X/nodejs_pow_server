var express = require('express');
var app = express();

app.use(express.static(__dirname + '/content'));

// Read the raw body without content-types
app.use(function(request, res, next){
	var data = "";
	request.on('data', function(chunk){ data += chunk})
	request.on('end', function(){
		request.rawBody = data;
		next();
	})
})

app.post('/pow2', function(request, response){
	console.log("[pow2 Route] - Incoming Request");
	var pot = 2;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow2 Route - End of Request\n");
	response.end(result);
});

app.post('/pow3', function(request, response){
	console.log("[pow3 Route] - Incoming Request");
	var pot = 3;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow3 Route - End of Request\n");
	response.end(result);
});

app.post('/pow4', function(request, response){
	console.log("[pow4 Route] - Incoming Request");
	var pot = 4;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow4 Route - End of Request\n");
	response.end(result);
});

app.post('/pow5', function(request, response){
	console.log("[pow5 Route] - Incoming Request");
	var pot = 5;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow5 Route - End of Request\n");
	response.end(result);
});

app.post('/pow6', function(request, response){
	console.log("[pow6 Route] - Incoming Request");
	var pot = 6;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow6 Route - End of Request\n");
	response.end(result);
});

app.post('/pow7', function(request, response){
	console.log("[pow7 Route] - Incoming Request");
	var pot = 7;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow7 Route - End of Request\n");
	response.end(result);
});

app.post('/pow8', function(request, response){
	console.log("[pow8 Route] - Incoming Request");
	var pot = 8;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow8 Route - End of Request\n");
	response.end(result);
});

app.post('/pow9', function(request, response){
	console.log("[pow9 Route] - Incoming Request");
	var pot = 9;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow9 Route - End of Request\n");
	response.end(result);
});

app.post('/pow10', function(request, response){
	console.log("[pow10 Route] - Incoming Request");
	var pot = 10;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow10 Route - End of Request\n");
	response.end(result);
});

app.post('/pow11', function(request, response){
	console.log("[pow10 Route] - Incoming Request");
	var pot = 11;
	var bas = request.rawBody;
	var result = calculate(bas, pot);
	console.log("\t" + bas + " ^ " + pot + " = " + result);
	console.log("[pow11 Route - End of Request\n");
	response.end(result);
});

function calculate(bas, pot) {
	var result = Math.pow(bas, pot);
	return result.toString();
}

app.listen(1337);
console.log("Server Successfully Started \n Waiting for Requests...")
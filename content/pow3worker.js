var bas = 0;
function pow3() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow3', bas.toString());
	var calc = bas + " ^ 3 = " + result;
	postMessage(calc.toString());
	setTimeout("pow3()", 1000);
}
pow3();
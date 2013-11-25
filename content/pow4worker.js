var bas = 0;
function pow4() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow4', bas.toString());
	var calc = bas + " ^ 4 = " + result;
	postMessage(calc.toString());
	setTimeout("pow4()", 1000);
}
pow4();
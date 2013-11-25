var bas = 0;
function pow10() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow10', bas.toString());
	var calc = bas + " ^ 10 = " + result;
	postMessage(calc.toString());
	setTimeout("pow10()", 1000);
}
pow10();
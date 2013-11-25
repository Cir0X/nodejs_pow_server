var bas = 0;
function pow8() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow8', bas.toString());
	var calc = bas + " ^ 8 = " + result;
	postMessage(calc.toString());
	setTimeout("pow8()", 1000);
}
pow8();
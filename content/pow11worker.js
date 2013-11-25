var bas = 0;
function pow11() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow11', bas.toString());
	var calc = bas + " ^ 11 = " + result;
	postMessage(calc.toString());
	setTimeout("pow11()", 1000);
}
pow11();
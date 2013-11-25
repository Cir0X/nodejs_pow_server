var bas = 0;
function pow6() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow6', bas.toString());
	var calc = bas + " ^ 6 = " + result;
	postMessage(calc.toString());
	setTimeout("pow6()", 1000);
}
pow6();
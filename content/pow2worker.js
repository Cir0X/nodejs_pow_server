var bas = 0;
function pow2() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow2', bas.toString());
	var calc = bas + " ^ 2 = " + result;
	postMessage(calc.toString());
	setTimeout("pow2()", 1000);
}
pow2();
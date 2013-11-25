var bas = 0;
function pow5() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow5', bas.toString());
	var calc = bas + " ^ 5 = " + result;
	postMessage(calc.toString());
	setTimeout("pow5()", 1000);
}
pow5();
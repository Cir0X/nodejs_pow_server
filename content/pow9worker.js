var bas = 0;
function pow9() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow9', bas.toString());
	var calc = bas + " ^ 9 = " + result;
	postMessage(calc.toString());
	setTimeout("pow9()", 1000);
}
pow9();
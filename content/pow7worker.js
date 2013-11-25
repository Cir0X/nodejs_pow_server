var bas = 0;
function pow7() {
	bas++;
	importScripts('post_request.js')
	var result = postRequest('/pow7', bas.toString());
	var calc = bas + " ^ 7 = " + result;
	postMessage(calc.toString());
	setTimeout("pow7()", 1000);
}
pow7();
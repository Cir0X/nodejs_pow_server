var url = "http://localhost:1337"

function postRequest(route, bas) {
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", url + route, false );
	xmlHttp.send( bas );
	return xmlHttp.responseText;
}
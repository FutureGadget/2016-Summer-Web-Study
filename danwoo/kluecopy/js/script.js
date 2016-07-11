function clock() {
	var now = new Date();
	// var outStr = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
	var outStr = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
	console.log(outStr);
	document.getElementById('time').innerHTML=outStr;
	setTimeout('clock()',1000);
}
clock();
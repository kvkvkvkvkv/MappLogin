
function check(){
	var n=document.getElementById('name').value;
	var p=document.getElementById('pass').value;
	document.getElementById('p1').innerHTML="";
	document.getElementById('p2').innerHTML="";
	document.getElementById('p3').innerHTML="";
	if((n==""||n==" "||n==null)&&(p==""||p==" "||p==null)){
		document.getElementById('p1').innerHTML="Enter Name and Password";
	}
	else{
		if (n==""||n==" "||n==null) {
			document.getElementById('p2').innerHTML="Enter Name";
		}
		if (p==""||p==" "||p==null) {
			document.getElementById('p3').innerHTML="Enter Password";
		}
	}
}
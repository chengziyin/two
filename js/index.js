var tab = document.getElementsByTagName('table')[0];
var info = tab.getElementsByTagName('tbody')[0];
var detail = info.getElementsByTagName('tr')[0];
var message = detail.getElementsByTagName('td');

var student = [
	['关羽','男','102','北京','121437593','18594856321','586741058','2009年','河南'],
	['刘备','男','102','北京','121478534','18519657090','191950970','2009年','河北'],
	['曹操','男','101','河北','154976053','13967086594','989560442','2006年','河北'],
	['刘秀','男','97','江苏','185968473','13869053217','958674039','2015年','福建'],
	['孙权','男','100','山东','165890468','13256764376','960584368','2010年','山东'],
	['诸葛亮','男','95','陕西','197069543','13426897865','896854327','2008年','河北']

]


for (var i = 0; i < student.length; i ++){
	var n = info.rowIndex + 1;
	var tr = info.insertRow(n);
		for(var j = 0; j < student[i].length; j ++){
				var td = tr.insertCell(j);
				td.innerHTML = student[i][j];
			}
}

// var n = info.rowIndex + 1;
// var tr = info.insertRow(n);
// for(var i = 0; i < message.length; i ++){
// var td = tr.insertCell(message[i]);
// td.innerHTML = Math.random();
// }
var m = document.getElementsByTagName('input');
var addBt = document.getElementById('addBtn');

addBt.onclick = function(){
	show();
}

var clear = document.getElementById('clearBtn');
clear.onclick = function(){
	for(var i = 0; i < m.length; i ++){
		m[i].value = null;
		m[i].style.backgroundColor = '#ccc';
	}
}

function show(){
	var t = new Array();
	var n = info.rowIndex + 1;
	var tr = info.insertRow(n);
	for( var i = 0; i < m.length; i ++){
		t[i] = m[i].value;
		var td = tr.insertCell(i);
		td.innerHTML = t[i];
		if(m[i].value == ''){
		m[i].style.backgroundColor = 'red';
		m[i].focus();
		info.removeChild(tr);
		}else{
			m[i].style.backgroundColor = '#ccc';
		}
	}	
}



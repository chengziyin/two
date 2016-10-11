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


var logIn = document.getElementById('logInBtn');
var signIn = document.getElementById('signInBtn');
var showD = document.getElementById('showDiv');
var logInPal = document.createElement('div');
var submitBtn = document.getElementById('logIn');

var old = submitBtn;
var oldInner = submitBtn.innerHTML;
//登陆按钮点击事件
logIn.onclick = function(){
	showD.style.display = 'block';
	showDiv();
	if(logInPal.innerHTML != null){
		logInPal.innerHTML = null;
		logInDiv();
	}else{
	return logInPal.innerHTML;
	}
}

//注册按钮点击事件
signIn.onclick = function(){
	showD.style.display = 'block';
	showDiv();
}

//显示中间div
function showDiv(){
	logInPal.style.width = '400px';
	logInPal.style.height = '280px';
	logInPal.style.position = 'relative';
	logInPal.style.top = '100px';
	logInPal.style.left = '50%';
	logInPal.style.marginLeft = '-200px';
	logInPal.style.backgroundColor = '#fff';
	logInPal.style.zIndex = '8888';
	var object = showD.appendChild(logInPal);
}

//隐藏弹出框
function hideDiv(){
	showD.style.display = 'none';
}

//显示登陆框内容
function logInDiv(){	
	var logInItem = document.createElement('div');
	var object = logInPal.appendChild(logInItem);
	logInItem.style.height = '50px';
	logInItem.style.marginTop = '20px';
	logInItem.innerHTML = '请输入用户名，密码登陆';
	logInItem.style.textAlign = 'center';
	logInItem.style.fontSize = '30px';
	logInItem.style.paddingTop = '13px';
	logInItem.style.backgroundColor = 'rgba(126,233,108,1)';
	var name = document.createElement('input');
	var passWord = document.createElement('input');
	name.type = 'text';
	name.style.display = 'block';
	name.style.height = '35px';
	name.style.width = '300px';
	name.style.margin = '10px auto';
	name.style.fontSize = '24px';
	name.style.borderRadius = '6px';
	name.placeholder = '请输入用户名/邮箱/手机号';
	var nameList = name.value;

	passWord.type = 'passWord';
	passWord.style.display = 'block';
	passWord.style.height = '35px';
	passWord.style.width = '300px';
	passWord.style.margin = '10px auto';
	passWord.style.fontSize = '24px';
	passWord.style.borderRadius = '6px';
	passWord.placeholder = '请输入密码';
	var passWordList = passWord.value;
	
	var btnLogIn = document.createElement('button');
	btnLogIn.style.display = 'block';
	btnLogIn.style.margin = '20px auto';
	btnLogIn.innerHTML = '登陆';
	btnLogIn.style.height = '35px';
	btnLogIn.style.width = '300px';
	btnLogIn.style.backgroundColor = 'green';
	btnLogIn.style.fontSize = '22px';
	btnLogIn.style.textAlign = 'center';
	btnLogIn.style.color = '#fff';
	btnLogIn.style.cursor = 'pointer';

	var txt = document.createElement('a');
	txt.innerHTML = '切换到快速登陆';
	txt.setAttribute('Id','change');
	txt.href = "#";
	txt.style.textDecoration = 'none';
	txt.style.color = '#f00';
	txt.style.float = 'right';
	txt.style.marginRight = '50px';

	
	var object = logInPal.appendChild(name);
	var object = logInPal.appendChild(passWord);
	var object = logInPal.appendChild(btnLogIn);
	var object = logInPal.appendChild(txt);

	var aBtn = document.getElementById('change');

	var person = [
		['肖明声','12345678']
	]



	aBtn.onclick = function(){
		if(txt.innerHTML == '切换到快速登陆'){
			for(var i = 0; i < person.length; i ++){
				for(var j = 0; j < person[i].length; j ++){
					name.value = person[i][0];
					passWord.value = person[i][1];
					// alert(person[i][j]);
				}
			}
		txt.innerHTML = '切换回普通模式';
		}else if(txt.innerHTML == '切换回普通模式'){
			txt.innerHTML = '切换到快速登陆';
			name.value = '';
			passWord.value = '';
		}
	}


	btnLogIn.onclick = function(){

		if(name.value != '' && passWord.value != ''){
			hideDiv();
			submitBtn.innerHTML = '用户名:' + name.value;
		}else if(name.value == ''){
				name.value = '请输入用户名';
		}else if(passWord.value == ''){
				alert('请输入密码');
		}
	}
}

var logOut = document.createElement('button');
submitBtn.onmouseover = function(){
	if(submitBtn.innerHTML.match('用户名') && !submitBtn.innerHTML.match('退出')){	
	logOut.innerHTML = '退出';
	// logOut.style.position = 'relative';
	// logOut.style.top = '20px';
	// logOut.style.width = '200px';
	logOut.style.height = '30px';
	logOut.style.fontSize = '22px';
	logOut.style.cursor = 'pointer';
	var object = submitBtn.appendChild(logOut);
	}
}

logOut.onclick = function(){
		submitBtn.innerHTML = oldInner;
		submitBtn = old;
	}

// submitBtn.onmouseout = function(){
// 	logOut.style.display = 'none';
// }



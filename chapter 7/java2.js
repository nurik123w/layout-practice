

let array = [
{email:"nurik-1233",password:"12345"},
{email:"coolBoy@gmail.com",password:"lexus570"},
{email:"neTvoya@mail.ru",password:"barbieGirl"},
{email:"superStar@box.ru",password:"Loppo"},
{email:"goNgetter@gmail.com",password:"ill345"},
{email:"user@mail.ru",password:"admin"},
{email:"alimhan.07@mail.ru",password:"gta5minecraft"}

];
 
 let obj ={};
 let Taken;
 let matchh;
 let length;
 let mail = document.getElementById("mails");
 let pass = document.getElementById("password2");
 let same = document.getElementById("retypePass");

 let usedDiv = document.getElementById("inUse");
 let limitSymbols = document.getElementById("inLimit");
 let notMatch = document.getElementById("inSame");

 
function putting(){
	 Taken=false;
	for(let i=0;i<array.length;i++){
		if(array[i].email == mail.value){
			Taken=true;
			usedDiv.innerText = "Current email is already in use"
		} 	
		
	}

	if(Taken==false){
		// obj.email = mail.value;
		usedDiv.innerText = "";
	}
}

function putting1(){
	 length = false;
	if(pass.value.length>=6){
		// obj.password = pass.value;
		length=true;
		limitSymbols.innerText = "";
	}else{
		limitSymbols.innerText = "Password length at least must be 6 symbols";
			
	}
}

function putting2(){
	 matchh = false;
		if(pass.value==same.value){
			// obj.password = pass.value;
			matchh = true;
			notMatch.innerText = "";
		}else{
				notMatch.innerText = "Passwords are not the same";
			 }
		}

 
function reg(){
	if(Taken==false && length==true && matchh==true){
		  obj.email = mail.value;
		  obj.password = pass.value;
		  array.push(obj);

		  alert(array[array.length-1].email+" "+ array.length);
	}else{
		alert("no add");
	}
}


function clickClap(){
	for(let i = 0 ; i<array.length; i++){
		alert(array[i].email);
	}
}


// ---------------------Task 2--------------------------------
document.getElementById("sum");


function convert(){
	let sm = parseInt(sum.value);
	let v = document.getElementById("selecter");
	if(v.value=="kzt"){
      document.getElementById("kztBox").value = "-";
      document.getElementById("usdBox").value = sm/420;
      document.getElementById("eurBox").value = sm/500;
	}else if(v.value=="usd"){
	  document.getElementById("kztBox").value = sm*420;
      document.getElementById("usdBox").value = "-";
      document.getElementById("eurBox").value = sm*0.85;
	}else if(v.value=="eur"){
	  document.getElementById("kztBox").value = sm*500;
      document.getElementById("usdBox").value = sm/0.85
      document.getElementById("eurBox").value = "-";
	}	
}



















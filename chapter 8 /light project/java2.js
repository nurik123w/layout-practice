
let user = [];
let arrJson = localStorage.getItem("user");

	if(arrJson!=null){
		user = JSON.parse(arrJson);
	}

function reg(){
	let exists = true;
	let	mail1=mailInput.value;
	let	password1=passInput.value;
	let	country1=country.value;
	let	name1= nameInput.value;
	let	birth1 = birthdateInput.value;


	for(let i =0; i<user.length;i++){
		if(user[i].mail == mail1){
			exists=false;
			

			alert("this email is already exists!!!");
				mailInput.value="";
				passInput.value="";
				country.value="";
				nameInput.value="";
				birthdateInput.value="";

		}
	}
	if(exists==true){
		let obj =
				{
					mail: mail1,
					password: password1,
					country: country1,
					name: name1,
					birth: 	birth1
				}; 

				user.push(obj);
				localStorage.setItem("user",JSON.stringify(user));

				mailInput.value="";
				passInput.value="";
				country.value="";
				nameInput.value="";
				birthdateInput.value="";

					alert("successfully registered");
		}
	}


//------------------------------ LOGIN -------------------------------------
let id=0;
 function sign(){
 	let exists = false;
 	let mail1 = mail2.value;
 	let password2 = pass2.value;
 	  for(let i = 0 ; i<user.length;i++){
 			if(user[i].mail == mail1 && user[i].password ==password2){
 				exists = true;	
 				id = i;
 				localStorage.setItem("id",id);
 				window.location = "welcome.html";
 			}
 	  }

 		if(exists==false){
 			alert("invalid mail or password");
 			pass2.value="";
 			mail2.value="";
 		}
 }


// ----------------------------- WELCOME PAGE -----------------------------------
let da = document.getElementById("m");

function welc(){
	let id = localStorage.getItem("id");
	let idd = JSON.parse(id);
	let par = document.createElement('p');
	par.innerText = "WELCOME "+user[id].name;
	m.appendChild(par);
	mail7.innerText = user[id].mail;
	fname.innerText = user[id].name;
	country7.innerText = user[id].country;
	bday7.innerText = user[id].birth;

	nameon.innerText = user[id].name;
}		



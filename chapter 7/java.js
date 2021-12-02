
//------------------------Task 1---------------------------------

 let users = [
	 {login:"ilyas",password:"qwerty"},
	 {login:"ilya",password:"qwertyop"},
	 {login:"madi",password:"bomb"},
	 {login:"SheSaysAgain",password:"click"},
	 {login:"sss",password:"1222"},
	 {login:"user",password:"password"}
 ];

function authen(){
	let loge = document.getElementById("log");
	let log = loge.value;
	let passe = document.getElementById("pass");
	let pass = passe.value;
	let d1 = document.getElementById("div1");
	let d2 = document.getElementById("divka");

	let exists = false;
	for(let i = 0 ; i<users.length; i++){
		if(log==users[i].login && pass==users[i].password ){
			exists = true;
			d1.style.display = "none";
			d2.innerText = "You are authenticated";
			d2.style.display = "block"
		}
	}	

	if(exists==false) {
			loge.style.borderColor = "red";
			loge.style.borderWidth = "2px";
			loge.style.borderStyle = "solid";

			passe.style.borderColor = "red";
			passe.style.borderWidth = "2px";
			passe.style.borderStyle = "solid";
		}
}

//------------------------Task 2---------------------------------

let num = document.getElementById("num");
let	n = parseInt(num.innerText);
function plus(){
		n++;
		num.innerText = n;
}

function minus(){
		n--;
		num.innerText = n;
}

//------------------------Task 3---------------------------------

let debit = [
	 {card:"4413434135342424",FullName:"Ilyas Zhuanyshev",CVV:"388"},
	 {card:"4413434135300000",FullName:"Ilya Zhuanysheva",CVV:"389"},
	 {card:"4413434135312121",FullName:"Madi Smadi,",CVV:"390"},
	 {card:"4413434135333333",FullName:"Madina Smadina",CVV:"391"},
	 {card:"4413434135101010",FullName:"Dylias Zhuanyshev",CVV:"392"}
 ];

 function complete(){
	let cardNum=document.getElementById("card1").value;
 	let cardNum1=document.getElementById("card2").value;
 	let cardNum2=document.getElementById("card3").value;
 	let cardNum3=document.getElementById("card4").value;
 	let debitCard=cardNum+cardNum1+cardNum2+cardNum3;
 	let cvv = document.getElementById("cvv1").value;
	let FullName = document.getElementById("fullName").value;
	
	let exists = false;
	for(let i = 0 ; i<debit.length ; i++){
		if(debitCard==debit[i].card && FullName==debit[i].FullName
		 && cvv==debit[i].CVV){
			exists = true;
			alert("Transaction completed!");
			} 
	}if(exists==false){
			alert("Invalid Data(");
		}
 }

//------------------------Task 4---------------------------------
	 
	let album = ["https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg", //0
				"https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg", //1
				"https://fl-img-media.s3.amazonaws.com/uploads/2020/11/Logo-only.png", //2 
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxbGYbc1P6_LEshxIsnx2i8cPiElGoUJfPhFhoXMLJbe05P3K3Fw2IjEAuCtxtQ6OTYo&usqp=CAU",
				"https://www.ecoutesolitude.com/wp-content/uploads/2019/03/images2.jpg",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljZkkRywYKrvWq89YZZ6bZFWoOu9_b_vCgA&usqp=CAU",
				"https://www.img-studios.com/wp-content/uploads/2016/10/IMG-LOGO-HOMEPAGE.png"
	];

	let nx = 0;
	let nb = 0;
	let tagImage = document.getElementById("srce");

	function next(){
		if(nx<album.length-1){
			nx++;
			tagImage.src = album[nx];
			nb=nx;
		}else{
			alert("bitti");
		}
	}

	function back(){
		if(nb>0){
			nb--;
			tagImage.src = album[nb];
			nx=nb;
		}else{
			alert("bitti");
		}
	}

//------------------------Task 5---------------------------------

	 let bigImg = document.getElementById("pig");
	 function loadImage(elem){
	 	clickImg = elem.src;
	 	bigImg.src = clickImg;
	 }

// -----------------------------иуууууу----------------------------------

































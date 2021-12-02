
let items = [];
let jsonArr = localStorage.getItem("good");

if(jsonArr!=null){
	items = JSON.parse(jsonArr);
}

function toBasket(element){
  let parent = element.parentElement.parentElement;
  let p = parent.getElementsByTagName('span');

	     let name1 =  p.item(0).innerText;
		 let infa1 = p.item(1).innerText;
       	 let obj = {
		       	 	name: name1 , 
		       	 	infa: infa1
		       	 	};

       	items.push(obj);		

     localStorage.setItem("good",JSON.stringify(items));   	 
}	


// ------------------------------ Basket------------------------------------//
 let divka = document.getElementById("in");

function basketShow(){
	for(let i = 0; i<items.length;i++){
		let bigD = document.createElement('div');
		bigD.className = "bigD";
		let d = document.createElement("div");
		let d2 = document.createElement("div");
		let d3 = document.createElement("div");
		d.className = "divka2";
		d2.className = "divka3";
		d3.className = "divka4";
		let p = document.createElement('p');
		let p2 = document.createElement('p');
		let btn = document.createElement('button');
		p.className = "prodName";
		p2.className = "costCost";
		btn.innerText = "REMOVE";
		btn.addEventListener('click',remove);
		p.innerText = items[i].name;
		p2.innerText = items[i].infa;
	
		d.appendChild(p);
		d2.appendChild(p2)
		d3.appendChild(btn);
		bigD.appendChild(d);
		bigD.appendChild(d2);
		bigD.appendChild(d3);
		divka.appendChild(bigD);
	}
}



function remove(index){
 	
 	 let child = index.target.parentElement.parentElement;
 	 let parent = child.parentElement.getElementsByClassName("bigD");
 	 let id = Array.from(parent).indexOf(child);

 	items.splice(id,1);
 	child.remove();
 	localStorage.setItem("good",JSON.stringify(items));  	
}

function back(){
	window.location = "page1.html";
}



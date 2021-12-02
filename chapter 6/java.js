

// --------------------Task 1 -------------------------

// let x = parseInt(prompt("insert a length"));
// let array = [];
// 	for(let s = 0; s<x;s++){
// 		let d = parseInt(prompt("insert a number"));
// 		array.push(d);
// 	}
// 	alert(array);


// --------------------Task 2 -------------------------

// let n = parseInt(prompt("insert a num"));
// 	let array = [];
// 	for(let d = 0; d<n;d++){
// 		let w = parseInt(prompt("insert"))
// 		array.push(w);
// 	}

// 	let max = 0;
// 	let id = 0;
// 	for(let d =0 ; d<n;d++){
// 		if(max<array[d]){
// 			max=array[d];
// 			id = d;
// 		}
// 	}

// 	alert(max);

// --------------------Task 3 -------------------------

// let n = parseInt(prompt("insert a num"));
// 	let array = [];
// 	for(let d = 0; d<n;d++){
// 		let w = parseInt(prompt("insert"))
// 		array.push(w);
// 	}

// 	let sum = 0;
// 	for(let d =0 ; d<n;d++){
// 		sum+=array[d];	
		
// 	}

// 	alert(sum+" \n"+sum/n);

// --------------------Task 4 -------------------------

// let n = parseInt(prompt("insert a num"));
// 	let array = [];
// 	for(let d = 0; d<n;d++){
// 		let w = parseInt(prompt("insert"))
// 		array.push(w*w);
// 	}

// 	alert(array);

// --------------------Task 5 -------------------------
	
	// let log = prompt("insert a login"),
	// pas = prompt("insert a password");

	// let users = [
	// 	{login:"ilyas",pass:"qwerty"},
	// 	{login:"eldar",pass:"sas"},
	// 	{login:"assylhan",pass:"das"},
	// 	{login:"anel", pass:"saadasd"},
	// 	{login:"alibek",pass:"aaaaa"}
	// ];

	// for(let i = 0; i<users.length;i++){
	// 	if(log==users[i].login&&pas==users[i].pass){
	// 		alert("welcome");
	// 		break;
	// 	}else {
	// 		alert("not found 404 bip bip bip");
	// 		break;
	// 	}
	// }

// --------------------Task 6 -------------------------
	
	// let books = [
	// {author:"Joanne Rowling",ISBN:"123213",cost:"50$"},
	// {author:"Joanne Rowling",ISBN:"42144",cost:"40$"},
	// {author:"Joanne Rowling",ISBN:"12321321",cost:"44$"},
	// {author:"Lev Tolstoy",ISBN:"12321412",cost:"30$"},
	// {author:"Lev Tolstoy",ISBN:"213214",cost:"64$"},
	// {author:"Jack London",ISBN:"312123",cost:"42$"},
	// {author:"Jack London",ISBN:"414421",cost:"52$"},
	// {author:"Mariya Svetayeva",ISBN:"214214",cost:"20$"},
	// {author:"Mariya Svetayeva",ISBN:"214124",cost:"15$"}
	// ];

	// let name = prompt("choose an author");
	// for(let i = 0 ; i<books.length; i ++){
	// 	if(name==books[i].author){
	// 		alert(books[i].author+" "+books[i].ISBN+" "+books[i].cost);
	// 	}
	// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// --------------------Task 1 -------------------------

	// let n = parseInt(prompt("insert a number"));
	// 	let array = [];
	// 	for(let i = 0; i<n;i++){
	// 		let n1 = parseInt(prompt("insert values"));
	// 		array.push(n1);
	// 	}

	// 	let n3 = parseInt(prompt("just insert.."));
	// 	for(let i = 0; i<n;i++){	
	// 		if(n3==array[i]){
	// 			console.log("YES "+i);
	// 		}else{
	// 			console.log("NO");
				
	// 		}
	// 	}
		
// --------------------Task 2 -------------------------
	

// --------------------Task 3 -------------------------
	
		// let array = [];
		// while(true){
		// 	let n = parseInt(prompt("insert"));
		// 	if(n==0){
		// 		break;
		// 	}
		// 	if(n>0){
		// 		array.push(n);
		// 	}
		// }

		// for(let i = 0 ; i<array.length;i++){
		// 	alert(array[i]);
		// }

// --------------------Task 4-------------------------
	
	// let n = parseInt(prompt("insert"));
	// 	let array = [];
	// 	for(let i = 0 ; i<n ; i++){
	// 		let n1 = parseInt(prompt("insert"));
	// 		array.push(n1);
	// 	}

	// 	let sum = 1;
	// 	for(let i = 0 ; i<array.length ; i++){
	// 		if(array[i]>0){
	// 			sum=sum*array[i];
	// 		}
	// 	}

	// 	alert(sum);

// --------------------Task 5--------------------------

// 	cars = [
// 	{name:"Toyota", price: 12000000, years: 2015, volume: 2.2},
// 	{name:"Mercedes", price: 70000000, years: 2018, volume: 3.8},
// 	{name:"Toyota", price: 7000000, years: 2013, volume: 2.0}, 
// 	{name:"BMW", price: 11000000, years: 2011, volume: 3.0}, 
// 	{name:"Lexus",price: 60000000, years: 2017 ,volume: 5.7}
// 	];

// 	while(true){
// 	let choice = parseInt(prompt("INSERT [1] TO SEARCH BY NAME"+" \n"+
// 	"INSERT [2] TO SEARCH BY YEAR"+" \n"+
// 	"INSERT [3] TO SEARCH BY ENGINE VOLUME"+" \n"+
// 	"INSERT [4] TO SEARCH BY PRICE"+" \n"+
// 	"INSERT [5] TO EXIT"));

// 	if(choice==1){
// 		let name = prompt("insert name of car");
// 		for(let i = 0 ; i<cars.length ; i++){
// 			if(name==cars[i].name){
// 				alert(cars[i].name+"-"+cars[i].years+"-"+cars[i].volume+" liters -"+cars[i].price+" KZT");
// 			}
// 		}
// 	}
// 	else if(choice==2){
// 		let start = parseInt(prompt("insert start from")),
// 		end = parseInt(prompt("insert ends from"));
// 		for(let i = 0 ; i<cars.length ; i++){
// 			if(start<=cars[i].years&&cars[i].years<=end){
// 				alert(cars[i].name+"-"+cars[i].years+"-"+cars[i].volume+" liters -"+cars[i].price+" KZT");
// 			}

// 		}
// 	}else if(choice==3){
// 			let start = parseFloat(prompt("insert start from")),
// 			end = parseFloat(prompt("insert ends from"));
// 		for(let i = 0 ; i<cars.length ; i++){
// 			if(start<=cars[i].volume&&cars[i].volume<=end){
// 				alert(cars[i].name+"-"+cars[i].years+"-"+cars[i].volume+" liters -"+cars[i].price+" KZT");
// 			}
// 		}
// 	}else if(choice==4){
// 			let start = parseInt(prompt("insert start from")),
// 			end = parseInt(prompt("insert ends from"));
// 		for(let i = 0 ; i<cars.length ; i++){
// 			if(start<=cars[i].price&&cars[i].price<=end){
// 				alert(cars[i].name+"-"+cars[i].years+"-"+cars[i].volume+" liters -"+cars[i].price+" KZT");
// 			}
// 		}
// 	}else if (choice==5){
// 		break;
// 	}
// }

// --------------------------SUPER TASK---------------------------------------------------
	// let array = [];
	// while(true){
	// let choice = parseInt(prompt("INSERT [1] TO ADD STUDENT"+" \n"+
	// 						"INSERT [2] TO LIST STUDENT"+" \n"+
	// 						"INSERT [3] TO EXIT"));

 // 		if(choice==1){
 // 			let names = prompt("name"),
 // 			surnames = prompt("surname"),
 // 			gpas = parseFloat(prompt("gpa"));
 // 			array[array.length]={name:names,surname:surnames,gpa:gpas};
 // 		}else if(choice==2){
 // 			for(let i = 0 ;i<array.length;i++){
 // 				alert(array[i].name+" "+array[i].surname+" gpa: "+array[i].gpa);
 // 			}
 // 		}else if(choice==3){
 // 			break;
 // 		}
 // 	}

// =============================иууууууу=====================================================




















	s

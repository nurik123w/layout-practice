// -----------------Task 1 ---------------------

// let x = parseInt(prompt("insert a number"));

// y=(x*x)+(2*x-1);

// alert(y)

// -----------------Task 2 ---------------------

// let x = parseInt(prompt("insert a number")),
// b = parseInt(prompt("insert a number"));


// if(x%b==0)
// 	alert("Divisble");
// else
// 	alert("sorry ")

// -----------------Task 3 ---------------------

// let name = prompt("insert a name")
// ,surname = prompt("insert a surname")
// ,city = prompt("insert a city")
// ,age = prompt("ur age ?");


// alert("Name: "+name+" \n"
// 	+"Surname: "+surname+" \n"
// 	+"City: "+city+" \n"+
// 	"Age: "+age);

// -----------------Task 4 ---------------------

// let a = parseInt(prompt("insert a number")),
// b = parseInt(prompt("insert a number")),
// c = parseInt(prompt("insert a number"));

// alert("a+b+c= "+(a+b+c)+" \n"+
// 	"a-b-c="+(a-b-c)+ " \n"+
// 	"a*b*c="+(a*b*c));

// -----------------Task 5 ----------------------

// let n = parseInt(prompt("insert amount of ppl")),
// k = parseInt(prompt("insert amount of apple"));

// alert(parseInt((k/n))+" \n"+ (k%n)+" left");

// -----------------Task 6 ----------------------

// let x = parseInt(prompt("insert a number")),
// y  = parseInt(prompt("insert a number"));

// alert(Math.sqrt(((x*x)+(y*y))));

// -----------------Task 7 ----------------------

// let speed = parseInt(prompt("insert a speed")),
// distance = parseInt(prompt("insert a distance"));

// if(distance/speed<=2.25)
// 	alert("You can reach")
// else 
// 	alert("sorry you can not reach");

// -----------------Task 8 ----------------------

// let x = parseInt(prompt("insert amount of whiskas"));

// let total = x*120
// let kashback = total-(total*0.1);
// if(total>=4000)
	
// 	alert(kashback+" KZT")
// else 
// 	alert(total);

// -----------------Task 9 ----------------------

// let tenge = parseInt(prompt("insert amount")),
// choice =parseInt(prompt("1- CONVERT TO USD"+" \n"+
// "2- CONVERT TO EUR"+" \n"+
// "3- CONVERT TO GBP"));

// if(choice==1)
// 	alert(tenge/380);
// else if(choice==2)
// 	alert(tenge/430);
// else if (choice==3)
// 	alert(tenge/480);


// -----------------Task 10 ----------------------

// let login = prompt("insert login"),
// password = prompt("insert password");


// if(login=="user"&&password=="password")
// 	alert("Authentication completed")
// else
//  	 alert("Invalid login or password");

// -----------------Task 11 ----------------------

// let x = parseInt(prompt("insert a year"));

// if(x>0&&x<30000)
// if(x%4==0&&x%100!=0||x/400==0)
// 	alert("Yes")
// else
// 	alert("No")

// else 
// 	alert("we can not take this year cuz its exceeding try to use years under 30000");


// -----------------Task 12 ----------------------

// let n = parseInt(prompt("insert your score"));

// if(n>=90)
// 	alert("A");
// else if(n>=75)
// 	alert("B");
// else if(n>=60)
// 	alert("C")
// else if(n>=50)
// 	alert("D")
// else alert("F");

// -----------------Task 13 ----------------------

// let choice = prompt("Choose your branch:"+" \n"+
// 	"1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:");
// if(choice==1){
// 	let choice1 = prompt("1 - Math, 2 - Physics:");
// 	if(choice1==1){
// 		alert("You are Financier");
// 	}else if(choice1==2){
// 		alert("You are Engineer");
// 	}
// } else if (choice==2){
// 	let choice1 = prompt("1 - History, 2 - Foreign Languages:");
// 	if(choice1==1){
// 		alert("You are Historic or Diplomat");
// 	}else if(choice1==2){
// 		alert("You are Translator");
// 	}
// }else if(choice==3){
// 	let choice1 = prompt("1 - Drawing, 2 -Singing:");
// 	if(choice1==1){
// 		alert("You are Painter or Architect");
// 	}else if (choice1==2){
// 		alert("You are Singer or Tamada");
// 	}
// }else if(choice==4){
// 	let choice1= prompt("1 - Team, 2 - Individual:");
// 	if(choice1==1){
// 		alert("You are footballer or Basketball player");
// 	}else if(choice1==2){
// 		alert("You are boxer or tennis player");
// 	}
// }

// -----------------Task 14----------------------

	// let a = parseInt(prompt("insert a number")),
	// b= parseInt(prompt("insert a number")),
	// c= parseInt(prompt("insert a number"));

	// if(a+b>c&&a+c>b&&b+c>a)
	// 	alert("YES");
	// else 
	// 	alert("NO");

// -----------------Task 15 ----------------------

	// let x = parseInt(prompt("insert a number")),
	// y = parseInt(prompt("insert a number")),
	// x1 = parseInt(prompt("insert a number")),
	// y1 = parseInt(prompt("insert a number"));

	// if(x==x1||y==y1)
	// 	alert("YES");
	// else alert("NO");

// -----------------Task 16 ----------------------
	
	let num = parseInt(prompt("insert a number"));
		if(num%380==0)
			alert("only "+num/380+" USD")
		else 
			nums=parseInt(num/380);
			cents=parseInt((num/380-nums)*100);
			alert(nums+" and "+cents+" cents");

// -----------------Task 17 ----------------------
	
	// let minutes = parseInt(prompt("insert a number in minutes"));
	// 	if(minutes%60==0)
	// 		alert("only "+minutes/60+" hours");
	// 	else 
	// 		 hour = parseInt(minutes/60);
	// 		 minute = parseInt((minutes/60-hour)*60);
	// 		alert(hour+" hours"+" and "+minute+" minutes");


// -----------------Task 18 ----------------------
	
	// let num = parseInt(prompt("insert a number"));
	// 	let sum = 1;
	// 	for(let i =1;i<=num;i++){
	// 		sum=sum*i;
	// 	}
	// 	alert(sum);


// -----------------Task 19 ----------------------

		// let sum=1;
		// while(true){
		// 	let x = parseFloat(prompt("insert a number"));
		// 	if(x==0){
		// 		break;
		// 	}
		// 	sum=sum*x;
		// }
		// alert(parseFloat(sum));

// -----------------Task 20 ----------------------
	
	// let sum = 0;
	// while(true){
	// 	let x = parseInt(prompt("insert a number"));7
	// 	if(x%2!=0){
	// 		sum=sum+x;
	// 	}else if(x==0){
	// 		break;
	// 	}
		
	// }
	// alert(sum);

// -----------------Task 21 ----------------------

	// let sum=1;
	// let a = parseInt(prompt("insert a number")),
	// b = parseInt(prompt("number"));
	// 	for(let x = 1; x<=b;x++){
	// 		sum=sum*a;
	// 	}
	// 	alert(sum);

// -----------------Task 22 ----------------------

	// let sum = 0;
	// let n = parseFloat(prompt("insert a number"));
	// for(let x = 1 ; x<=n; x++){
	// 	sum=sum+1/x;
	// }
	// alert(sum);

// -----------------Task 23 ----------------------

	// let sum = 1;
	// let n = parseFloat(prompt("insert a number"));
	// for(let x = 1 ; x<=n; x++){
	// 	sum=sum*x;
	// }
	// alert(sum);

// -----------------Task 24 ----------------------
 	// let sum = 1;
	// while(true){
	// let n = parseFloat(prompt("insert a number"));
	// 	if(n==0){
	// 		break;
	// 	}
	// 	sum=sum*n;
	// }
	// 	alert(sum);

	














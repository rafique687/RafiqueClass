// const person = {
//   name: "Rafique",
//   age: 30,
// };

// const p2 = person; //SHALLOW COPY

// p2.age = 35;

// console.log(person.age); //30 35

// const p2 = { ...person }; //DEEP COPY
// p2.age = 35;
// console.log(person.age); //30

// const order = {
//   oid: 1234,
//   sellerId: "abc123",
//   ovalue: 100,
//   status: "pending",
// };

// const newOrder = { ...order, orderDate: "14-07-2025" };

// // console.log(order.orderDate);

// order.oid = 4567;

// console.log(newOrder.oid);

// const order = {
//   oid: 1234,
//   sellerId: "abc123",
//   ovalue: 100,
//   status: "pending",
//   address: {
//     city: "Jaipur",
//     state: "Rajasthan",
//   },
// };

// //NESTED OBJECTS ARE ALWAYS SHALLOW COPIED

// // const o1 = order;

// const order1 = { ...order };

// order1.ovalue = 101;

// console.log(order.ovalue); //100 //VALUE WILL NOT CHANGE IN ORDER OBJECT

// order1.address.city = "Bikaner";

// console.log(order.address.city); //Bikaner //VALUE IS CHANGED IN ORDER OBJECT

// //STRUCTUREDCLONE: DEEP COPIES NESTED OBJECTS TOO

// const order2 = structuredClone(order);

// const order = {
//   oid: 1234,
//   sellerId: "abc123",
//   ovalue: 100,
//   status: "pending",
// };
// console.log(order);
// document.writeln(order);

// FOR...IN LOOP

// for (let i in order) {
//   document.writeln(i + " : " + order[i] + "<br>");
// }

// const id = "status";
// console.log(order[id]);

// console.log(order.oid); //DOT NOTATION
// console.log(order["oid"]); //ARRAY NOTATION

// const id = "status";
// console.log(order[id]);

//typeof(), Array.isArray()

const obj = {
  name: "Raj",
  age: 20,
  hobbies: ["Playing", "Singing"],
  address: {
    city: "Jaipur",
    state: "Rajasthan",
  },
};

// for (let i in obj) {
// 	if(Array.isArray(obj[i])==true)
// 	{
// 		for(let j=0;j<obj[i].length;j++ )
// 		{
// 			document.writeln(obj[i] + " : " + obj[i][j] + "<br>");
// 		}
// 	}
// 	else if(typeof(obj[i])==)
// 	{  
// 		document.writeln('yyy');
// 		for (let k in obj[i]) {
		
// 			document.writeln(obj[i][k] + " : " + obj[i][k] + "<br>");
// 		}

// 	}
// 	else
// 	{
//   document.writeln(i + " : " + obj[i] + "<br>");
// }
// }

// for(let y in obj)
//  {
//  	if(typeof(obj[y])==="object")
//  	{
//  		if(Array.isArray (obj[y]))
//  		{
//  			document.writeln(y + ":"+obj[y] + '<br>');
//  		}
//  		else
//  		{  document.writeln(y + ':-')
//  			for( let z in obj[y])
//  			{
//  				document.writeln(z + ':'+ obj[y][z]+'<br>');
//  			}
//  		}
//  	}
//  	else

//  	{
//  		document.writeln(y + ':'+obj[y] + '<br>');
//  }
//  	}



 // for (let x in obj) {

// // If the value is non primitive

// if (typeof obj[x] === "object") {

// // If it's an array

// if (Array.isArray (obj[x])) {

// document.writeln(x + ":" + obj[x] + "<br>");

// } else {

// for (let y in obj[x]) {

// document.writeln(y + ":" + obj [x][y] + "<br>");

// }

// }

// } 
// else {

// // If it's primitive, just print it

// document.writeln(x + ":" + obj [x] + "<br>");

// }

// }
for(let i in obj)
{
	if(typeof (obj[i])==="object")
	{ // document.writeln('in');
      if(Array.isArray(obj[i]))
      {
      	
      		document.writeln(i +":" + obj[i] + "</br>");
      	
      }
      else
      {
      	 for(let y in obj[i])
      	 {
      	 	document.writeln(y +":"+obj[i][y] + "</br>")

      	 }
      }
	 }
	 else
		{	
			document.writeln(i +":" + obj[i] + "</br>");
		}
}

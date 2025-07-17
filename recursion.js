const obj = {
  name: "Raj",
  age: 20,
  hobbies: ["Playing", "Singing"],
  address: {
    city: "Jaipur",
    state: "Rajasthan",
  },
};

function printObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // If it's an array, print as is
      if (Array.isArray(obj[key])) {
        document.writeln(key + " : " + obj[key] + "<br>");
      } else {
        // If it's an object, recurse
        printObj(obj[key]);
      }
    } else {
      // If it's primitive, just print it
      document.writeln(key + " : " + obj[key] + "<br>");
    }
  }
}

printObj(obj);

// function rec(obj)
// {
//   for(let k in obj)
//   {
//     if(obj[k] === 'object')
//     {
//       document.writeln()
//           }
//   }

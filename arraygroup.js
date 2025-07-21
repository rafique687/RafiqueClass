let arr = ['India', 'China', 'Indonesia', 'Australia', 'Afganistan'];
let narr = {};

for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i][0];
    
    if (!narr[firstLetter]) {
        narr[firstLetter] = []; 
    }

    narr[firstLetter].push(arr[i]); 
}
//document.writeln(narr);
console.log(narr);
// let headings =document.querySelectorAll('.wrapper h1');

// for(let i=0;i<headings.length;i++)
// {

// 	headings[i].addEventListener("click",printname)
 
// }

// function printname(e)
// {   console.log(e)
//    let text =e.target.innerText;
//    //document.querySelector('.wrapper p').innerText=text;
//    document.querySelector('.wrapper h2').textContent=text;
// }

let containt=document.querySelectorAll('.wrapper h1');

for(let k = 0; k < containt.length ; k++)
{
	//console.log(containt[k] + "<br>");
	//containt[k].addEventListener("click",display)
	containt[k].addEventListener("mouseover",display)
}

function display(e)
{
	let mytext = e.target.innerText;
	document.querySelector(".wrapper h2").innerText=mytext
}

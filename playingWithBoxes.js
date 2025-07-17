let containt=document.querySelectorAll('#boxes .box');

for(let k = 0; k < containt.length ; k++)
{
	
	containt[k].addEventListener("click",display)
}

function display(e)
{
	let boxvalue = e.target.innerText;
    let pvalue = document.getElementById('pvalue').innerText;
	let res = Number(pvalue) + Number(boxvalue);
	document.querySelector("#pvalue").innerText=res;
}//Silence is Golden
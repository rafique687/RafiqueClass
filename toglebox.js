let headings =document.querySelectorAll("#wrapper h2");
console.log(headings);
for(let i =0; i<headings.length;i++)
{
    headings[i].addEventListener("click",display)
//    let content= document.querySelector("#wrapper .content"+i);
//    if(content.style.block==='display')
//    {
//     content.style.block='none';
//    }
//    else
//    {
//      content.style.block='none';
//    }
}

function display(event)
{
   // console.log(event.target.nextElementSibling.style.display);
//    if(event.target.nextElementSibling.style.display==='' || event.target.nextElementSibling.style.display==='block' )
//    {
//     event.target.nextElementSibling.style.display='none';
//    }
//    else{
//      event.target.nextElementSibling.style.display='block';
//    }
var ele = event.target.nextElementSibling;
//var linestr = ele.style.display;
if(ele.style.display ==='' || ele.style.display ==='block' )
   {
    ele.style.display ='none';
   }
   else{
     ele.style.display='block';
   }
}
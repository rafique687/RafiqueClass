document.querySelector("#uppercase").addEventListener('click',()=>{
    let text =document.querySelector("#txt").value ;
    
    text=text.toUpperCase();
  //  alert(text);
   // document.getElementById('txt').value =text;
   document.querySelector("#txt").value =text;

})

document.querySelector("#lowercase").addEventListener('click',()=>{
    let text =document.querySelector("#txt").value ;
    
    text=text.toLowerCase();
    //alert(text);
    document.getElementById('txt').value=text;
    

})

document.querySelector("#bold").addEventListener('click',()=>{
    let text =document.querySelector("#txt").style.fontWeight="bold";
    
   // text=text.toLowerCase();
    //alert(text);
    document.getElementById('txt').value=text;
    

})
document.querySelector("#itelic").addEventListener('click',()=>{
    let text =document.querySelector("#txt").style.fontStyle="italic";
    
   // text=text.toLowerCase();
    //alert(text);
    document.getElementById('txt').value=text;
    

})
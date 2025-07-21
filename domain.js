document.querySelector("#domain").addEventListener('click',()=>{
    let text =document.querySelector("#txt").value ;
    
  
    var parts = text.split('@').reverse();
    
    let name=parts[0].split('.');
  //  alert(name[0]);
   

   document.getElementById('dm').innerText =name[0];


})






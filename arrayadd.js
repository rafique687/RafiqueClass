let narr=[];
let val=document.querySelector("#wrapper input");
    
    document.querySelector("#add").addEventListener('click' ,()=>{
      
       narr.push(val.value);
       console.log(narr);
     
       
    });

    document.querySelector("#setorder").addEventListener('click',()=>{

         let select=document.querySelector("#wrapper #order").value;
        
         if(select==='Ascending')
         {
            narr.sort();
           // document.writeln(narr);
            
         }
         else
         {
             narr.reverse()
         }
         for(let i =0;i<narr.length;i++)
            {
                 document.querySelector("#dis").append(narr[i] +',');
            }
    })
    

    
   
  

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
            document.querySelector("#dis").innerHTML='';
           // narr.sort();
           // document.writeln(narr);
           for(let i =0;i< narr.length;i++)
           {
             for(let j=i+1;j< narr.length;j++)
             {
               if(narr[i] > narr[j])
               {
                  let temp=narr[i];
                  narr[i] = narr[j];
                  narr[j] = temp;
               }
             }
           }
            
         }
         else
         {  document.querySelector("#dis").innerHTML='';
           //  narr.reverse()
            for(let i =0;i< narr.length;i++)
           {
             for(let j=i+1;j< narr.length;j++)
             {
               if(narr[i] < narr[j])
               {
                  let temp=narr[i];
                  narr[i] = narr[j];
                  narr[j] = temp;
               }
             }
           }
         }
         
         for(let i =0;i<narr.length;i++)
            {
               
                 document.querySelector("#dis").append(narr[i] +',');
            }
    })
    

    
   
  

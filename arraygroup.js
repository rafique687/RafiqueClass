let arr = ['India','China','Indonesia','Australia','Afganistan'];
let narr ={};
for(let i=0;i<arr.length;i++)
{
// if(narr.hasOwnProperty(arr[i][0]))
  narr=arr[i][0];
   narr  = [ arr[i] ];

    for(let j=i+1;j<arr.length;j++)
    {  
    if(arr[i][0]==arr[j][0] )
    {
      
        narr.push(arr[j]);
    }
        
    }
    console.log(narr);
}
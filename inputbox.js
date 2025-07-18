function addinput()
{ let cnt =  1;
 // let third = Number(cnt) ;
    const wrapper = document.querySelector("#wrapper");
        const new_input = document.createElement("input");
        new_input.type = "text";
         new_input.placeholder ='enter naem';
        new_input.id = "name" + cnt;
        
        wrapper.appendChild(new_input);
       //third +;
       
}
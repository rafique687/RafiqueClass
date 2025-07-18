 const textarea = document.getElementById('myTextarea');
    const output = document.getElementById('output');

    // Add keyup event listener
    textarea.addEventListener('keyup', function() {
      var rev;
      if(textarea.value.length >0)
      {
      for(let v = textarea.value.length; v >= 0 ;v--)
      { rev = rev + textarea.value[v];
       output.textContent = rev;
    
      }
    }
    });
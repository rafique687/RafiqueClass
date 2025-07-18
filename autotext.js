 const textarea = document.getElementById('myTextarea');
    const output = document.getElementById('output');

    // Add keyup event listener
    textarea.addEventListener('keyup', function() {
      output.textContent = textarea.value;
    });
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    form.reset(); 
  });
});

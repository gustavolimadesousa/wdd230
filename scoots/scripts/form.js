document.getElementById("rentalForm").addEventListener("submit", function(event) {
  event.preventDefault();
  

  const formData = new FormData(event.target);
  
  
  for (let entry of formData.entries()) {
    console.log(entry[0] + ": " + entry[1]);
  }
  
  
  alert("Form submitted!");
});
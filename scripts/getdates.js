let date =  new Date().getFullYear();
document.querySelector(".currentYear").innerHTML = date;

let lastModifiedDate = new Date(document.lastModified);
document.querySelector(".lastModified").innerHTML = lastModifiedDate;
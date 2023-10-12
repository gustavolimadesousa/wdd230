// get date

let date =  new Date().getFullYear();
document.querySelector(".currentYear").innerHTML = date;

let lastModifiedDate = new Date(document.lastModified);
document.querySelector(".lastModified").innerHTML = lastModifiedDate;


// hamburger menu

const mainnav = document.querySelector('.nav-list')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
})



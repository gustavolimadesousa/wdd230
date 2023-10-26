let date =  new Date().getFullYear();
document.querySelector(".currentYear").innerHTML = date;

let lastModifiedDate = new Date(document.lastModified);
document.querySelector(".lastModified").innerHTML = lastModifiedDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
})

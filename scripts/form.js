let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let result = document.querySelector('#error');


function checkPassword () {
    result.innerText = pass1.value == pass2.value ? 'Matching' : 'Passwords must match';
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);


function updateValue(val) {
  document.getElementById("ratingOutput").textContent = val;
}


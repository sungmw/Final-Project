

const ul = document.querySelector('.items');


ul.firstElementChild.textContent = 'Hello world';
ul.children[1].innerText = 'seongmw';
ul.children[2].innerHTML = '<h2>성민욱</h2>';


const btn = document.querySelector('.btn');


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);
  if(nameInput.value === '' || emailInput.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}



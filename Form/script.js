// When the form is submitted
// GATHER : get the #name input, input value
// and length of this input value
// LOGIC : check if the name length if above 4
// DISPLAY :
//     put a green border if valid
//     put a red border if wrong
//     */

// name.setAttribute('value', name);

// console.log(name.getElementById('name').value);
// const usernameValue = name.value;

// document
//     .querySelector('form')
//     .addEventListener('submit', function (event) {
//         // DEBUG LINE
//         event.preventDefault();
//         console.log('Submitted');
//         const name = document.querySelector('input#name');
//         const usernameValue = document.querySelector('#name').textContent;
//         console.log(usernameValue);
//         if(usernameValue.length > 4) {
//             name.style.borderColor = 'green';
//         } else {
//             name.style.borderColor = 'red';
//
//         }
//             this.innerHTML = 'Form Submitted';
//     });





const form = document.querySelector('form');
const nameText = document.querySelectorAll('#name');
 // add class
console.log(nameText[0].classList.toggle('valid'));
console.log(nameText[0].classList.toggle('wrong'));

/* add style*/
const validText = document.querySelector('.valid');


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const usernameValue = document.querySelectorAll([input type="text"]).value;
console.log(usernameValue)
const username = usernameValue.includes('');

username.forEach (nameText => {
    if (username.length > 4){
        document.querySelector('.valid').style.borderColor = ('green');
    } else {
        document.querySelector('.wrong').style.borderColor = ('red');
    }
});










// const usernameValue = document.querySelector('#name').value;
// const usernameValue = document.querySelector('#name').value;
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })
//
// if (usernameValue.length > 4) {
//     document.querySelector('#name').style.borderColor = ('red');
// } else {
//     document.querySelector('#name').style.borderColor = ('green');
// }



    // .querySelector('form')
//     .addEventListener('submit', function (event){
//     event.preventDefault();
//         console.log(event);
//         const usernameValue = document.querySelector('#name').value;
//         console.log(usernameValue);
//         // const name = document.querySelector('input#name');
//         if (usernameValue.length > 4) {
//             document.querySelector('[type="text"]').style.borderColor = 'green';
//         } else {
//             document.querySelector('[type="text"]').style.borderColor = 'red';
//         }
// })


/*
  MEDIUM : check for the phone tel to have exactly than 9 characters
*/

// const number = document.getElementById('number');
// function checkNumber() {
//     const numberValue = number.value.trim();
//     let message = ('');
//     if (numberValue === 9) {
//         e.preventDefault();
//         this.innerText = ('good ');
//     } else {
//         this.innerText = ('number must contain 9 digits ');
//     }
// }






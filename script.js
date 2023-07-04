const parentElement  = document.querySelector('body');
const divElement = document.createElement('div');
divElement.className = 'my-div';
divElement.textContent = 'Hello, world!';
divElement.style.backgroundColor = 'red';
divElement.style.width = '200px';
parentElement.appendChild(divElement);

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert('Hello, world!');
// });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
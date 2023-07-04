document.addEventListener('DOMContentLoaded', function() {

const parentElement  = document.querySelector('body');
const divElement = document.createElement('div');
divElement.className = 'my-div';
divElement.innerHTML = '<p>Hello, world!</p>';
divElement.style.backgroundColor = 'red';
divElement.style.width = '200px';
parentElement.appendChild(divElement);

});
const target = document.querySelector('#letters-wrapper');
const letters = 'AĄBCDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ'.split('');

letters.forEach((el) => {
  const div = document.createElement('p');
  div.classList.add('letters');
  div.innerText = el;
  target.appendChild(div);
});

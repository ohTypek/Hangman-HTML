const password_field = document.querySelector('#password');
const letters_btn = document.querySelectorAll('.letters');
const password = prompt('Proszę podać hasło: ').toLocaleLowerCase();
let wrongs = 0;

hide_password();

function hide_password() {
  let temp = '';

  password.split('').forEach((pw) => {
    if (pw == ' ') {
      temp += pw;
      return;
    }

    temp += '_';
  });

  password_field.innerHTML = temp;
}

function changeImg() {
  const img_el = document.querySelector('#img');
  img_el.src = `img/s${wrongs}.jpg`;
}

function show_letter(letter) {
  for (let i = 0; i <= password.length; i++) {
    if (password[i] == letter) {
      let temp = password_field.innerText;

      let first_part = temp.substr(0, i);
      let last_part = temp.substr(i + 1);

      password_field.innerText = first_part + password[i] + last_part;
    }
  }
}

function correct(el) {
  el.style.color = 'green';
  el.style.borderColor = 'green';
  console.log('poprawnie');
}

function incorrect(el) {
  changeImg();
  console.log('źle');
  el.style.color = 'red';
  el.style.borderColor = 'red';
}

function check_letter(value, el) {
  console.log(value);

  el.classList.add('guessed');
  // el.style.userSelect = 'none';

  if (password.includes(value)) {
    correct(el);
    show_letter(value);

    if (!password_field.innerHTML.includes('_')) alert('Brawo, wygrałeś!');
  } else {
    wrongs++;
    incorrect(el);

    if (wrongs > 8) {
      alert('Przegrałeś! Hasłem bylo: ' + password);
      password_field.innerText = password;
      return;
    }
  }
}

letters_btn.forEach((el) =>
  el.addEventListener('click', (e) => {
    e.preventDefault();

    if (!el.classList.contains('guessed'))
      check_letter(el.innerText.toLowerCase(), el);
  })
);

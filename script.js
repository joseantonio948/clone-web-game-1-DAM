alert('index.html loaded');
console.log('index.html loaded');
const containerjs = document.getElementById('header');
const header = document.createElement('header');
header.className = 'header';
const headertop = document.createElement('div');
headertop.className = 'container';
const divlogo = document.createElement('div');
divlogo.className = 'logo';
const linklogo = document.createElement('a');
linklogo.href = '#';
linklogo.textContent = 'GAME';
divlogo.appendchild('linklogo');
const divusers_actions = document.createElement('users_actions');
divusers_actions.className = 'users_actions';
const formbuscador = document.createElement('buscador');
formbuscador.className = 'buscador';
const buscadorinput = document.createElement('buscador input');
buscadorinput.className = 'buscador input';
buscadorinput.type = 'text';
buscadorinput.placeholder = 'buscar';
const botonbuscador = document.createElement('Button');
botonbuscador.type = 'button';
botonbuscador.textcontent = '🔍';
botonbuscador.addEventListener('click', () => {
  if (buscadorinput.value.trim() === '') {
    buscadorinput.focus();
  } else {
    alert('Buscando: ' + buscadorinput.value);
  }
});
formbuscador.appendchild(buscadorinput);
formbuscador.appendchild(botonbuscador);
const divactions = document.createElement('div');
divactions.className = 'users';
const linkusers = document.createElement('a');
linkusers.href = '#';
const linkaccount = document.createElement('a');
linkaccount.href = '#';
linkaccount.textContent = '👤Iniciar sesión';




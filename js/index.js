//Declarar variables para vincular los objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando Eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
    e.preventDefault();
    console.log('Se ejecuta evento de form');

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usarioVal == '' || passwordVal == ''){
        return;
    }

    console.log('El valor para user es: '+ usuarioVal);
    console.log('El valor para password es: '+ passwordVal);
}

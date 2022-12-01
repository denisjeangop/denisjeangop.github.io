// POPUP DE CONFIRMACION QUE LE ENVIAREMOS AL USUARIO.

let resultado = window.confirm('Estas seguro?');
if (resultado === true) {
    window.alert('Okay, si estas seguro.');
} else { 
    window.alert('Pareces indeciso');
}
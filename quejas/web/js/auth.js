const URLauth = 'http://localhost:80/quejas/config/auth.php'

const LOGOUT = 'http://localhost:80/quejas/config/logout.php'

function getCookie(value) {
  let token = value + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(token) == 0) {
      return c.substring(token.length, c.length);
    }
  }
  return "";
}

let cok = 'token'
let result = {token: getCookie(cok)}
let resultJSON = JSON.stringify(result) 
fetch(URLauth,{
  method: 'post',
  body: resultJSON
})
.then(x => x.json())
.then(res => {
  if(!res.auth){
    window.location.href = 'login.html'
  }
})

const $logout = document.getElementById('logout')
$logout.addEventListener('click', ()=>{
  event.preventDefault();
  fetch(LOGOUT)
  .then(x => x.json())
  .then(res =>{
    borrarCookies();
  })
// Llamar a la función para borrar las cookies
setTimeout(() => {
    window.location.href = 'login.html'
}, 0);

})

// Función para borrar todas las cookies
function borrarCookies() {
  var cookies = document.cookie.split(";"); // Obtener todas las cookies

  // Iterar sobre todas las cookies y borrarlas una por una
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var igualPos = cookie.indexOf("=");
    var nombre = igualPos > -1 ? cookie.substr(0, igualPos) : cookie;
    var dominio = location.host.substr(location.host.indexOf(".", 1));
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=" + dominio;
  }
}


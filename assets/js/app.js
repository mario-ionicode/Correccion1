const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // o '#name' si es un ID
const $b = document.querySelector('.blog'); // correcto si es un ID
const $l = document.querySelector('.location');

async function displayUser(username) { //Le faltaba la paabra reserbada async ya que es funcion asincrona si hay un response
  try {                                 // faltaba el try catch para el manejo de rrores
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); 
    console.log(data);
    $n.textContent = `${data.name}`; // los data no tenian backticks
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //faltaba signo de $
}

displayUser('stolinski'); //sobraba el catch ya que se usa dentro de la misma funcion que se invoca
function calcularMacros() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  var edad = document.getElementById('edad').value;
  var actividad = document.getElementById('actividad').value;

  var calorias = calcularCalorias(peso, altura, edad, actividad);
  var proteinas = calcularProteinas(peso);
  var carbohidratos = calcularCarbohidratos(calorias);
  var grasas = calcularGrasas(calorias);

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  resultado.innerHTML += 'Calorías: ' + calorias + ' kcal<br>';
  resultado.innerHTML += 'Proteínas: ' + proteinas + ' g<br>';
  resultado.innerHTML += 'Carbohidratos: ' + carbohidratos + ' g<br>';
  resultado.innerHTML += 'Grasas: ' + grasas + ' g<br>';
}

function calcularCalorias(peso, altura, edad, actividad) {
  var caloriasBase = 10 * peso + 6.25 * altura - 5 * edad;
  var calorias = caloriasBase * actividad;
  return calorias;
}

function calcularProteinas(peso) {
  var proteinas = peso * 2.2;
  return proteinas;
}

function calcularCarbohidratos(calorias) {
  var porcentajeCarbohidratos = 50; 
  var carbohidratos = (calorias * porcentajeCarbohidratos) / 100;
  return carbohidratos;
}

function calcularGrasas(calorias) {
  var porcentajeGrasas = 30;
  var grasas = (calorias * porcentajeGrasas) / 100;
  return grasas;
}




const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide.querySelectorAll('img');

carouselImages.forEach(image => {
  const clone = image.cloneNode(true);
  carouselSlide.appendChild(clone);
});





// Definir las comidas saludables disponibles
const comidasSaludables = [
  'Ensalada de pollo a la parrilla con verduras frescas',
  'Salmón al horno con brócoli y quinoa',
  'Tacos de pavo con tortillas de trigo integral y guacamole',
  'Bowl de quinoa con aguacate, tomate y huevo',
  'Burger de frijoles negros con ensalada de col',
  'Sopa de lentejas con vegetales mixtos',
  'Wrap de pollo con espinacas y hummus',
  'Bowl de frutas con yogur griego y nueces',
  'Batido verde con espinacas, plátano y leche de almendras'
];

// Obtener elementos del DOM
const generarBtn = document.getElementById('generar-btn');
const comidaContainer = document.getElementById('comida-container');

// Generar sugerencia de comida al hacer clic en el botón
generarBtn.addEventListener('click', generarComidaSaludable);

function generarComidaSaludable() {
  // Obtener una comida saludable aleatoria de la lista
  const comidaAleatoria = comidasSaludables[Math.floor(Math.random() * comidasSaludables.length)];

  // Crear elemento HTML para mostrar la sugerencia de comida
  const comidaDiv = document.createElement('div');
  comidaDiv.innerHTML = `<h3>Sugerencia de Comida Saludable:</h3><p>${comidaAleatoria}</p>`;

  // Limpiar el contenedor de la sugerencia anterior (si existe)
  comidaContainer.innerHTML = '';

  // Agregar elemento al contenedor de la sugerencia de comida
  comidaContainer.appendChild(comidaDiv);
   
}

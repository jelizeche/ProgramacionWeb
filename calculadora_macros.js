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

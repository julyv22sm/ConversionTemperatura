// Obtener referencia al input
const tempInput = document.getElementById('temp-input');
let resultado = document.getElementById('resultado');

// Función para convertir
function convertirTemperatura() {

  // Obtener valor del input 
  const tempCelsius = tempInput.value;
  
  // Convertir a número
  const celsiusNum = Number(tempCelsius);

  // Convertir a Fahrenheit
  const fahrenheit = (celsiusNum * 1.8) + 32;

  // Convertir a Kelvin
  const kelvin = celsiusNum + 273.15;

  resultado.innerHTML = celsiusNum + '°C = ' + fahrenheit + '°F y ' + kelvin + 'K';

}
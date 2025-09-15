function calcular() {
  const focos = parseInt(document.getElementById('focos').value);
  const horas = parseFloat(document.getElementById('horas').value);
  const potencia = parseFloat(document.getElementById('potencia').value);

  const resultado = document.getElementById('resultado');
  const tips = document.getElementById('tips');

  if (isNaN(focos) || isNaN(horas) || isNaN(potencia)) {
    resultado.innerText = "Por favor, llena todos los campos.";
    tips.innerHTML = "";
    return;
  }

  // Cálculo de consumo diario en kWh
  let consumoDiario = (focos * potencia * horas) / 1000; 
  let consumoMensual = consumoDiario * 30;

  resultado.innerText = `Consumo estimado: ${consumoMensual.toFixed(2)} kWh al mes.`;

  if (consumoMensual < 30) {
    tips.innerHTML = "<div class='tip'>✅ ¡Buen trabajo! Tu consumo es bajo. Mantén el hábito.</div>";
  } else if (consumoMensual < 100) {
    tips.innerHTML = "<div class='tip'>💡 Consejo: Cambia tus focos a LED y apágalos cuando no los uses.</div>";
  } else {
    tips.innerHTML = "<div class='tip'>⚠️ Estás consumiendo bastante energía. Considera usar temporizadores, desconectar aparatos y optimizar el uso de electrodomésticos.</div>";
  }
}

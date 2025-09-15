function calcular() {
  let totalConsumo = 0;

  // Lista de aparatos con sus campos
  const aparatos = [
    { cantidad: "focos", potencia: "focosPotencia", horas: "focosHoras" },
    { cantidad: "tvs", potencia: "tvsPotencia", horas: "tvsHoras" },
    { cantidad: "refri", potencia: "refriPotencia", horas: "refriHoras" },
    { cantidad: "micro", potencia: "microPotencia", horas: "microHoras" },
  ];

  aparatos.forEach(a => {
    let cantidad = parseFloat(document.getElementById(a.cantidad).value) || 0;
    let potencia = parseFloat(document.getElementById(a.potencia).value) || 0;
    let horas = parseFloat(document.getElementById(a.horas).value) || 0;

    let consumoDiario = (cantidad * potencia * horas) / 1000;
    totalConsumo += consumoDiario * 30; // mensual
  });

  const resultado = document.getElementById('resultado');
  const tips = document.getElementById('tips');

  if (totalConsumo === 0) {
    resultado.innerText = "Por favor, ingresa al menos un aparato con valores.";
    tips.innerHTML = "";
    return;
  }

  resultado.innerText = `Consumo total estimado: ${totalConsumo.toFixed(2)} kWh al mes.`;

  if (totalConsumo < 100) {
    tips.innerHTML = "<div class='tip'>✅ Excelente, tu consumo es bajo. ¡Sigue así!</div>";
  } else if (totalConsumo < 300) {
    tips.innerHTML = "<div class='tip'>💡 Consejo: Apaga aparatos que no uses, cambia a focos LED y evita dejar dispositivos en standby.</div>";
  } else {
    tips.innerHTML = "<div class='tip'>⚠️ Alto consumo. Considera usar temporizadores, desconectar aparatos y revisar eficiencia energética de tus electrodomésticos.</div>";
  }
}

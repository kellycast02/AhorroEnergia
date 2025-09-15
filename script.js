// Mostrar gráfica inicial con consumos promedio
const ctxPromedios = document.getElementById('graficaPromedios').getContext('2d');
new Chart(ctxPromedios, {
  type: 'bar',
  data: {
    labels: ['Televisor', 'Refrigerador', 'Microondas', 'Clima'],
    datasets: [{
      label: 'Consumo Promedio (W)',
      data: [100, 150, 1200, 1000],
      backgroundColor: ['#66bb6a', '#43a047', '#2e7d32', '#1b5e20']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

function calcularConsumo() {
  const tv = Number(document.getElementById('tv').value) || 0;
  const refri = Number(document.getElementById('refri').value) || 0;
  const micro = Number(document.getElementById('micro').value) || 0;
  const clima = Number(document.getElementById('clima').value) || 0;
  const horas = Number(document.getElementById('horas').value) || 0;

  const totalWatts = tv + refri + micro + clima;
  const totalKwh = (totalWatts * horas) / 1000;

  document.getElementById('resultado').textContent =
    `Tu consumo estimado es de ${totalKwh.toFixed(2)} kWh por día.`;

  mostrarGraficaResultados(totalKwh);
  mostrarConsejos(totalKwh);
}

function mostrarGraficaResultados(totalKwh) {
  const ctxResultados = document.getElementById('graficaResultados').getContext('2d');
  new Chart(ctxResultados, {
    type: 'doughnut',
    data: {
      labels: ['Consumo'],
      datasets: [{
        label: 'kWh',
        data: [totalKwh],
        backgroundColor: totalKwh > 10 ? '#c62828' : totalKwh > 5 ? '#f9a825' : '#2e7d32'
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
}

function mostrarConsejos(totalKwh) {
  const consejosDiv = document.getElementById('consejos');
  if (totalKwh > 10) {
    consejosDiv.innerHTML = "<strong>⚠️ Alto consumo:</strong> Apaga aparatos que no uses y ajusta el aire acondicionado a 24°C.";
  } else if (totalKwh > 5) {
    consejosDiv.innerHTML = "<strong>ℹ️ Consumo moderado:</strong> Considera cambiar focos por LED y desconectar aparatos cuando no los uses.";
  } else {
    consejosDiv.innerHTML = "<strong>✅ Buen consumo:</strong> ¡Sigue así! Mantén hábitos de ahorro de energía.";
  }
}

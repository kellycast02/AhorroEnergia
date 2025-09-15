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
    maintainAspectRatio: false, // 👈 Hace que la gráfica se adapte mejor
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { size: 12 } } },
      y: { ticks: { font: { size: 12 } } }
    }
  }
});

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
    options: {
      responsive: true,
      maintainAspectRatio: false, // 👈 También en la gráfica de resultados
      plugins: { legend: { display: false } }
    }
  });
}

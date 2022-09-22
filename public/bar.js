const labels = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [90, 80, 70, 60],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
    ],
    borderWidth: 1.5,
    maxBarThickness: 80,
    barPercentage: 1.0,
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    scales: {
       y: {
        suggestedMin: 0,
        suggestedMax: 100,
         beginAtZero: true
       },
    }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
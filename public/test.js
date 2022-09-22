// const Utils = ChartUtils.init();

const labels = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
];

const data = {
  labels: labels,
  datasets: [{
    label: '',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [100, 80, 70, 50],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
var ctx = document.getElementById("languagesChart").getContext('2d');
var languagesChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: [
        'Python',
        'JSX',
        'Javascript',
        'Dart',
        'HTML',
        'Java',
        'NodeJS',
        'C#'
      ],
      datasets: [{
            label: 'Languages',
            data: [4,8, 9, 3, 6, 4, 5, 3],
            backgroundColor: [
              'rgba(100, 10, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(64, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(100, 10, 132, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(64, 159, 64, 1)',
            ],
            borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
  }
});
var ctx = document.getElementById("toolsChart").getContext('2d');
var toolsChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: [
        'Git',
        'Npm',
        'Bitbucket',
        'Github',
        'JIRA',
        'Postman',
        'Slack'
      ],
      datasets: [{
            label: 'Others',
            data: [8, 8, 10, 12, 9, 6, 10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(40, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(40, 159, 64, 1)',
            ],
            borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: true,
    //   scales: {
    //     yAxes: [{
    //         ticks: {
    //             beginAtZero:true
    //         }
    //     }]
    // }
  }
});
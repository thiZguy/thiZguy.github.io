var ctx = document.getElementById("thirdChart").getContext('2d');
var thirdChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
          'React',
          'Angular',
          'Flutter',
          'Firebase',
          'Mailgun',
          'Heroku',
          'Meteor'
      ],
      datasets: [{
            label: 'Frameworks & Tools',
            data: [8, 9, 4, 7, 6, 4, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(20, 70, 90, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(20, 70, 90, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
    //     scales: {
    //       yAxes: [{
    //           ticks: {
    //               beginAtZero:true
    //           }
    //       }]
    //   }
    }
});
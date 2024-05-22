document.addEventListener("DOMContentLoaded", function() {
    const stats = {
      
        checksPassed: 455,
        checksFailed: 51,
    };


    document.getElementById('checks-passed').textContent = stats.checksPassed;
    document.getElementById('checks-failed').textContent = stats.checksFailed;


    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['checks-passed', 'checks-failed'],
            datasets: [{
                label: 'Quantity',
                data: [stats.checksPassed, stats.checksFailed],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
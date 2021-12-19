const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (){
    this.classList.toggle('is-active');

});


const ctx = document.getElementById('myChart').getContext("2d");


//gradient fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58,123,213,1)');
gradient.addColorStop(1, 'rgba(0,210,255,0.3)');







const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    labels,
    datasets: [
        {
             data: [650, 800, 500, 175, 990, 870, 640],
            label: "Weekly Expenditure",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            pointBackgroundColor: "#8c38ff",
            tension: 0.2





    }
]
};

const config = {

    type: 'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
    
        scales: {
            y: {
                ticks: {

                    callback: function (value){

                        return 'Rs' + value 
                    }
                }
            }
        }
    },

};

const myChart = new Chart(ctx,config);





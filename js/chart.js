//this dataset for testing.
let dataset = [-10, -5, 20, 12, 23, -6, 1, 0, -10, -5, 20, 12, 23, -6, 1, 0, -10, -5, 20, 12, 23, -6, 1, 0];
document.getElementById('highest-temp').innerHTML = Math.max.apply(Math, dataset);
document.getElementById('lowest-temp').innerHTML = Math.min.apply(Math, dataset);

var ctx = document.getElementById('my-chart').getContext('2d');
ctx.canvas.style.height = '240px';
ctx.canvas.style.width = '600px';
ctx.canvas.style.padding = '10px';
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        datasets: [{
            data: dataset,
            borderWidth: 2,
            fill: false,
            borderColor: "#71b8a1",
            lineTension: 0,

        }]
    },
    options: {
        onResize: function(chart, size) {
            let widthOfChart = chart.width;
            console.log(widthOfChart);
            console.log(chart.data.labels.length);
            if (widthOfChart >= 1000) {
                chart.options.scales.xAxes[0].ticks.maxTicksLimit = 24;
            } else
            if (widthOfChart >= 900) {
                chart.options.scales.xAxes[0].ticks.maxTicksLimit = 20;
            } else
            if (widthOfChart >= 700) {
                chart.options.scales.xAxes[0].ticks.maxTicksLimit = 12;
            } else {
                chart.options.scales.xAxes[0].ticks.maxTicksLimit = 7;
            }
        },
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    fontSize: 12,
                    fontColor: '#000',
                    padding: 15,
                    autoSkip: true,
                    maxTicksLimit: 10,
                    maxRotation: 0,
                    minRotation: 0,
                }

            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    max: 30,
                    min: -10,
                    stepSize: 10,
                    padding: 20,
                    fontSize: 20,
                    callback: function(label, index, labels) {
                        switch (label) {
                            case -10:
                                return '-10 °C';
                            case 0:
                                return '0 °C';
                            case 10:
                                return '10 °C';
                            case 20:
                                return '20 °C';
                            case 30:
                                return '30 °C';
                        }
                    }
                }
            }],

        },
        elements: {
            point: {
                radius: 0
            }
        },
        legend: {
            labels: {
                defaultFontFamily: " 'Lora', serif "
            },
            display: false,
            onClick: null
        },

    },
});

function today() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [1, 2, 3, 4, 5, 9, 6, -6, 7, 8, 8, 0]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "Today"
}

function tomorrow() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [6, -6, 7, 8, 8, 0, 1, 2, 3, 4, 5, 9]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "Tomorrow"

}

function after2Days() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [8, 0, 1, 2, 3, 4, 5, 9, 6, -6, 7, 8]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "After 2 days"

}

function after3Days() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [4, 5, 9, 6, -6, 7, 8, 8, 0, 1, 2, 3]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "After 3 days"
}

function after4Days() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [8, 0, 1, 2, 3, 4, 5, 9, 6, -6, 7, 8]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "After 4 days"
}

function after5Days() {
    //add here the array of tempreture for this day from API.
    //note : the size of array should be 24 elements from 12 AM to 11 PM.
    myChart.data.datasets[0].data = [9, 6, -6, 7, 8, 8, 0, 1, 2, 3, 4, 5]; //this is a static array just form testing.
    myChart.update();
    document.getElementById("dropdownMenuLink").innerHTML = "After 5 days"
}
type = ['primary', 'info', 'success', 'warning', 'danger'];
var CanadianProvinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];
let parkData = ['48', '22', '94', '132', '212', '153', '71', '37', '76', ' 151' ]
let canadaCases = [1584, 503, 214, 168, 501, 1086, 1894, 171, 5890, 547];

demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function () {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors


    var myChart = new Chart(ctxGreen, {
        type: 'bar',
        responsive: true,
        legend: {
          display: false
        },
        data: {
          labels: CanadianProvinces,
          datasets: [{
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#32CD32',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: parkData,
          }],
        },
        options: gradientBarChartConfiguration
      });



    var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];


    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var chart_data = [1, 13, 1013, 2112, 2573, 3000, 4000, 5000, 6000, 6000, 7000, 8000 ];
    var recovery = [0, 0, 507, 1322, 2170, 2600, 3000, 3500, 4000, 4500, 5000, 5500]
    var death = [0, 1 , 24, 111,164, 184, 200, 220, 244, 260, 290, 310 ];
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Covid-19 cases",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_data,
        },
        {
          label: "Recovery",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#FFFF99',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '	#FFFF99',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#FFFF99',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: recovery,
        },
        {
          label: "Death",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#FF6666',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '	#FF6666',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#FF6666',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: death,
        }
      ],
        
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);

    function calc(data, recovery, death){
      let aveData = 0;
      let aveRecov= 0;
      let aveDeath = 0;
      let len = 4;
 
      for(let i = 0; i <= len; i++){
        aveData += data[i];
        aveRecov += recovery[i];
        aveDeath += death[i];
      }
      aveData /= 5;
      aveRecov /= 5;
      aveDeath /= 5;

      for(let i = len; i < 12; i++){

        data[i] = data[i-1] +  aveData;
        recovery[i] = recovery[i-1] +  aveRecov;
        death[i] = death[i-1] + aveDeath;

      }
    }

    function calcDeath(death){
      let aveDeath = 0;
      let len = 4;
 
      for(let i = 0; i <= len; i++){
        aveDeath += death[i];
      }
      aveDeath /= 5;

      for(let i = len; i < 12; i++){
        death[i] = death[i-1] + aveDeath;

      }
    }
    $("#0").click(function() {
      let loc = document.getElementById('locationName');
      loc.innerHTML = 'Alberta';
      var chart_data = [0, 1, 754, 5312, 6992 ];
      var recovery = [0, 0, 120, 2161,6245]
      var death = [0, 1 , 24, 111,164];
      calc(chart_data, recovery, death)
      console.log(chart_data);
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.datasets[1].data = recovery;
      data.datasets[2].data = death;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#1").click(function() {
      let loc = document.getElementById('locationName');
      loc.innerHTML = 'British Columbia';
      var chart_data = [1, 13, 1013, 2112, 2573, 3000, 4000, 5000, 6000, 6000, 7000, 8000 ];
      var recovery = [0, 0, 507, 1322, 2170, 2600, 3000, 3500, 4000, 4500, 5000, 5500]
      var death = [0, 1 , 24, 111,164, 184, 200, 220, 244, 260, 290, 310 ];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.datasets[1].data = recovery;
      data.datasets[2].data = death;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#2").click(function() {
      let loc = document.getElementById('locationName');
      loc.innerHTML = 'Quebec';
      var chart_data = [0, 0, 4162, 27538, 51059, 67612, 78881, 90148, 105734, 113489, 129586, 138745];
      var recovery = [0, 0, 135, 6299, 11458, 15056, 18500, 22043, 25900, 29000, 32000, 35000]
      var death = [0, 1 , 31, 1859,4641]
      calcDeath(death);
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.datasets[1].data = recovery;
      data.datasets[2].data = death;
      data.labels = chart_labels;
      myChartData.update();
    });


    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: CanadianProvinces,

        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: canadaCases,
        }]
      },
      options: gradientBarChartConfiguration
    });

  },


};
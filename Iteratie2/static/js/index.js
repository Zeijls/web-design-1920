const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: "line",
  data: (data = {
    labels: ["2000", "2003", "2006", "2009", "2012", "2015"],
    datasets: [
      {
        label: "Hernieuwbare energie",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 4,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [52, 59, 93, 130, 139, 137],
        onClick: alertBox,
      },

      {
        label: "Kernenergie",
        fill: true,
        lineTension: 0.2,
        backgroundColor: "rgba(75,75,192,0.4)",
        borderColor: "rgba(75,72,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,72,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,72,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [41, 41, 36, 41, 39, 39],
      },
    ],
  }),
  options: {
    responsive: true,
    legend: {
      // onClick: alertBox,
      labels: {
        fontColor: "#fff",
        fontSize: 20,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 30,
          },
          // scaleFontSize: 40,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 30,
          },
          // scaleFontSize: 40,
        },
      ],
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          speed: 10,
          threshold: 10,
        },
        zoom: {
          enabled: true,
          mode: "y",
        },
      },
    },
  },
});

function alertBox() {
  console.log("Hello chart js click");
}

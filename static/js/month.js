const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Teruggeleverde stroom (KwH)",
        fill: true,
        data: [1.8, 2.3, 10.8, 1.6, 8.9, 9.1, 5.4],
        borderColor: "rgba(83,182,136,1)",
        backgroundColor: "rgba(83,182,136,0.7)",

        type: "line",
      },
      {
        label: "Opwek Zon (KwH)",
        data: [3.2, 4.2, 13.4, 4.9, 11.3, 12, 7.8],
        backgroundColor: "rgba(252,192,10,0.8)",
      },
    ],
    labels: ["1", "2", "3", "4", "5", "6"],
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        fontColor: "#fff",
        fontSize: 15,
      },
    },
    scales: {
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 15,
            fontColor: "#fff",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 15,
            fontColor: "#fff",
          },
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

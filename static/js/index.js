const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Teruggeleverde stroom (KwH)",
        fill: true,
        data: [2.1, 7.7, 9.9, 1.2, 2.5, 6, 5.6],
        borderColor: "rgba(83,182,136,1)",
        backgroundColor: "rgba(83,182,136,0.7)",

        // Combi bar line graph
        type: "line",
      },
      {
        label: "Opwek Zon (KwH)",
        data: [5.8, 10.1, 12.3, 3.4, 5.4, 10.3, 8.1],
        backgroundColor: "rgba(252,192,10,0.8)",
      },
    ],
    labels: ["Ma", "Di", "Wo", "Do", "Vri", "Za", "Zo"],
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

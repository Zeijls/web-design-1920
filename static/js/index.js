const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Teruggeleverde stroom (KwH)",
        fill: true,
        data: [2.1, 7.7, 0.8, 1.2, 2.5, 6, 5.6],
        // borderColor: "#fff",
        borderColor: "rgba(83,182,136,1)",
        backgroundColor: "rgba(83,182,136,0.7)",

        // Changes this dataset to become a line
        type: "line",
      },
      {
        label: "Opwek Zon (KwH)",
        data: [5.8, 10.1, 2.3, 3.4, 5.4, 10.3, 8.1],
        // backgroundColor: "#fff",
        backgroundColor: "rgba(252,192,10,0.8)",
      },
    ],
    labels: ["Ma", "Di", "Wo", "Do", "Vri", "Za", "Zo"],
  },
  options: {
    responsive: true,
    legend: {
      // onClick: alertBox,
      position: "bottom",
      align: "start",
      labels: {
        fontColor: "#fff",
        // fontSize: 20,
      },
    },
    scales: {
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          // type: "linear",
          // min: 0,
          // max: 20,
          // autoSkip: false,
          ticks: {
            // beginAtZero: true,
            fontSize: 10,
            fontColor: "#fff",
            // maxTicksLimit: 1,
          },
          // gridLines: {
          //   color: "#FFF",
          // },
          // scaleFontSize: 40,
        },
      ],
      xAxes: [
        {
          // autoSkip: false,
          ticks: {
            beginAtZero: true,
            // min: 0,
            // max: 20,
            // stepSize: 1,
            // maxTicksLimit: 1,
            fontSize: 10,
            fontColor: "#fff",
          },
          // gridLines: {
          //   color: "#FFF",
          // },
          // type: "linear",
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

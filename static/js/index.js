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
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.7)",

        // Changes this dataset to become a line
        type: "line",
      },
      {
        label: "Opwek Zon (KwH)",
        data: [5.8, 10.1, 2.3, 3.4, 5.4, 10.3, 8.1],
        // backgroundColor: "#fff",
        backgroundColor: "rgba(236,247,92,0.8)",
      },
    ],
    labels: [
      "Maandag",
      "Dinsdag",
      "Woensdag",
      "Donderdag",
      "Vrijdag",
      "Zaterdag",
      "Zondag",
    ],
  },
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
            fontSize: 20,
            fontColor: "#fff",
          },
          // scaleFontSize: 40,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 20,
            fontColor: "#fff",
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

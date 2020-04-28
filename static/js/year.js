const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Teruggeleverde stroom (KwH)",
        fill: true,
        data: [162, 89, 223, 249, 289, 419, 460, 380, 184, 109, 79, 32],
        borderColor: "rgba(83,182,136,1)",
        backgroundColor: "rgba(83,182,136,0.7)",
        type: "line",
      },
      {
        label: "Opwek Zon (KwH)",
        data: [294, 184, 299, 322, 365, 492, 528, 454, 266, 186, 145, 98],
        backgroundColor: "rgba(252,192,10,0.8)",
      },
    ],
    labels: [
      "Jan",
      "Feb",
      "Maa",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
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

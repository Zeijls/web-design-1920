var ctx = document.getElementById("myChart");
var mixedChart = new Chart(ctx, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Bar Dataset",
        data: [10, 20, 30, 40],
        // this dataset is drawn below
        order: 1,
      },
      {
        label: "Line Dataset",
        data: [10, 10, 10, 10],
        type: "line",
        // this dataset is drawn on top
        order: 2,
      },
    ],
    labels: ["January", "February", "March", "April"],
  },
  options: options,
  // plugins: {
  //   zoom: {
  //     pan: {
  //       enabled: true,
  //       mode: "x",
  //       speed: 10,
  //       threshold: 10,
  //     },
  //     zoom: {
  //       enabled: true,
  //       mode: "y",
  //     },
  //   },
  // },
});

// Bar chart //
// constructor that instantiates the chart instance
new Chart(document.getElementById("bar-chart"), {
  // specifies chart type -- in this case, bar
  type: 'bar',

  // x & y data input names, colors, values, labels...
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [2478, 3767, 734, 784, 433]
      }
    ]
  },
  // styling and visual options ( title, display toggles, )
  options: {
    legend: {
      display: false,
      // TODO: figure out why this "labels" section from official docs isn't working
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'red',
        defaultFontSize: 6
      }
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(100,100,132,0.4)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: true
        }
      }]
    }
  }

});

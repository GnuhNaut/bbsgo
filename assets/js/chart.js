var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    innerRadius: am5.p50,
  tooltip: am5.Tooltip.new(root, {})
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    alignLabels: false
  })
);
series.labels.template.setAll({
    textType: "circular",
    templateField: "dummyLabelSettings"
  });
  
series.ticks.template.set("forceHidden", true);
  
var sliceTemplate0 = series.slices.template;
    sliceTemplate0.setAll({
    draggable: true,
    templateField: "settings",
    cornerRadius: 5
});

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([{
  category: "Burn",
  value: 40
}, {
  category: "Presale",
  value: 33.68
}, {
  category: "Liquidity",
  value: 16.32
}, {
  category: "CEX Listing",
  value: 10
}]);
var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    marginTop: 15,
    marginBottom: 15,
    labels: {
        labelText: "Series: [bold {color}]{name}[/]"
    }
}));
legend.data.setAll(series.dataItems);
series.appear(1000, 100);

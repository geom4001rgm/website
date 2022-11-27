
// append the svg object to the body of the page
var svg2 = d3.select("#age_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/geom4001rgm/website/main/a3/csv/farmage.csv").then(function(data) {
  console.log(data)
  svg2.append("text")
          .attr("x", (width / 2))
          .attr("y", 0 - (margin.top / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "16px")
          .style("text-decoration", "underline")
          .text("Number of Farm Operators by Age Group, 2001-2021");

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.Year)})
  console.log(groups)
  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])

  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0 ]);
  svg2.append("g")
    .call(d3.axisLeft(y));

  var colors = ['#e41a1c','#4daf4a','#377eb8']

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(colors)
  console.log(subgroups)

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack()
    .keys(subgroups)
    (data)
  console.log(stackedData)

  // Show the bars
  svg2.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Year); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())

      // Handmade legend
      svg2.append("circle").attr("cx",320).attr("cy",0).attr("r", 6).style("fill", colors[0])
      svg2.append("circle").attr("cx",320).attr("cy",30).attr("r", 6).style("fill", colors[1])
      svg2.append("circle").attr("cx",320).attr("cy",60).attr("r", 6).style("fill", colors[2])
      svg2.append("text").attr("x", 340).attr("y", 0).text(subgroups[0]).style("font-size", "15px").attr("alignment-baseline","middle")
      svg2.append("text").attr("x", 340).attr("y", 30).text(subgroups[1]).style("font-size", "15px").attr("alignment-baseline","middle")
      svg2.append("text").attr("x", 340).attr("y", 60).text(subgroups[2]).style("font-size", "15px").attr("alignment-baseline","middle")

})


var svg3 = d3.select("#succession_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("https://raw.githubusercontent.com/geom4001rgm/website/main/a3/csv/farmsucc.csv").then( function(data) {
console.log(data)
  svg3.append("text")
          .attr("x", (width / 2))
          .attr("y", 0 - (margin.top / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "16px")
          .style("text-decoration", "underline")
          .text("Succession Plans, 2021");

var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(d => d.Type))
  .padding(0.2);
svg3.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-5,0)rotate(-45)")
    .style("text-anchor", "end");

var y = d3.scaleLinear()
  .domain([0, 100000])
  .range([ height, 0]);

svg3.append("g")
  .call(d3.axisLeft(y));

svg3.selectAll("mybar")
  .data(data)
  .join("rect")
    .attr("x", d => x(d.Type))
    .attr("y", d => y(d.Number))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.Number))
    .attr("fill", "#69b3a2")

  console.log(data[0].Number)

svg3.append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(data)
      .enter().append("g")
        .attr("fill", "#69b3a2")
          .attr("x", function(d) { return x(d.data.Type); })
          .attr("y", function(d) { return y(d.Number); })
          .attr("height", function(d) { return height - y(d.Number); })
          .attr("width",x.bandwidth())
})

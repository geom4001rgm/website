const margin = {top: 50, right: 30, bottom: 120, left: 60},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const svg = d3.select("#demographic_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("https://raw.githubusercontent.com/geom4001rgm/website/main/a3/csv/farmdata.csv").then( function(data) {
  svg.append("text")
          .attr("x", (width / 2))
          .attr("y", 0 - (margin.top / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "16px")
          .style("text-decoration", "underline")
          .text("Characteristics of Farm Operators in Canada, 2021");

var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(d => d.Rule))
  .padding(0.2);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-5,0)rotate(-45)")
    .style("text-anchor", "end");

var y = d3.scaleLinear()
  .domain([0, 280000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

svg.selectAll("mybar")
  .data(data)
  .join("rect")
    .attr("x", d => x(d.Rule))
    .attr("y", d => y(d.Value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.Value))
    .attr("fill", "#69b3a2")

})

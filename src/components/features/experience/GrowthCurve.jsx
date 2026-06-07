import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import "./GrowthCurve.css";

const growthData = [
  {
    stage: "10th",
    value: 2,
    title: "Secondary",
    year: "2017–18",
    desc: "Foundation built",
  },
  {
    stage: "Inter",
    value: 4,
    title: "Intermediate",
    year: "2018–20",
    desc: "Consistency improved",
  },
  {
    stage: "B.Sc",
    value: 3.5,
    title: "Degree",
    year: "2020–23",
    desc: "Balanced learning",
  },
  {
    stage: "Teach",
    value: 6,
    title: "Teaching",
    year: "2021–23",
    desc: "Communication skills",
  },
  {
    stage: "MCA I",
    value: 8,
    title: "MCA",
    year: "2023–24",
    desc: "Work + Study",
  },
  {
    stage: "MCA II",
    value: 9,
    title: "Final Year",
    year: "2024–25",
    desc: "Advanced projects",
  },
  {
    stage: "FS Java",
    value: 10,
    title: "Industry",
    year: "2025",
    desc: "Full stack ready",
  },
];

export const GrowthCurve = () => {
  const chartRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: null,
  });

  const drawChart = useCallback(() => {
    if (!chartRef.current || !wrapperRef.current) return;

    d3.select(chartRef.current).selectAll("*").remove();

    const width = wrapperRef.current.offsetWidth;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    /* GRADIENT */
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", "growth_area_gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#3b82f6")
      .attr("stop-opacity", 0.4);
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#3b82f6")
      .attr("stop-opacity", 0);

    /* SCALES */
    const x = d3
      .scalePoint()
      .domain(growthData.map((d) => d.stage))
      .range([0, innerWidth])
      .padding(0.5);

    const y = d3.scaleLinear().domain([0, 10]).range([innerHeight, 0]);

    /* AXES */
    chart
      .append("g")
      .attr("class", "growth_axis")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .call((g) => {
        g.selectAll("path, line").attr("stroke", "#333");
        g.selectAll("text").attr("fill", "#777").style("font-size", "12px");
      });

    chart
      .append("g")
      .attr("class", "growth_axis")
      .call(d3.axisLeft(y))
      .call((g) => {
        g.selectAll("path, line").attr("stroke", "#333");
        g.selectAll("text").attr("fill", "#777").style("font-size", "12px");
      });

    /* AREA */
    const area = d3
      .area()
      .x((d) => x(d.stage))
      .y0(innerHeight)
      .y1((d) => y(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5));

    chart
      .append("path")
      .datum(growthData)
      .attr("fill", "url(#growth_area_gradient)")
      .attr("d", area);

    /* LINE */
    const line = d3
      .line()
      .x((d) => x(d.stage))
      .y((d) => y(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5));

    chart
      .append("path")
      .datum(growthData)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 3)
      .attr("d", line);

    /* DOTS */
    chart
      .selectAll(".growth_dot")
      .data(growthData)
      .enter()
      .append("circle")
      .attr("class", "growth_dot")
      .attr("cx", (d) => x(d.stage))
      .attr("cy", (d) => y(d.value))
      .attr("r", 6)
      .attr("fill", "#ffffff")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseenter", (event, d) => {
        d3.select(event.currentTarget).attr("fill", "#3b82f6");
        setTooltip({
          visible: true,
          x: event.clientX,
          y: event.clientY,
          data: d,
        });
      })
      .on("mousemove", (event) => {
        setTooltip((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
      })
      .on("mouseleave", (event) => {
        d3.select(event.currentTarget).attr("fill", "#ffffff");
        setTooltip((prev) => ({ ...prev, visible: false }));
      });
  }, []);

  useEffect(() => {
    drawChart();
    window.addEventListener("resize", drawChart);
    return () => window.removeEventListener("resize", drawChart);
  }, [drawChart]);

  return (
    <>
      <section className="growth_section" id="growth_section">
        <div className="growth_chart_wrapper" ref={wrapperRef}>
          <div className="growth_title">
            <span className="growth_title_text">My Education</span>
          </div>
          <p className="growth_subtitle">
            Progress isn't linear — commitment is.
          </p>
          <div ref={chartRef} className="growth_chart" />
        </div>
      </section>

      {tooltip.visible && tooltip.data && (
        <div
          className="growth_tooltip"
          style={{ left: tooltip.x + 15, top: tooltip.y - 20 }}
        >
          <span>{tooltip.data.stage}</span>
          <br />
          {tooltip.data.title}
          <br />
          {tooltip.data.year}
          <br />
          {tooltip.data.desc}
        </div>
      )}
    </>
  );
};

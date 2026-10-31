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
    year: "2021–25",
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

/* NEW: finds the point on an SVG path whose x equals tx (used for the glowing "pen" head) */
const pointAtX = (node, tx) => {
  let lo = 0;
  let hi = node.getTotalLength();
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (node.getPointAtLength(mid).x < tx) lo = mid;
    else hi = mid;
  }
  return node.getPointAtLength(hi);
};

export const GrowthCurve = () => {
  const chartRef = useRef(null);
  const wrapperRef = useRef(null);
  const hasPlayed = useRef(false); // NEW: has the intro animation already run?
  const playRef = useRef(null); // NEW: holds the latest play() function from drawChart
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

    /* NEW: horizontal reveal mask (clip) – grows left → right */
    const clipRect = defs
      .append("clipPath")
      .attr("id", "growth_clip")
      .append("rect")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 10)
      .attr("height", innerHeight + 20);

    /* NEW: neon glow filter for the line */
    const glow = defs
      .append("filter")
      .attr("id", "growth_glow")
      .attr("x", "-20%")
      .attr("y", "-20%")
      .attr("width", "140%")
      .attr("height", "140%");
    glow.append("feGaussianBlur").attr("stdDeviation", 4).attr("result", "blur");
    const merge = glow.append("feMerge");
    merge.append("feMergeNode").attr("in", "blur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    /* SCALES */
    const x = d3
      .scalePoint()
      .domain(growthData.map((d) => d.stage))
      .range([0, innerWidth])
      .padding(0.5);

    const y = d3.scaleLinear().domain([0, 10]).range([innerHeight, 0]);

    /* NEW: soft horizontal grid lines */
    const grid = chart
      .append("g")
      .attr("class", "growth_grid")
      .selectAll("line")
      .data(y.ticks(5))
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d))
      .attr("stroke", "#1c1c1c")
      .attr("stroke-dasharray", "3 6")
      .attr("opacity", 0);

    /* AXES */
    const xAxis = chart
      .append("g")
      .attr("class", "growth_axis")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .call((g) => {
        g.selectAll("path, line").attr("stroke", "#333");
        g.selectAll("text").attr("fill", "#777").style("font-size", "12px");
      });

    const yAxis = chart
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
      .attr("clip-path", "url(#growth_clip)") // NEW
      .attr("d", area);

    /* LINE */
    const line = d3
      .line()
      .x((d) => x(d.stage))
      .y((d) => y(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5));

    const linePath = chart
      .append("path")
      .datum(growthData)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 3)
      .attr("stroke-linecap", "round") // NEW
      .attr("filter", "url(#growth_glow)") // NEW
      .attr("clip-path", "url(#growth_clip)") // NEW
      .attr("d", line);

    /* NEW: hover guide line (vertical dashed line from dot to axis) */
    const guide = chart
      .append("line")
      .attr("class", "growth_guide")
      .attr("stroke", "#3b82f6")
      .attr("stroke-dasharray", "4 4")
      .attr("stroke-opacity", 0.7)
      .attr("opacity", 0)
      .style("pointer-events", "none");

    /* DOTS */
    const dots = chart
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
        /* NEW: grow dot + show guide */
        d3.select(event.currentTarget)
          .transition()
          .duration(250)
          .ease(d3.easeBackOut)
          .attr("r", 9);
        guide
          .attr("x1", x(d.stage))
          .attr("x2", x(d.stage))
          .attr("y1", y(d.value))
          .attr("y2", innerHeight)
          .transition()
          .duration(200)
          .attr("opacity", 1);
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
        /* NEW: shrink dot + hide guide */
        d3.select(event.currentTarget)
          .transition()
          .duration(250)
          .attr("r", 6);
        guide.transition().duration(150).attr("opacity", 0);
        setTooltip((prev) => ({ ...prev, visible: false }));
      });

    /* =====================  NEW: ANIMATION LAYER  ===================== */

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DURATION = reduceMotion ? 1 : 2600;
    const xTicks = xAxis.selectAll(".tick");

    // glowing "pen" that rides the tip of the curve while it draws
    const head = chart
      .append("circle")
      .attr("r", 7)
      .attr("fill", "#fff")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 3)
      .attr("filter", "url(#growth_glow)")
      .attr("opacity", 0)
      .style("pointer-events", "none");

    // expanding ripple ring when a dot appears
    const ripple = (d) => {
      chart
        .insert("circle", ".growth_dot")
        .attr("cx", x(d.stage))
        .attr("cy", y(d.value))
        .attr("r", 6)
        .attr("fill", "none")
        .attr("stroke", "#3b82f6")
        .attr("stroke-width", 2)
        .style("pointer-events", "none")
        .transition()
        .duration(900)
        .ease(d3.easeCubicOut)
        .attr("r", 26)
        .attr("stroke-opacity", 0)
        .remove();
    };

    // endless soft pulse on the final "Industry ready" dot (styled in CSS)
    const addPulse = () => {
      const last = growthData[growthData.length - 1];
      chart
        .insert("circle", ".growth_dot")
        .attr("class", "growth_pulse")
        .attr("cx", x(last.stage))
        .attr("cy", y(last.value))
        .attr("r", 6)
        .attr("fill", "#3b82f6")
        .style("pointer-events", "none");
    };

    const popDot = (i) => {
      const d = growthData[i];
      d3.select(dots.nodes()[i])
        .transition()
        .duration(900)
        .ease(d3.easeElasticOut.amplitude(1).period(0.45))
        .attr("r", 6)
        .on("end", function () {
          d3.select(this).style("pointer-events", "all");
        });
      d3.select(xTicks.nodes()[i])
        .transition()
        .duration(500)
        .attr("opacity", 1)
        .attr("transform", `translate(${x(d.stage)},0)`);
      ripple(d);
    };

    const showFinal = () => {
      clipRect.attr("width", innerWidth + 20);
      grid.attr("opacity", 1);
      yAxis.attr("opacity", 1);
      xTicks.attr("opacity", 1);
      dots.attr("r", 6);
      addPulse();
    };

    const play = () => {
      hasPlayed.current = true;

      // axes + grid fade in first
      yAxis.transition().duration(600).attr("opacity", 1);
      grid
        .transition()
        .duration(800)
        .delay((_, i) => i * 90)
        .attr("opacity", 1);

      const first = growthData[0];
      const node = linePath.node();
      const shown = new Set();

      head
        .attr("cx", x(first.stage))
        .attr("cy", y(first.value))
        .transition()
        .duration(250)
        .attr("opacity", 1);

      // ONE transition drives: clip reveal (curve + area), head position, dot pops
      clipRect
        .transition()
        .delay(300)
        .duration(DURATION)
        .ease(d3.easeSinInOut)
        .attrTween("width", () => (t) => {
          const edge = t * innerWidth;
          const tx = Math.max(edge, x(first.stage));
          const p = pointAtX(node, tx);
          head.attr("cx", p.x).attr("cy", p.y);

          growthData.forEach((d, i) => {
            if (!shown.has(i) && edge >= x(d.stage) - 4) {
              shown.add(i);
              popDot(i);
            }
          });
          return t >= 1 ? innerWidth + 20 : edge + 10;
        })
        .on("end", () => {
          head.transition().duration(500).attr("r", 0).attr("opacity", 0);
          addPulse();
        });
    };

    // initial hidden state (before the section scrolls into view)
    if (hasPlayed.current || reduceMotion) {
      hasPlayed.current = true;
      showFinal();
    } else {
      grid.attr("opacity", 0);
      yAxis.attr("opacity", 0);
      xTicks.attr("opacity", 0);
      dots.attr("r", 0).style("pointer-events", "none");
    }

    playRef.current = play;
  }, []);

  useEffect(() => {
    drawChart();
    window.addEventListener("resize", drawChart);
    return () => window.removeEventListener("resize", drawChart);
  }, [drawChart]);

  /* NEW: start everything when the section becomes visible */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("growth_in_view"); // triggers title / subtitle CSS animation
          timer = setTimeout(() => {
            if (playRef.current && !el.dataset.played) {
              el.dataset.played = "1";
              playRef.current();
            }
          }, 500);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className="growth_section" id="growth_section">
        <div className="growth_chart_wrapper" ref={wrapperRef}>
          <div className="growth_title">
            <span className="growth_title_text">My Education</span>
          </div>
          <p className="growth_subtitle">
        I turn ambition into action and ideas into impact.
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
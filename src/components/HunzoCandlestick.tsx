"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface CandlestickData {
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

export default function CandlestickChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Draw chart
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0)
      return;

    const sampleData: CandlestickData[] = [
      {
        Date: new Date("2024-01-01"),
        Open: 170.34,
        High: 175.89,
        Low: 169.85,
        Close: 174.23,
      },
      {
        Date: new Date("2024-01-02"),
        Open: 174.23,
        High: 178.45,
        Low: 173.12,
        Close: 177.98,
      },
      {
        Date: new Date("2024-01-03"),
        Open: 177.98,
        High: 180.34,
        Low: 175.67,
        Close: 176.45,
      },
      {
        Date: new Date("2024-01-04"),
        Open: 176.45,
        High: 179.23,
        Low: 174.89,
        Close: 178.56,
      },
      {
        Date: new Date("2024-01-05"),
        Open: 178.56,
        High: 182.67,
        Low: 177.34,
        Close: 181.23,
      },
      {
        Date: new Date("2024-01-08"),
        Open: 181.23,
        High: 183.45,
        Low: 179.78,
        Close: 180.34,
      },
      {
        Date: new Date("2024-01-09"),
        Open: 180.34,
        High: 181.23,
        Low: 176.89,
        Close: 177.45,
      },
      {
        Date: new Date("2024-01-10"),
        Open: 177.45,
        High: 179.89,
        Low: 175.34,
        Close: 178.67,
      },
      {
        Date: new Date("2024-01-11"),
        Open: 178.67,
        High: 180.45,
        Low: 177.23,
        Close: 179.34,
      },
      {
        Date: new Date("2024-01-12"),
        Open: 179.34,
        High: 183.67,
        Low: 178.89,
        Close: 182.45,
      },
      {
        Date: new Date("2024-01-15"),
        Open: 182.45,
        High: 185.23,
        Low: 181.67,
        Close: 184.56,
      },
      {
        Date: new Date("2024-01-16"),
        Open: 184.56,
        High: 186.78,
        Low: 183.45,
        Close: 185.23,
      },
      {
        Date: new Date("2024-01-17"),
        Open: 185.23,
        High: 187.89,
        Low: 184.67,
        Close: 186.45,
      },
      {
        Date: new Date("2024-01-18"),
        Open: 186.45,
        High: 188.23,
        Low: 185.34,
        Close: 187.67,
      },
      {
        Date: new Date("2024-01-19"),
        Open: 187.67,
        High: 189.45,
        Low: 186.78,
        Close: 188.23,
      },
      {
        Date: new Date("2024-01-22"),
        Open: 188.23,
        High: 190.67,
        Low: 187.45,
        Close: 189.34,
      },
      {
        Date: new Date("2024-01-23"),
        Open: 189.34,
        High: 191.23,
        Low: 188.67,
        Close: 190.45,
      },
      {
        Date: new Date("2024-01-24"),
        Open: 190.45,
        High: 192.89,
        Low: 189.78,
        Close: 191.67,
      },
      {
        Date: new Date("2024-01-25"),
        Open: 191.67,
        High: 193.45,
        Low: 190.23,
        Close: 192.34,
      },
      {
        Date: new Date("2024-01-26"),
        Open: 192.34,
        High: 194.67,
        Low: 191.89,
        Close: 193.45,
      },
    ];

    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = dimensions.width;
    const height = dimensions.height;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create scales
    const x = d3
      .scaleBand()
      .domain(sampleData.map((d) => d.Date.toISOString()))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(sampleData, (d) => d.Low) ?? 0,
        d3.max(sampleData, (d) => d.High) ?? 0,
      ])
      .range([height - margin.bottom, margin.top]);

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3.axisBottom(x).tickFormat((d) => new Date(d).toLocaleDateString())
      )
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat((d) => `$${d}`));

    // Add candlesticks
    const g = svg
      .append("g")
      .selectAll("g")
      .data(sampleData)
      .join("g")
      .attr("transform", (d) => `translate(${x(d.Date.toISOString())},0)`);

    // Vertical line (High-Low)
    g.append("line")
      .attr("y1", (d) => y(d.Low))
      .attr("y2", (d) => y(d.High))
      .attr("x1", (d) => x.bandwidth() / 2)
      .attr("x2", (d) => x.bandwidth() / 2)
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    // Candlestick body
    g.append("rect")
      .attr("x", 0)
      .attr("y", (d) => y(Math.max(d.Open, d.Close)))
      .attr("width", x.bandwidth())
      .attr("height", (d) => Math.abs(y(d.Open) - y(d.Close)))
      .attr("fill", (d) => (d.Open > d.Close ? "#ef4444" : "#22c55e"))
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    // Add tooltips
    g.append("title").text(
      (d) => `Date: ${d.Date.toLocaleDateString()}
Open: $${d.Open.toFixed(2)}
High: $${d.High.toFixed(2)}
Low: $${d.Low.toFixed(2)}
Close: $${d.Close.toFixed(2)}`
    );

    // Add y-axis grid lines
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", innerWidth)
          .attr("stroke-opacity", 0.1)
      );
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full bg-white rounded-lg">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
}

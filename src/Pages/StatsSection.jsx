import React from "react";
import "./StatsSection.css";

const stats = [
  { value: "20+", label: "Articles Published" },
  { value: "5", label: "Categories Covered" },
  { value: "2026", label: "Started Writing" },
  { value: "100%", label: "Original Content" },
];

export default function StatsSection() {
  return (

    <div className="stats-wrapper">
        <div className="stats-intro">
      <p>
        Over the past year, I've been consistently publishing articles on Medium, where I share my experiences, ideas, and insights from my journey as a software engineer. My writing spans software engineering, Java, Spring Boot, React, system design, startups, AI, and career growth. Every article is inspired by real-world challenges, personal learning, and practical solutions, with the goal of helping developers deepen their understanding and build better software.
      </p>
    </div>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-dot" />
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
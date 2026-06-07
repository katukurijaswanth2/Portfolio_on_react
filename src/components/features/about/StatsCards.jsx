import React from 'react';
import "./StatsCards.css"
const StatsCards = () => {
  const stats = [
    {
      icon: "📂",
      number: "4",
      title: "Full Stack Projects",
      subtitle: "Spring Boot + React"
    },
    {
      icon: "👨‍🎓",
      number: "1,000+",
      title: "Students Taught",
      subtitle: "Web Development"
    },
    {
      icon: "🚀",
      number: "3",
      title: "Production Apps",
      subtitle: "Deployed Live"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass-card group p-8 rounded-3xl text-center 
                     transition-all duration-300 hover:-translate-y-3"
        >
          <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {stat.icon}
          </div>
          
          <div className="text-6xl font-bold text-white mb-2 tracking-tight">
            {stat.number}
          </div>
          
          <div className="text-xl font-semibold text-white mb-1">
            {stat.title}
          </div>
          
          <div className="text-slate-300 text-sm">
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
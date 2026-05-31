import { useEffect, useState } from "react";
import "./SocialLinks.css";

function SocialLinks() {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    {
      name: "Twitter",
      icon: "fa-brands fa-x-twitter",
      url: "https://x.com/kjaswanth_2",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url:  "https://www.instagram.com/jashuuuu.4/",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url:  "https://www.linkedin.com/in/jaswanth-katukuri-a00a87307/",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url:  "https://github.com/katukurijaswanth2",
    },
     {
    name: "Medium",
    icon: "fa-brands fa-medium",
    url: "https://medium.com/@katukurijaswanth2",
  }
  ];

  // Load Font Awesome icons
  useEffect(() => {
    const fontAwesome = document.createElement("link");

    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

    document.head.appendChild(fontAwesome);

    // Show animation after page loads
    setTimeout(() => {
      setShowLinks(true);
    }, 100);
  }, []);

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`social-button ${showLinks ? "show" : ""}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <i className={link.icon}></i>
       
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
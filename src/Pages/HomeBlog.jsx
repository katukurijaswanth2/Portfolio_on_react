import React from "react";
import { heroArticle, workGrid, AUTHOR, articles } from "../javaScript_files/articlesData";
import "./HomeBlog.css";
import { GlassFilterMarquee } from "../components/common/GlassFilterMarquee";

export const HomeBlog = () => {
  return (
    <>
    <section id="myBlogu">
      <div className="homeBlog_p min-h-full">
        <div className="blog_heading">
          <span className="home_blog">Technical </span>
          <span className="aboutH_work">  Articles</span>
        </div>
        <section className="hb">
      

          {/* ---------------- NEXT ARTICLES (mapped, max 3) ---------------- */}
          <div className="hb-next-list ">
            {articles.slice(0, 3).map((article, index) => (
              <div className="hb-hero" key={article.link + index}>
                <div className="hb-hero-media">
                  <img src={article.img} alt={article.title} />
                  <span className="hb-hero-tag">{article.category}</span>
                </div>

                <div className="hb-hero-copy">
                  <p className="hb-eyebrow">{article.tags?.[0]}</p>
                  <h1 className="hb-hero-title">{article.title}</h1>
                  <p className="hb-hero-excerpt">{article.excerpt}</p>

                  <div className="hb-hero-meta">
                    <span className="hb-author">{AUTHOR.name}</span>
                    <span className="hb-dot">•</span>
                    <span>{article.date}</span>
                  </div>
                  {/* <!-- From Uiverse.io by aguerquin (icon replaced with Medium) -->  */}
                  {/* From Uiverse.io by aguerquin (icon replaced with Medium) */}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-icon"
                  >
                    <div className="icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                          fill="#222229"
                        ></path>
                      </svg>
                    </div>
                    <div className="cube">
                      <span className="side front">hover me</span>
                      <span className="side top">check it on medium</span>
                    </div>
                  </a>

                </div>
              </div>
            ))}
          </div>
       
        </section>
      </div>
        {/* <GlassFilterMarquee /> */}
      </section>
    </>
  );
};

export default HomeBlog;
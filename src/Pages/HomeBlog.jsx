import React from "react";
import { heroArticle, workGrid, AUTHOR, articles } from "../javaScript_files/articlesData";
import "./HomeBlog.css";

export const HomeBlog = () => {
  return (
    <>
      <div className="homeBlog_p min-h-full">
        <div className="blog_heading">
          <span className="home_blog">Technical </span>
          <span className="aboutH_work">  Articles</span>
        </div>
        <section className="hb">
          {/* ---------------- HERO (Apex-style) ---------------- */}
          {/* <div className="hb-hero">
            <div className="hb-hero-media">
              <img src={heroArticle.img} alt={heroArticle.title} />
              <span className="hb-hero-tag">{heroArticle.category}</span>
            </div>

            <div className="hb-hero-copy">
              <p className="hb-eyebrow">Featured Story</p>
              <h1 className="hb-hero-title">{heroArticle.title}</h1>
              <p className="hb-hero-excerpt">{heroArticle.excerpt}</p>

              <div className="hb-hero-meta">
                <span className="hb-author">{AUTHOR.name}</span>
                <span className="hb-dot">•</span>
                <span>{heroArticle.date}</span>
              </div>

              <a href="#" className="hb-readmore">
                Read More <span aria-hidden="true">»</span>
              </a>
            </div>
          </div> */}

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

                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="hb-readmore">
                    Read More <span aria-hidden="true">»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeBlog;
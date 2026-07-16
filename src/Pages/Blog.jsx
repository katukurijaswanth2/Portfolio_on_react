import React, { useState } from "react";
import "./Blog.css"
import {
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  ChevronDown,
} from "lucide-react";
import {
  img,
  AUTHOR,
  navLinks,
  filters,
  articles,
  heroArticle,
  workGrid,
  latestNews,
} from "../javaScript_files/articlesData";
import ContactForm from "../components/Contactform/Contactform";
import { Hero } from "../Hero";

/* ------------------------------------------------------------------ */
/*  SMALL BUILDING BLOCKS                                              */
/* ------------------------------------------------------------------ */

const WorkTile = ({ title, category, img: src }) => (
  <div className="group relative">
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={title}
        className="w-full h-36"
        loading="lazy"
      />
      {/* <button className="absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center bg-white/90 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
     
      </button> */}
    </div>
    <h4 className=" mt-3 font-bold text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
      {title}
    </h4>
    <p className="text-xs text-gray-400">{category}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */

export const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All Posts");

  const filteredWork =
    activeFilter === "All Posts"
      ? workGrid
      : articles.filter((a) => a.tags.includes(activeFilter)).slice(0, 8);

  return (
    <>
      {/* <Hero /> */}
      <div className="min-h-screen bg-white text-gray-800 font-sans relative">
        <main className=" px-6">
          {/* ---------- HERO ---------- */}
          <section className=" about_hero grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
            <div className="lg:col-span-7 relative">
              <img
                src={heroArticle.img.replace("600/400", "900/560")}
                alt={heroArticle.title}
                className="w-full h-80 object-cover grayscale"
              />
              <div className="about_hero_title absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2">
                {heroArticle.excerpt.length > 60
                  ? heroArticle.excerpt.slice(0, 57) + "..."
                  : heroArticle.excerpt}
              </div>
              {/* <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1">
              <ChevronRight size={18} />
            </button> */}
            </div>

            <div className="lg:col-span-5">
              <h1 className="text-4xl font-serif font-light leading-tight text-gray-900 mb-4">
                Build And <span className="italic">Explain.</span>
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Software engineer with hands-on experience across Java, Spring
                Boot, and React. 13+ published articles breaking down backend
                internals, startup stories, and the occasional short story.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                The result is always the same:{" "}
                <span className="font-semibold text-gray-700">
                  clarity over shortcuts.
                </span>
              </p>
             
            </div>
          </section>

          {/* ---------- OUR WORK ---------- */}
          <section className="section_filter py-10 px-10 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
               <div className="about_heading">
      <span className="about_our">My</span>
      <span className="about_work">Articles</span>
    </div>
            </div>

            <div className="filters_about flex flex-wrap gap-6 text-[0.95rem] font-[Space_Grotesk] tracking-wide uppercase text-gray-400 mb-8 pb-4 border-b border-gray-100">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`transition-colors hover:text-gray-900 ${activeFilter === f ? "text-gray-900 font-semibold" : ""
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

           <div className="about_filteredWork">
  <div className="mt-2
  grid grid-cols-[repeat(auto-fill,320px)] gap-6 justify-center w-full mx-auto">
    {filteredWork.map((a) => (
      <WorkTile key={a.title} title={a.title} category={a.category} img={a.img} />
    ))}
  </div>
</div>
          </section>
        </main>
      </div>
      <ContactForm />
    </>
  );
};

export default Blog;
import React, { useState } from "react";
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
      <button className="absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center bg-white/90 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
        <Plus size={14} />
      </button>
    </div>
    <h4 className="mt-3 font-bold text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
          <div className="lg:col-span-7 relative">
            <img
              src={heroArticle.img.replace("600/400", "900/560")}
              alt={heroArticle.title}
              className="w-full h-80 object-cover grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2">
              {heroArticle.excerpt.length > 60
                ? heroArticle.excerpt.slice(0, 57) + "..."
                : heroArticle.excerpt}
            </div>
            <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1">
              <ChevronRight size={18} />
            </button>
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
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
              &raquo; Read More
            </a>
          </div>
        </section>

        {/* ---------- OUR WORK ---------- */}
        <section className="py-10 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <h2 className="text-2xl font-serif text-gray-900">Our Work.</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-8 pb-4 border-b border-gray-100">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`hover:text-blue-600 ${
                  activeFilter === f ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {filteredWork.map((a) => (
              <WorkTile key={a.title} title={a.title} category={a.category} img={a.img} />
            ))}
          </div>
        </section>
      </main>
    </div>
    <ContactForm />
    </>
  );
};

export default Blog;
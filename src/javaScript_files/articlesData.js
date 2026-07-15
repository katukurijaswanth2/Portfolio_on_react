/* ------------------------------------------------------------------ */
/*  DATA — Jaswanth Katukuri's Medium articles                         */
/*  Add or remove entries here; the Blog component will update         */
/*  automatically.                                                     */
/* ------------------------------------------------------------------ */

export const img = (seed, w = 600, h = 400) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const AUTHOR = {
  name: "Jaswanth Katukuri",
  role: "Software Engineer & Writer",
};

export const navLinks = ["Home", "About", "Portfolio", "Blog", "Contact"];

export const filters = [
  "All Posts",
  "Engineering",
  "Startups",
  "Career",
  "Opinion",
  "Fiction",
];

// All articles — add/remove objects freely
export const articles = [
  {
    tags: ["Opinion"],
    title: "When AI Starts Selling",
    category: "Opinion",
    date: "5d ago",
    excerpt:
      "I don't think AI is going to take away everyone's jobs. That fear gets a lot of attention, but it's not what worries me most.",
    img: img("ai-selling"),
    pinned: true,
  },
  {
    tags: ["Career"],
    title: "Passed 10th Math? Then DSA Is Not Hard",
    category: "Career",
    date: "2d ago",
    excerpt: "To every new coder: remember your 10th class exam.",
    img: img("dsa-math"),
  },
  {
    tags: ["Engineering"],
    title: "Your API Is a Contract with the World",
    category: "Engineering",
    date: "Jul 4",
    excerpt:
      "In software engineering, few artifacts carry as much long-term consequence as the APIs we expose.",
    img: img("api-contract"),
  },
  {
    tags: ["Engineering"],
    title: "Java HashMap Internals",
    category: "Engineering, Web Design",
    date: "Jun 20",
    excerpt:
      "By the end of this article, you won't just use HashMap — you'll understand every single thing happening under the hood.",
    img: img("hashmap-internals"),
  },
  {
    tags: ["Startups"],
    title: "They Watched Buildings Rise",
    category: "Startups",
    date: "Jun 13",
    excerpt:
      "The story of InnCircles, and the founders who refused to accept that construction had to stay broken.",
    img: img("inncircles"),
  },
  {
    tags: ["Engineering"],
    title: "Why I Stopped Shipping One Giant Bundle",
    category: "Engineering",
    date: "Jun 2",
    excerpt:
      "How lazy loading and code splitting transformed the way I think about React deployments.",
    img: img("js-bundle"),
  },
  {
    tags: ["Engineering"],
    title: "Understanding BCrypt in Spring Security",
    category: "Engineering",
    date: "Jun 1",
    excerpt: "BCrypt in Spring Security — from plain passwords to secure authentication.",
    img: img("bcrypt"),
  },
  {
    tags: ["Startups"],
    title: "Indian Startup Series | E2logy",
    category: "Startups",
    date: "May 31",
    excerpt:
      "Let me tell you a story. Not of a billion-dollar unicorn. Not of a Bengaluru garage startup swimming in VC money.",
    img: img("e2logy"),
  },
  {
    tags: ["Engineering"],
    title: "Java HashMap: The Most Misunderstood",
    category: "Engineering, Career",
    date: "May 30",
    excerpt:
      "You've been using it since second year. You've answered questions about it in five rounds of interviews.",
    img: img("hashmap-college"),
  },
  {
    tags: ["Engineering"],
    title: "The Annotation Everyone Uses",
    category: "Engineering",
    date: "May 29",
    excerpt:
      "A deep dive into Spring Boot's @Value — and the architectural discipline it quietly demands.",
    img: img("annotation"),
  },
  {
    tags: ["Fiction"],
    title: "The Sea Before the Forest",
    category: "Fiction",
    date: "Mar 16",
    excerpt:
      "In the villages of the south, old men sometimes say a man's life is not a road but a forest.",
    img: img("sea-forest"),
    italic: true,
  },
  {
    tags: ["Opinion"],
    title: "The Problem With 'Can You Share the Prompt?'",
    category: "Opinion",
    date: "Mar 13",
    excerpt:
      "Whenever someone posts something impressive created with AI, the first question is always the same.",
    img: img("share-prompt"),
    italic: true,
  },
  {
    tags: ["Fiction"],
    title: "The Silent Piece That Can Destroy Kings",
    category: "Fiction",
    date: "Mar 8",
    excerpt: "Life is a chessboard carved in black stone beneath the burning southern sun.",
    img: img("chess-kings"),
  },
];

// Derived helpers — recompute automatically whenever `articles` changes
export const heroArticle = articles[0];
export const workGrid = articles.slice(0, 8);
export const latestNews = articles.slice(0, 3);
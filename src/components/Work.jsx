/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/src/assets/shopo-market.png",
    title: "Shopo-Market",
    tags: [
      "API",
      "React.Js",
      "Tailwind",
      "Web Design",
      "Redux",
      "Context",
      "Routing",
      "AXIOS",
    ],
    projectLink: "https://github.com/Mahmoud-Makady/Shopo-Market",
    productionLink: "https://shopo-market.netlify.app/",
  },
  {
    imgSrc: "/src/assets/screen-spot.png",
    title: "Screen-Spot",
    tags: [
      "API",
      "React.Js",
      "BootStrap",
      "Web Design",
      "Redux",
      "Context",
      "Routing",
      "AXIOS",
    ],
    projectLink: "https://github.com/Mahmoud-Makady/Screen-Spot",
    productionLink: "https://screenn-spot.netlify.app/",
  },
  {
    imgSrc: "/src/assets/e-games.png",
    title: "E-Games",
    tags: [
      "HTML5",
      "CSS3",
      "API",
      "LocalStorage",
      "BootStrap",
      "JS",
      "ES6",
    ],
    projectLink: "https://github.com/Mahmoud-Makady/EGames",
    productionLink:
      "https://mahmoud-makady.github.io/EGames/",
  },
  {
    imgSrc: "/src/assets/movies.png",
    title: "Movies",
    tags: [
        "HTML5",
        "CSS3",
        "API",
        "Web Design", 
        "BootStrap", 
        "JS"
      ],
    projectLink: "https://github.com/Mahmoud-Makady/Movies",
    productionLink:
      "https://mahmoud-makady.github.io/Movies/",
  },
  {
    imgSrc: "/src/assets/study-planner.png",
    title: "Study-Planner",
    tags: [
      "FireStore", 
      "Authentication", 
      "JS", 
      "BootStrap", 
      "ES6"
    ],
    projectLink: "https://github.com/Mahmoud-Makady/Study-Planner",
    productionLink:
      "https://mahmoud-makady.github.io/Study-Planner/",
  },

  {
    imgSrc: "/src/assets/to-do.png",
    title: "To-Do-List",
    tags: [
      "Web-design", 
      "JS", 
      "CSS3",
      "Bootstrap"
    ],
    projectLink: "https://github.com/Mahmoud-Makady/To-Do-List",
    productionLink: "https://mahmoud-makady.github.io/To-Do-List/",
  },
  {
    imgSrc: "/src/assets/quick-store.png",
    title: "Quick-Store",
    tags: [
      "Web-design", 
      "HTML5",
      "CSS3",
      "JS",
      "API",
      "BootStrap"
    ],
    projectLink: "https://github.com/Mahmoud-Makady/Quick-Store",
    productionLink: "https://mahmoud-makady.github.io/Quick-Store/",
  },
  {
    imgSrc: "/src/assets/mealify.png",
    title: "Mealify",
    tags: [
      "Web-design", 
      "HTML5",
      "CSS3",
      "BootStrap"
    ],
    projectLink: "https://github.com/Mahmoud-Makady/Mealify",
    productionLink: "https://mahmoud-makady.github.io/Mealify/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">My Portfolio Highlights</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_2fr))] gap-x-4 gap-y-5">
          {works.map(
            (
              { imgSrc, title, tags, projectLink, productionLink, stage },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                productionLink={productionLink}
                stage={stage}
                classes="reveal-up"
              />
            )
          )}
        </div>
        <div className="grid place-items-center mt-8">
          <a
            className="btn btn-secondary p-5 reveal-up"
            href="https://github.com/Mahmoud-Makady"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Work;

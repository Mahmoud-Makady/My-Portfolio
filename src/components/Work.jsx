/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/src/assets/projects/travello.png",
    title: "Travello",
    tags: [
      "Firebase",
      "React.Js",
      "Redux",
      "Context",
      "Routing",
      "AXIOS",
      "Web Design",
      "Custom Css",
      "Chart.js",
      "Formik with Yup",
    ],
    projectLink: "https://github.com/ehabmansour1/travello",
    productionLink: "https://travello-psi.vercel.app/",
    description: "Travel booking platform with real-time data and modern UI.",
  },
  {
    imgSrc: "/src/assets/projects/shopo-market.png",
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
    description: "E-commerce platform with product search and cart features.",
  },
  {
    imgSrc: "/src/assets/projects/Skill-Stack.jpg",
    title: "Skill-Stack",
    tags: [
      "React.Js",
      "Tailwind",
      "Web Design",
      "Redux",
      "Context",
      "Routing",
      "AXIOS",
    ],
    projectLink: "http://musical-youtiao-78d18d.netlify.app/",
    productionLink: "http://musical-youtiao-78d18d.netlify.app/",
    description:
      "A modern, responsive platform for exploring and accessing tech courses.",
  },
  {
    imgSrc: "/src/assets/projects/7amni.png",
    title: "7amni",
    tags: ["Html", "Css", "JavaScript", "Bootstrap", "PHP", "Laravel"],
    projectLink: "https://7amni.netlify.app/",
    productionLink: "https://7amni.netlify.app/",
    description: "A web app for social and business networking.",
  },
  {
    imgSrc: "/src/assets/projects/pop-gpt.png",
    title: "Pop-Gpt",
    tags: ["React.Js", "Web Design", "Context", "Routing", "AXIOS", "Firebase"],
    projectLink: "https://pop-gpt.vercel.app/",
    productionLink: "https://pop-gpt.vercel.app/",
    description: "AI-powered chat app with modern design.",
  },
  {
    imgSrc: "/src/assets/projects/screen-spot.png",
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
    description: "Movie and TV show discovery platform.",
  },
  {
    imgSrc: "/src/assets/projects/e-games.png",
    title: "E-Games",
    tags: ["HTML5", "CSS3", "API", "LocalStorage", "BootStrap", "JS", "ES6"],
    projectLink: "https://github.com/Mahmoud-Makady/EGames",
    productionLink: "https://mahmoud-makady.github.io/EGames/",
    description: "Online games portal with user progress tracking.",
  },
  {
    imgSrc: "/src/assets/projects/Amon.png",
    title: "Amon Express Limousine",
    tags: ["Html", "Css", "JavaScript", "Bootstrap", "PHP", "Laravel"],
    projectLink: "https://amonexpresslimousine.com/",
    productionLink: "https://amonexpresslimousine.com/",
    description: "Business website for limousine booking and services.",
  },
  {
    imgSrc: "/src/assets/projects/movies.png",
    title: "Movies",
    tags: ["HTML5", "CSS3", "API", "Web Design", "BootStrap", "JS"],
    projectLink: "https://github.com/Mahmoud-Makady/Movies",
    productionLink: "https://mahmoud-makady.github.io/Movies/",
    description: "Browse and search for movies with detailed info.",
  },
  {
    imgSrc: "/src/assets/projects/study-planner.png",
    title: "Study-Planner",
    tags: ["FireStore", "Authentication", "JS", "BootStrap", "ES6"],
    projectLink: "https://github.com/Mahmoud-Makady/Study-Planner",
    productionLink: "https://mahmoud-makady.github.io/Study-Planner/",
    description: "Organize study tasks and track progress efficiently.",
  },
  {
    imgSrc: "/src/assets/projects/to-do.png",
    title: "To-Do-List",
    tags: ["Web-design", "JS", "CSS3", "Bootstrap"],
    projectLink: "https://github.com/Mahmoud-Makady/To-Do-List",
    productionLink: "https://mahmoud-makady.github.io/To-Do-List/",
    description: "Simple and effective to-do list app for daily tasks.",
  },
  {
    imgSrc: "/src/assets/projects/quick-store.png",
    title: "Quick-Store",
    tags: ["Web-design", "HTML5", "CSS3", "JS", "API", "BootStrap"],
    projectLink: "https://github.com/Mahmoud-Makady/Quick-Store",
    productionLink: "https://mahmoud-makady.github.io/Quick-Store/",
    description: "Quick online store with product catalog and cart.",
  },
  {
    imgSrc: "/src/assets/projects/mealify.png",
    title: "Mealify",
    tags: ["Web-design", "HTML5", "CSS3", "BootStrap"],
    projectLink: "https://github.com/Mahmoud-Makady/Mealify",
    productionLink: "https://mahmoud-makady.github.io/Mealify/",
    description:
      "Restaurant website template with menu and reservation features.",
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
              {
                imgSrc,
                title,
                tags,
                projectLink,
                productionLink,
                description,
                stage,
              },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                productionLink={productionLink}
                description={description}
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

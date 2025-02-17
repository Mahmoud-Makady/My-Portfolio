/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/movie.png",
    title: "Movies-App",
    tags: [
      "ReactJs",
      "BootStrap",
      "Web Design",
      "Redux",
      "Context",
      "Routing",
      "AXIOS",
    ],
    projectLink: "https://github.com/Abd0Khalifa/movies-app",
    productionLink: "https://soft-fudge-e94dd7.netlify.app/",
  },
  {
    imgSrc: "/images/ecommerce.PNG",
    title: "E-Commerce",
    tags: [
      "API",
      "LocalStorage",
      "BootStrap",
      "Paypal Payment",
      "JS",
      "ES6",
      "JQuery",
    ],
    projectLink: "https://github.com/Abd0Khalifa/E-Commerce-project",
    productionLink:
      "https://abd0khalifa.github.io/E-Commerce-project/login.html",
  },
  {
    imgSrc: "/images/x.PNG",
    title: "simulation for X-platform",
    tags: ["API", "LocalStorage", "Web Design", "BootStrap", "JS"],
    projectLink: "https://github.com/Abd0Khalifa/X-platform-simulation",
    productionLink:
      "https://abd0khalifa.github.io/X-platform-simulation/login.html",
  },
  {
    imgSrc: "/images/firebase.png",
    title: "Firebase small System",
    tags: ["FireStore", "Authentication", "JS", "BootStrap", "ES6", "JQuery"],
    projectLink: "https://github.com/Abd0Khalifa/FirebaseAuth-ClouldFirestore",
    productionLink:
      "https://abd0khalifa.github.io/FirebaseAuth-ClouldFirestore/logIn.html",
  },

  {
    imgSrc: "/images/todo.png",
    title: "TO-DO App",
    tags: ["Web-design", "JS", "CSS3"],
    projectLink: "https://github.com/Abd0Khalifa/TodoApp",
    productionLink: "https://abd0khalifa.github.io/TodoApp/",
  },
  {
    imgSrc: "/images/hosto.png",
    title: "Hosto Clone",
    tags: ["Web-design", "BootStrap"],
    projectLink: "https://github.com/Abd0Khalifa/Hosto",
    productionLink: "https://abd0khalifa.github.io/Hosto/",
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
            className="btn btn-primary reveal-up"
            href="https://github.com/Abd0Khalifa"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Work;

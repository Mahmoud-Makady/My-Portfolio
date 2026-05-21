/**
 * Node Modules
 */
import PropTypes from "prop-types";
import logo from "/src/assets/logo2.png";

const TAG_CATEGORIES = {
  // Frameworks & libraries
  "react.js": "framework",
  "redux": "framework",
  "context": "framework",
  "routing": "framework",
  "bootstrap": "framework",
  "tailwind": "framework",
  "chart.js": "framework",
  "formik with yup": "framework",
  "laravel": "framework",
  // Languages
  "javascript": "language",
  "js": "language",
  "typescript": "language",
  "es6": "language",
  "html": "language",
  "html5": "language",
  "css": "language",
  "css3": "language",
  "custom css": "language",
  "php": "language",
  // Data / API / backend
  "firebase": "data",
  "firestore": "data",
  "api": "data",
  "axios": "data",
  "node.js": "data",
  "local storage": "data",
  "localstorage": "data",
  "authentication": "data",
};

const CATEGORY_STYLES = {
  framework: "bg-sky-500/10 text-sky-300 ring-sky-500/20",
  language: "bg-amber-500/10 text-amber-200 ring-amber-500/20",
  data: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  default: "bg-slate-800 text-slate-300 ring-slate-50/10",
};

const getTagStyle = (tag) => {
  const category = TAG_CATEGORIES[tag.toLowerCase()] || "default";
  return CATEGORY_STYLES[category];
};

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  productionLink,
  description,
  stage,
  featured = false,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl active:bg-slate-700/60 ring-1 ring-inset transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 group " +
        (featured
          ? "bg-slate-800 ring-sky-500/30 shadow-[0_0_30px_-12px_rgba(56,189,248,0.5)] hover:bg-sky-950 "
          : "bg-slate-700 ring-slate-50/5 hover:bg-sky-950 ") +
        classes
      }
    >
      {/* Logo watermark */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="absolute right-5 bottom-4 w-8 h-8 opacity-80 pointer-events-none select-none z-10"
      />
      <figure className="img-box aspect-square rounded-lg mb-2 overflow-hidden relative">
        {featured && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-sky-400 text-slate-950 rounded-md shadow-md">
            Featured
          </span>
        )}
        <img src={imgSrc} alt={`${title} project screenshot`} className="img-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <h3 className="title-1 font-semibold text-sky-500 mb-3 group-hover:text-sky-300 transition-colors">{title}</h3>
          <p className="text-sm text-sky-200 pb-3">{description}</p>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className={`h-7 text-xs font-medium grid items-center px-2.5 rounded-md ring-1 ring-inset ${getTagStyle(label)}`}
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code (opens in new tab)`}
              className="w-11 h-11 rounded-lg grid place-items-center text-slate-300 hover:text-slate-900 shrink-0 transition-colors duration-200 bg-slate-900 hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700"
            >
              <span className="material-symbols-rounded" aria-hidden="true">folder_data</span>
            </a>
          ) : (
            <div
              role="img"
              aria-label={`Source code not available for ${title}`}
              className="w-11 h-11 rounded-lg grid place-items-center text-slate-300 shrink-0 bg-gray-300 cursor-not-allowed"
            >
              <span className="material-symbols-rounded" aria-hidden="true">folder_data</span>
            </div>
          )}

          {productionLink ? (
            <a
              href={productionLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live demo (opens in new tab)`}
              className="w-11 h-11 rounded-lg grid place-items-center text-slate-300 hover:text-slate-900 shrink-0 transition-colors duration-200 bg-slate-900 hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700"
            >
              <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
            </a>
          ) : (
            <div
              role="img"
              aria-label={`Live demo not available for ${title}`}
              className="w-11 h-11 rounded-lg grid place-items-center text-slate-300 shrink-0 bg-gray-300 cursor-not-allowed"
            >
              <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  productionLink: PropTypes.string,
  description: PropTypes.string,
  stage: PropTypes.string,
  featured: PropTypes.bool,
  classes: PropTypes.string,
};

export default ProjectCard;

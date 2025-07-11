/**
 * Node Modules
 */
import PropTypes from "prop-types";
import logo from "/src/assets/logo2.png";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  productionLink,
  description,
  stage,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-slate-700 hover:bg-sky-950 active:bg-slate-700/60 ring-1 ring-inset ring-slate-50/5 transition-colors project-card " +
        classes
      }
    >
      {/* Logo watermark */}
      <img
        src={logo}
        alt="logo watermark"
        className="absolute right-5 bottom-4 w-8 h-8 opacity-80 pointer-events-none select-none z-10"
      />
      <figure className="img-box aspect-square rounded-lg mb-2">
        <img src={imgSrc} alt={title} className="img-cover" loading="lazy" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <h3 className="title-1 font-semibold text-sky-500 mb-3">{title}</h3>
          <p className="text-sm text-sky-200 pb-3">{description}</p>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h-8 text-sm text-slate-300 hover:text-slate-900 bg-slate-900 hover:bg-slate-300 transition grid items-center px-3 rounded-lg"
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={`w-11 h-11 rounded-lg grid place-items-center text-slate-300 hover:text-slate-900 shrink-0 transition ${
              projectLink
                ? "bg-slate-900 hover:bg-slate-300 cursor-pointer transition"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            aria-disabled={!projectLink}
          >
            {projectLink ? (
              <a
                href={projectLink}
                className="inset-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
              >
                <span className="material-symbols-rounded">folder_data</span>
              </a>
            ) : (
              <span className="material-symbols-rounded">folder_data</span>
            )}
          </div>

          <div
            className={`w-11 h-11 rounded-lg grid place-items-center text-slate-300 hover:text-slate-900 shrink-0 transition ${
              productionLink
                ? "bg-slate-900 hover:bg-slate-300 cursor-pointer transition"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            aria-disabled={!productionLink}
          >
            {productionLink ? (
              <a
                href={productionLink}
                className="inset-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
              >
                <span className="material-symbols-rounded">arrow_outward</span>
              </a>
            ) : (
              <span className="material-symbols-rounded">arrow_outward</span>
            )}
          </div>
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
  classes: PropTypes.string,
};

export default ProjectCard;

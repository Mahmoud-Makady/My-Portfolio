/**
 * Node Modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  productionLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} className="img-cover" loading="lazy" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={`w-11 h-11 rounded-lg grid place-items-center text-zinc-950 shrink-0 ${
              projectLink
                ? "bg-sky-400 cursor-pointer"
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
            className={`w-11 h-11 rounded-lg grid place-items-center text-zinc-950 shrink-0 ${
              productionLink
                ? "bg-sky-400 cursor-pointer"
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
  classes: PropTypes.string,
};

export default ProjectCard;

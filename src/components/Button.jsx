/**
 * Node Modules
 */
import PropTypes from "prop-types"

/**
 * Primary Button
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => 
    { if(href){
    return(
        <a 
        href={href} 
        className={"btn  " + classes}
        target={target}>
            {label}

        {icon ? 
            <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
        : undefined}

        </a>
    )
  }else{
    return (
      <button className={"btn  " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};


/**
 * Outline Button
 */
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => 
    { if(href){
    return(
        <a 
        href={href} 
        className={"btn " + classes}
        target={target}>
            {label}

        {icon ? 
            <span className="material-symbols-rounded text-slate-950 hover:text-sky-500" aria-hidden="true">{icon}</span>
        : undefined}

        </a>
    )
  }else{
    return (
      <button className={"btn " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded text-sky-950 hover:text-sky-500" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};


export { ButtonPrimary, ButtonOutline };
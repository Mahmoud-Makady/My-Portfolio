
/**
 * Node Modules
 */
import PropTypes from "prop-types"


const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-sky-800 transition-colors group skill-card " + classes}>
        <figure className="bg-sky-900/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-sky-950 transition-colors">
            <img src={imgSrc} alt={label} width={32} height={32} />
        </figure>
        <div>

           <h3>{label}</h3>

           <p className="text-slate-400 text-sm ">
            {desc}
            </p> 
        </div>
    </div>
  )
}


SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard
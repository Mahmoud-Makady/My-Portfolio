
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
    <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-sky-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 group cursor-pointer " + classes}>
        <figure className="bg-sky-900/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-sky-950 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <img src={imgSrc} alt={label} width={32} height={32} className="group-hover:scale-110 transition-transform duration-300" />
        </figure>
        <div>

           <h3 className="group-hover:text-sky-300 transition-colors duration-300">{label}</h3>

           <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
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

/**
 * Components
 */
import SkillCard from "./SkillCard"

const skillItem = [
    {
        imgSrc : '/images/html5.png',
        label: 'HTML5',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc : '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    // {
    //     imgSrc : '/images/nodejs.svg',
    //     label: 'NodeJS',
    //     desc: 'Web Server'
    // },
    // {
    //     imgSrc : '/images/expressjs.svg',
    //     label: 'ExpressJS',
    //     desc: 'Node Framework'
    // },
    {
        imgSrc : '/images/bootstrap.svg',
        label: 'BootStrap',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc : '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/firebase.svg',
        label: 'Firebase',
        desc: 'Database'
    }
]


const Skill = () => {
  return (
      <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                    My Powerful Tools.
            </h2>

              <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Uncover the powerful technologies and tools I use to craft top-tier, high-performance web experiences.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItem.map(({imgSrc,label,desc},key)=>(
                    <SkillCard  
                     imgSrc={imgSrc} 
                     label={label} 
                     desc={desc} 
                     key={key}
                     classes="reveal-up" />
                ))
                }
            </div>
        </div>
      </section>
  )
}

export default Skill
/**
 * Components
 */
import SkillCard from "./SkillCard";
import javascript from "../assets/javascript.svg";
import figma from "../assets/figma.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import firebase from "../assets/firebase.svg";

const skillItem = [
  {
    imgSrc: react,
    label: "React",
    desc: "UI Library",
  },
  {
    imgSrc: tailwindcss,
    label: "Tailwind CSS",
    desc: "Styling",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: bootstrap,
    label: "Bootstrap",
    desc: "UI Framework",
  },
  {
    imgSrc: firebase,
    label: "Firebase",
    desc: "Backend",
  },
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Powerful Tools.</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Uncover the powerful technologies and tools I use to craft top-tier,
          high-performance web experiences.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

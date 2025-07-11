import logo from "../assets/logo2.png";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of Experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-slate-800 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-slate-300 mb-4 md:mb-8 md:text-xl">
            Hey there! 👋 I'm Mahmoud Makady, a passionate Front-End Developer
            with a keen eye for crafting sleek, interactive, and
            high-performance web applications. I specialize in building modern,
            user-friendly interfaces using ReactJS and the latest web
            technologies. Whether it's creating seamless user experiences or
            optimizing performance, I love turning ideas into reality. Feel free
            to explore my work and let's build something amazing together!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                    {number}
                  </span>
                  <span className="text-sky-400 ml-1 font-semibold md:text-3xl animate-pulse">
                    +
                  </span>
                </div>

                <p className="text-sm text-slate-300 hover:text-sky-300 transition-colors">{label}</p>
              </div>
            ))}

            <img
              src={logo}
              alt="logo"
              className="ml-auto md:w-[50px] md:h-[50px] sm:h-[40px] w-[35px] h-[30px] opacity-80 pointer-events-none select-none z-10 hover:rotate-12 hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

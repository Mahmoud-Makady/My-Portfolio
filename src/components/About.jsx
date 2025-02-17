/**
 * 
 *
 */
const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of Experience',
    number: 1
  }
];



const About = () => {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
          Welcome! I&apos;m Abdulrahman, a passionate Front-End web developer specializing in ReactJS, dedicated to building sleek, interactive, and high-performance web applications. By blending creativity with technical precision, I bring ideas to life with clean, efficient code and modern design principles. I thrive on transforming concepts into digital experiences that are both visually captivating and functionally robust. Let&apos;s collaborate to create something extraordinary!         
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number}, key)=>(
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img src="/images/logo.svg" alt="logo" width={60} height={60} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
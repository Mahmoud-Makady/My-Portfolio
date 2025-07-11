/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button";
import profilPic from "../assets/pic.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="mt-24 reveal-up">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping "></span>
              </span>
              <span className="typing-animation">Available for hiring</span>
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
            Building Next-Gen Websites: Scalable, Fast, and Future-Proof.
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row reveal-up">
            <ButtonPrimary
              classes="bg-sky-700 hover:bg-sky-900 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
              label="Download resume"
              icon="download"
              href="https://drive.google.com/file/d/1MUSx9B6mGIIIYfzVrnWX9FSJm7M7ovzK/view?usp=drivesdk"
              download
              target="_blank"
            />
            <ButtonOutline
              classes="bg-slate-200 hover:bg-slate-400 py-6 text-sky-950 transition-all duration-300 hover:scale-105"
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end reveal-up">
          <img
            src={profilPic}
            alt="Mahmoud Makady"
            className="w-3/4 sm:max-w-[400px] lg:max-w-full mx-auto bg-gradient-to-t from-slate-400 via-25% via-slate-400/40 to-65% rounded-[70px] object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-sky-500/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

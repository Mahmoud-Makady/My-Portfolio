const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#work",
  },

  {
    label: "Get in touch",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mahmoud-Makady",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahmoud-makady",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201065228048",
  },
  {
    label: "Gmail",
    href: "mailto:mahmoudmakady.dev@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Ready to create something great? Let's collaborate!
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Portfolio</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-slate-400 py-1 transition-colors hover:text-sky-500 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-slate-400 py-1 transition-colors hover:text-sky-500 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src="/src/assets/logo2.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025{" "}
            <span className="text-sky-500 reveal-up">Mahmoud Makady</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

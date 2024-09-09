/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import skills from "../data/skills.json";
import projects from "../data/work.json";
import Skill from "../components/skill/Skill";
import Project from "../components/project/Project";
import Lenis from "lenis";
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const pageWidth = window.innerWidth;
  console.log(pageWidth);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  document.onscroll = () => {
    setScrollY(window.scrollY);
    console.log(scrollY);
  };
  function scrollDown(distance) {
    handleToggle(false);
    window.scrollBy({ top: distance, behavior: "smooth" });
  }
  function handleToggle() {
    setVisibleMenu((prevMenu) => !prevMenu);
  }
  return (
    <main>
      <header className="header1">
        <div className="container">
          <h3 onClick={(_) => scrollDown(pageWidth <= 1100 ? 642 : 700)}>
            about
          </h3>
          <h3 onClick={(_) => scrollDown(1520)}>skills</h3>
          <h3 onClick={(_) => scrollDown(2320)}>work</h3>
          <h3 onClick={(_) => scrollDown(3837)}>contact</h3>
        </div>
        <div className="links">
          <a href="https://github.com/mm232323">
            <img src="/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-qurany-5a07a2248/">
            <img src="/linkedin.png" />
          </a>
          <a href="https://stackoverflow.com/users/22174749/mohammed-qurany">
            <img src="/stack-overflow.png" />
          </a>
        </div>
      </header>
      <header className="header2">
        <center>
          <motion.img
            src="/menu.png"
            className="menu"
            alt="menu img"
            variants={{
              show: { scale: 1, opacity: 1, filter: "blur(0)" },
              hide: { scale: 0, opacity: 0, filter: "blur(15px)" },
            }}
            initial="hide"
            animate="show"
            exit="hide"
            transition={{ duration: 0.2 }}
            onClick={handleToggle}
          />
        </center>
        <AnimatePresence>
          {visibleMenu && (
            <motion.div
              className="container"
              variants={{
                show: { height: 500, opacity: 1 },
                hide: { height: 0, opacity: 0 },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{ type: "spring", duration: 0.5 }}
            >
              <center>
                <motion.img
                  className="close"
                  src="/close.png"
                  onClick={handleToggle}
                  alt="close img"
                  variants={{
                    show: { rotate: 0, opacity: 1, filter: "blur(0)" },
                    hide: { rotate: 360, opacity: 0, filter: "blur(10px)" },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  transition={{ duration: 0.3, type: "spring" }}
                />
                <h3 onClick={(_) => scrollDown(700)}>about</h3>
                <h3 onClick={(_) => scrollDown(1520)}>skills</h3>
                <h3 onClick={(_) => scrollDown(2440)}>work</h3>
                <h3 onClick={(_) => scrollDown(3837)}>contact</h3>
              </center>
              <div className="links">
                <a href="https://github.com/mm232323">
                  <img src="/github.png" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-qurany-5a07a2248/">
                  <img src="/linkedin.png" />
                </a>
                <a href="https://stackoverflow.com/users/22174749/mohammed-qurany">
                  <img src="/stack-overflow.png" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="seperator" />
      <section className="identifing">
        <div className="details">
          <h1 className="name">I&apos;m Mohammed Qurany</h1>
          <h1 className="job">web developer</h1>
          <p>& professional full stack developer</p>
        </div>
        <img src="/avatar.png" className="avatar" />
      </section>
      <section className="about">
        <h1>about</h1>
        <AnimatePresence>
          {((pageWidth > 1100 && scrollY >= 660) ||
            (pageWidth <= 1100 && scrollY >= 185)) && (
            <motion.div
              layout
              variants={{
                show: { opacity: 1, filter: "blur(0)", gap: "125px" },
                hide: { opacity: 0, filter: "blur(20px)", gap: "25px" },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="container"
            >
              <motion.p>
                I am a professional web developer with 2 years of experience
                working with various frameworks such as ReactJS, NextJS, nodeJS,
                expressJS, etc. I have successfully completed multiple projects
                and am constantly looking for new opportunities to collaborate
                and expand my skills. I believe that my expertise and experience
                could be a valuable asset to your team. If you are interested in
                discussing potential collaboration opportunities, please feel
                free to reach out to me at your convenience.
              </motion.p>
              <img src="/aboutPic.png" alt="about img" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section className="skills">
        <h1 className="title">Skills</h1>
        <AnimatePresence>
          {scrollY >= 1180 && (
            <motion.div
              className="root"
              variants={{ show: { height: 677 }, hide: { height: 0 } }}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{ duration: 0.5, type: "tween" }}
            />
          )}
        </AnimatePresence>
        <div className="container">
          {skills.map((skill, idx) => (
            <Skill key={skill.name} scrollY={scrollY} skill={skill} id={idx} />
          ))}
        </div>
      </section>
      <section
        className="work"
        style={{
          height:
            pageWidth > 965
              ? 50 + projects.length * 700
              : pageWidth > 550
              ? 50 + projects.length * 1030
              : 30 + projects.length * 760,
        }}
      >
        <h1 className="title">Work</h1>
        <AnimatePresence>
          {scrollY >= 2165 && (
            <motion.div className="container">
              {projects.map((project, idx) => (
                <Project id={idx} project={project} key={project.name} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <AnimatePresence>
        {scrollY >= 3500 && (
          <center>
            <motion.div
              className="contact"
              variants={{
                show: { opacity: 1, filter: "blur(0)", y: 0 },
                hide: { opacity: 0, filter: "blur(15px)", y: 50 },
              }}
              initial="hide"
              animate="show"
              exit="hide"
            >
              <h1>get in touch</h1>
              <div className="contact-details">
                <img src="/whatsapp.png" />
                <h4>20+ 01032578131</h4>
              </div>
              <div
                style={{
                  top: pageWidth >= 785 ? -110 : pageWidth >= 520 ? -70 : 15,
                }}
                className="contact-details"
              >
                <img src="/email.png" />
                <h4 style={pageWidth < 520 ? { fontSize: 14 } : {}}>
                  mohammed.qurany1@gmail.com
                </h4>
              </div>
              <a href="mailto:mohammed.qurany1@gmail.com">
                <button>message me</button>
              </a>
            </motion.div>
          </center>
        )}
      </AnimatePresence>
      <center>
        <div className="footer" style={{ top: scrollY < 3500 ? 665 : 40 }}>
          <p>by: Mohammed Qurany Ibrahim</p>
        </div>
      </center>
    </main>
  );
}

export default App;

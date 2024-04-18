import React, { useEffect, useRef } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Typed from "typed.js";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { FaFilePdf } from "react-icons/fa";
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","Web Developer"],
      startDelay: 100,
      typeSpeed: 140,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <span className="tagline">Welcome to my Portfolio</span>
      <div className="home__text-wrapper content">
        <h1>
          Hello, I'm Abhishek
          <br />
          <span ref={el}></span>
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact Me</button>
          
          <div>
            <div className="home__contact-me">
              <div className="home__contact-links">
                <a
                  href="mailto:abhishek.avin6@gmail.com"
                  className="home__contact-link"
                >
                  <HiOutlineMail size={30} className="animate-icon" />
                </a>
                <a
                  href="https://github.com/abhisheksingh66"
                  target="_blank" rel="noreferrer"
                  className="home__contact-link"
                >
                  <BsGithub size={28} className="animate-icon " />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-singh05/"
                  target="_blank" rel="noreferrer"
                  className="home__contact-link"
                >
                  <FaLinkedin size={28} className="animate-icon" />
                </a>

                {/* <a
                  href="https://drive.google.com/file/d/18hy-S9LXFaJZCSGCl4UQlIPwAgK9K7EB/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="home__contact-link"
                >
                  <FaFilePdf size={30} className="animate-icon" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

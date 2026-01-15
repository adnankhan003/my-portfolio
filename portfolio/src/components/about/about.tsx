import "./about1.css";

function About({ aboutRef }: any) {
  const colorBlue = "#018790";

  return (
    <>
      <div className="root-about" ref={aboutRef}>
        <div className="desc">
          <p className="header reveal">
            <img src="./icons/about.svg" alt="about" />
            About Me
          </p>
          <p className="first-text reveal">
            Hey, I am <strong>Adnan Khan</strong>, a{" "}
            <span style={{ color: colorBlue }}>backend-focused engineer </span>
            who enjoys building systems that are fast, reliable, and
            thoughtfully designed. I love turning complex requirements into
            clean, efficient solutions and constantly look for ways to improve
            performance, security, and overall developer experience.
          </p>
          <p className="second-text reveal">
            I currently work at{" "}
            <a
              target="_blank"
              href="https://www.jiocx.com/"
              style={{ color: colorBlue, textDecoration: "none" }}
            >
              Reliance - Jio Platforms Limited
            </a>{" "}
            a CPaaS Solutions for Telecommunication Services, where I contribute
            to <span style={{ color: colorBlue }}>backend architecture</span>{" "}
            and
            <span style={{ color: colorBlue }}>
              {" "}
              scalable system development
            </span>
            . I'm driven by curiosity, problem-solving, and the satisfaction of
            creating products that work smoothly at scale.
          </p>
          <p className="third-text reveal">
            Outside of work, I enjoy watching movies and playing games, which
            help me relax and spark creativity.
          </p>
        </div>
        <img
          className="table-img reveal"
          src="https://cdn.dribbble.com/userupload/22817914/file/original-4a0241412a084cc06b9ad72643d85773.gif"
          alt="Loading animation"
        />
      </div>
    </>
  );
}

export default About;

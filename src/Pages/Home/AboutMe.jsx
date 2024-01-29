export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="/img/about-me.png" // Make sure the path is relative to your public directory
          alt="Chandini's Photo"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm Chandini, a web developer with a passion for creating awesome online experiences. Currently in my third year of BTech studies at KIET, I've honed my skills in frontend and backend development, UI & UX design, and Webflow. With a knack for detail and a love for problem-solving, I aim to craft user-friendly and visually appealing websites. When I'm not coding, I strive to continuously expand my knowledge in the ever-evolving tech world. Let's connect and collaborate on exciting web projects!
          </p>
        </div>
      </div>
    </section>
  );
}

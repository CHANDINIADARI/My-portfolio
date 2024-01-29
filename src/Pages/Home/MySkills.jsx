import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title--heading"></p>
        <h2 className="skills--section--heading">MY SKILLS</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={data?.skills[0]?.src} alt="Product Chain" />
          </div>

          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{data?.skills[0]?.title}</h3>
            <p className="skills--section--description">
              I have a keen eye for creating engaging and user-friendly
              interfaces. My proficiency in HTML, CSS, JavaScript, and various
              frontend frameworks allows me to craft intuitive and visually
              appealing web experiences.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={data?.skills[1]?.src} alt="Backend Development" />
          </div>

          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{data?.skills[1]?.title}</h3>
            <p className="skills--section--description">
              I am well-versed in server-side technologies and database
              management. My skills in languages like Python, Node.js, and SQL
              enable me to build robust and scalable web applications.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={data?.skills[2]?.src} alt="UX/UI Design" />
          </div>

          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{data?.skills[2]?.title}</h3>
            <p className="skills--section--description">
              I have a strong understanding of user-centered design principles.
              I combine creativity with empathy to design interfaces that not
              only look beautiful but also provide exceptional user experiences.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={data?.skills[3]?.src} alt="Webflow Development" />
          </div>

          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{data?.skills[3]?.title}</h3>
            <p className="skills--section--description">
              I excel in using tools like Webflow to bring web designs to life,
              creating responsive and interactive websites with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

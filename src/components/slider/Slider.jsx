const Slider = ({ projects }) => {
  return (
    <div className="mox__profile-slider flex">
      <div className="mox__profile-slider_container flex">
        {projects.map((project, index) => (
          <div key={index} className="project-card flex">

            <div className="flex flex-col relative">
              <img
                className="project-img"
                src={project.image}
                alt={project.name}
              />

              {/* Accordion Trigger */}
              <button
                className="card-trigger"
                aria-expanded="false"
                aria-controls={`project--${index}`}
                onClick={(e) => {
                  const button = e.currentTarget;
                  const content = document.getElementById(`project--${index}`);

                  const isExpanded = button.getAttribute("aria-expanded") === "true";

                  button.setAttribute("aria-expanded", !isExpanded);
                  content.setAttribute("aria-hidden", isExpanded);
                }}
              />
            </div>

            {/* Accordion Content */}
            <div
              className="project-info"
              id={`project--${index}`}
              aria-hidden="true"
            >
              <div className="info-container">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>

                <div className="project-links">
                  <a
                    className="project__live-site"
                    href={project.live}
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="project__Github-site"
                    href={project.github}
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;

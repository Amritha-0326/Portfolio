import "./FunProjects.css";

const projects = [
  {
    title: "Aesthetic Egg Timer",
    subtitle: "Desktop UI Experiment · React + Electron",
    description:
      "A retro pixel-art style egg timer with three preset options, soft, runny, and hard. Built with React for the timer logic and UI, then packaged using Electron to run as a lightweight desktop application with a playful, nostalgic aesthetic.",
    tags: ["React", "Electron", "UI Design", "Desktop App", "Pixel Art"],
    learned:
      "How to combine React logic with Electron to create a desktop app, structure timer-based state effectively, and design a clear, fun interface without overcomplicating functionality.",
    icon: "🥚",
  },
  {
    title: "Aesthetic Weather App",
    subtitle: "API-Based Frontend Project",
    description:
      "Created an aesthetic weather application inspired by the Egg Timer’s visual style. The app fetches real-time weather data from the OpenWeatherMap API and supports city-based search, a custom color palette, and clear loading and error states.",
    tags: ["API Integration", "Frontend", "UI Design", "Async States"],
    learned:
      "Working with real-time data requires thoughtful handling of loading and error states. Consistent visual design helps make technical features feel friendly and approachable.",
    icon: "☁️",
  },
  //In progess projects...
//   {
//     title: "Voice UI Prototype",
//     subtitle: "Experimental Project",
//     description:
//       "Designed a voice-activated cooking assistant interface. Explored conversational UI patterns and learned how to design for non-visual interactions.",
//     tags: ["Voice UI", "Prototyping", "Innovation"],
//     learned:
//       "Designing for voice requires different thinking—clarity, brevity, and error handling are crucial.",
//     icon: "🎙️",
//   },
//   {
//     title: "Accessibility Redesign",
//     subtitle: "Personal Initiative",
//     description:
//       "Redesigned an existing website with accessibility in mind—proper contrast ratios, keyboard navigation, and screen reader compatibility.",
//     tags: ["Accessibility", "WCAG", "Inclusive Design"],
//     learned:
//       "Accessibility isn't optional—it's essential. Small changes can make huge impacts for users with disabilities.",
//     icon: "♿",
//   },
];

const FunProjects = () => {
  return (
    <section id="fun-projects" className="fun-projects-section">
      <div className="fun-projects-header">
        <h2>Fun Projects & Learning</h2>
        <p>
          Mini projects that helped me explore new tools, experiment with ideas,
          and grow as a designer
        </p>
      </div>

      <div className="fun-projects-grid">
        {projects.map((project, index) => (
          <div className="fun-project-card" key={index}>
            <div className="card-header">
              <div className="icon">{project.icon}</div>
              <div>
                <h3>{project.title}</h3>
                <span>{project.subtitle}</span>
              </div>
            </div>

            <p className="description">{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="learned">
              <strong>What I learned:</strong> {project.learned}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunProjects;

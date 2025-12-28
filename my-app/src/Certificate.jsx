import "./Certificate.css";
import certificateIllustration from "./certificate-illustration.png"

const certificates = [
  {
    title: "Foundations of UX Design Certificate",
    provider: "Google Career Certificates - Coursera",
    description:
    "Gained hands-on experience in user research with a hypothetical project, usability principles, and design thinking methodologies. Learned to integrate UX processes into agile product development to create user-centered digital solutions.",
    year: "Completed 2021",
    color: "green",
    link: "https://coursera.org/verify/8G87LVSUC5CC", 
  },
  {
    title: "UX Design Process Certificate",
    provider: "Google Career Certificates - Coursera",
    description: "Acquired practical experience in user research planning, data synthesis, problem definition, and ideation techniques. Developed skills to transform technical and business requirements into user-centered design opportunities.",
    year: "Completed 2023",
    color: "orange",
    link: "https://coursera.org/verify/HVDVFMEQLPZK",
  },
  {
    title: "Conduct UX Research and Test Early Concepts Certificate",
    provider: "Google Career Certificates - Coursera",
    description:
    "Developed practical skills in planning, conducting, and analyzing usability studies. Learned to create test plans, build low-fidelity prototypes, and evaluate early design concepts through user feedback to inform data-driven design decisions.",
    year: "Completed 2025",
    color: "dark",
    link: "https://coursera.org/verify/NM7EE4NTFUQG",
  },
  {
    title: "Unit Testing in React.js: Create a Unit Test Suite",
    provider: "Coursera",
    description:
      "Understanding user behavior, cognitive psychology, and interaction design principles.",
    year: "Completed 2025",
    color: "beige",
    link: "https://coursera.org/share/489f522143b954e11686213c8728e81f",
  },
  {
    title: "React Basics by Meta",
    provider: "Coursera",
    description:
    "In progress",
    year: "",
    color: "green",
    link: "",
  },
//   {
//     title: "",
//     provider: "",
//     description:"",
//     year: "",
//     color: "orange",
//     link: "",
//   },
];

export default function Certificate() {
  return (
    <section className="certificate-section" id="certificates">
      <h2>Certificates & Achievements</h2>
      <p className="certificate-subtitle">
        Continuous learning and professional development through recognized
        certifications and courses
      </p>

      <div className="certificate-grid">
        {certificates.map((item, index) => (
          <div key={index} className={`certificate-card ${item.color}`}>
            <img src={certificateIllustration} alt="Certificate-Illustration" className="certificate-icon" />
            <h3>{item.title}</h3>
            <h4>{item.provider}</h4>

            <p className="certificate-desc">{item.description}</p>
            <div className="certificate-footer">
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                    >
                        View Certificate →
                    </a>
                )}
                {item.year && (
                    <span className="certificate-year">{item.year}</span>
                )}
            </div>
          </div>
          
        ))}
      </div>
    
    </section>
  );
}

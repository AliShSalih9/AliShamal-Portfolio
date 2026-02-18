function About() {
  const aboutCards = [
    {
      title: "🧠 Experience",
      value: "+5 Years",
    },
    {
      title: "🎯 Focus",
      value: "Applications",
    },
    {
      title: "🚀 Goal",
      value: "Innovation",
    },
    {
      title: "💻 Stack",
      value: "Flutter",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I’m Ali Shamal Salih, a curious and passionate learner who loves
          exploring technology and problem-solving. I enjoy discovering new
          programming languages, frameworks, and tools, and constantly challenge
          myself to improve my skills. I believe in building solutions that are
          simple, elegant, and efficient. Outside of coding, I like reading,
          learning new things, and finding ways to make daily life and work more
          organized and creative. I am dedicated, disciplined, and always
          motivated to grow personally and professionally. I see every project
          or task as an opportunity to learn something new and push my limits.
        </p>
      </div>
      <div className="about-cards">
        {aboutCards.map((card, index) => (
          <div key={index} className="about-card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-value">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// Add hover effects via inline event handlers

export default About;

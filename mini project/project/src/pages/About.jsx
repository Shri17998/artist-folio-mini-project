function About() {
  return (
    <div className="container">
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About ArtFolio</h2>
            <p>
              ArtFolio was founded in 2025 with a simple mission: to create a platform where artists and designers can showcase their work, build professional portfolios, and connect with art enthusiasts around the world.
            </p>
            <p>
              Our platform provides a space for creative individuals to upload and display their artwork in a beautiful gallery format that highlights their creative vision. Whether you're a painter, photographer, digital artist, or any other type of visual creator, ArtFolio is designed to help you share your passion with the world.
            </p>
            <p>
              We believe that art has the power to inspire, challenge, and transform. By providing a platform for artists to share their work, we hope to foster a community of creativity and appreciation for the arts.
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Art Studio" />
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Team Member" />
            <div className="team-info">
              <h3>Sarah Johnson</h3>
              <p>Founder & Creative Director</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Team Member" />
            <div className="team-info">
              <h3>Michael Chen</h3>
              <p>Lead Developer</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Team Member" />
            <div className="team-info">
              <h3>Emily Rodriguez</h3>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Team Member" />
            <div className="team-info">
              <h3>David Kim</h3>
              <p>Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
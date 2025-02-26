import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function Home() {
  const featuresRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
      }
    }
  }, [])

  return (
    <div className="container">
      <section className="hero">
        <h1>Showcase Your Creative Vision</h1>
        <p>
          ArtFolio is a platform for artists and designers to showcase their work,
          build professional portfolios, and connect with art enthusiasts around the world.
        </p>
        <Link to="/upload" className="btn">Start Uploading</Link>
      </section>
      
      <section className="features" ref={featuresRef}>
        <div className="upload-section">
          <h2>Why Choose ArtFolio?</h2>
          <div style={{ marginTop: '20px' }}>
            <h3>Showcase Your Work</h3>
            <p>Upload and display your artwork in a beautiful gallery format that highlights your creative vision.</p>
            
            <h3 style={{ marginTop: '20px' }}>Build Your Portfolio</h3>
            <p>Create a professional portfolio that showcases your best work and helps you stand out in the creative industry.</p>
            
            <h3 style={{ marginTop: '20px' }}>Connect with Art Enthusiasts</h3>
            <p>Share your work with a community of art lovers, receive feedback, and grow your audience.</p>
          </div>
        </div>
      </section>

      <section className="gallery" style={{ padding: '40px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Featured Artworks</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Abstract Art"
              className="gallery-image"
            />
            <div className="gallery-info">
              <h3>Colorful Abstraction</h3>
              <p>A vibrant exploration of color and form.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Digital Art"
              className="gallery-image"
            />
            <div className="gallery-info">
              <h3>Digital Dreamscape</h3>
              <p>A digital artwork exploring surreal landscapes.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Photography"
              className="gallery-image"
            />
            <div className="gallery-info">
              <h3>Urban Exploration</h3>
              <p>Photography capturing the essence of city life.</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/gallery" className="btn">View All Artworks</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
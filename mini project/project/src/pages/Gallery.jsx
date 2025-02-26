import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Gallery({ artworks }) {
  const [visibleItems, setVisibleItems] = useState([])
  
  useEffect(() => {
    // Animate items appearing one by one
    const newVisibleItems = []
    artworks.forEach((artwork, index) => {
      setTimeout(() => {
        newVisibleItems.push(artwork.id)
        setVisibleItems([...newVisibleItems])
      }, 200 * index)
    })
  }, [artworks])

  return (
    <div className="container">
      <section className="gallery">
        <h2>Artwork Gallery</h2>
        
        {artworks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p>No artworks uploaded yet. Go to the Upload page to add your first artwork!</p>
            <Link to="/upload" className="btn" style={{ marginTop: '20px' }}>Upload Artwork</Link>
          </div>
        ) : (
          <div className="gallery-grid">
            {artworks.map((artwork) => (
              <div 
                key={artwork.id} 
                className="gallery-item"
                style={{ 
                  opacity: visibleItems.includes(artwork.id) ? 1 : 0,
                  transform: visibleItems.includes(artwork.id) ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="gallery-image"
                />
                <div className="gallery-info">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.description}</p>
                  <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>
                    Uploaded on {artwork.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Gallery
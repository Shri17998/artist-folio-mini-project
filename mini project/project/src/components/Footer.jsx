import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About ArtFolio</h3>
            <p>A platform for artists and designers to showcase their creative work, build portfolios, and connect with art enthusiasts.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/gallery">Gallery</Link></p>
            <p><Link to="/upload">Upload Artwork</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@artfolio.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Art Street, Creative City, AC 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ArtFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
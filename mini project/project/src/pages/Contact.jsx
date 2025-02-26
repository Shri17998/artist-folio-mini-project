import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container">
      <section className="contact-section">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            {isSubmitted ? (
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#d1fae5', 
                borderRadius: '4px', 
                marginTop: '20px',
                color: '#065f46',
                animation: 'fadeIn 0.5s ease-out'
              }}>
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                  />
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt">📍</i>
              <div>
                <h3>Our Location</h3>
                <p>123 Art Street, Creative City, AC 12345</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <i className="fas fa-phone">📞</i>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <i className="fas fa-envelope">✉️</i>
              <div>
                <h3>Email Address</h3>
                <p>info@artfolio.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <i className="fas fa-clock">🕒</i>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">LI</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Upload({ addArtwork }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [fileName, setFileName] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setFileName(selectedFile.name)
      
      // Create a preview URL for the selected image
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result)
      }
      fileReader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title || !file) {
      alert('Please provide a title and upload an image')
      return
    }
    
    setIsUploading(true)
    
    // Simulate upload delay
    setTimeout(() => {
      // Create a new artwork object
      const newArtwork = {
        id: Date.now(),
        title,
        description,
        imageUrl: previewUrl,
        date: new Date().toLocaleDateString()
      }
      
      // Add the artwork to the gallery
      addArtwork(newArtwork)
      
      // Reset the form
      setTitle('')
      setDescription('')
      setFile(null)
      setPreviewUrl('')
      setFileName('')
      setIsUploading(false)
      
      // Navigate to the gallery page
      navigate('/gallery')
    }, 1500)
  }

  // Animation for the upload form
  useEffect(() => {
    const formElements = document.querySelectorAll('.form-group')
    formElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 100 * index)
    })
  }, [])

  return (
    <div className="container">
      <section className="upload-section">
        <h2>Upload Your Artwork</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your artwork"
              required
            />
          </div>
          
          <div className="form-group" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your artwork (optional)"
            />
          </div>
          
          <div className="form-group" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
            <label>Upload Image</label>
            <div className="file-input-container">
              <label className="file-input-label">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
            {fileName && <div className="selected-file">Selected: {fileName}</div>}
          </div>
          
          {previewUrl && (
            <div className="form-group" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              <label>Preview</label>
              <div>
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '300px', 
                    marginTop: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          )}
          
          <div className="form-group" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
            <button 
              type="submit" 
              className="btn" 
              disabled={isUploading}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {isUploading ? 'Uploading...' : 'Upload Artwork'}
              {isUploading && (
                <span 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '30%',
                    background: 'rgba(255, 255, 255, 0.3)',
                    animation: 'loading 1.5s infinite linear',
                  }}
                />
              )}
            </button>
          </div>
        </form>
      </section>
      
      <style jsx="true">{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  )
}

export default Upload
# ArtFolio - Digital Portfolio for Artists

ArtFolio is a platform for artists and designers to showcase their creative work, build portfolios, and connect with art enthusiasts.

## Features

- Upload and showcase artwork with images, titles, and descriptions
- Browse gallery of uploaded artwork
- Responsive design for all device sizes
- Interactive UI with animations and transitions
- Contact form for inquiries
- About page with team information

## How to Run Locally

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation Steps

1. **Download and extract the project zip file**

2. **Navigate to the project directory**
   ```bash
   cd path/to/artfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - The application will be running at http://localhost:5173 (or the URL shown in your terminal)

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components for different routes
- `src/assets/` - Static assets like images
- `public/` - Public files that will be served as-is

## Technologies Used

- React.js
- React Router
- Vite
- CSS3 with animations

## License

This project is licensed under the MIT License - see the LICENSE file for details.
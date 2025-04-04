import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const extensions = [".jpg", ".jpeg", ".png"];
    const totalImages = 66;
  
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
      });
    };
  
    const fetchValidImages = async () => {
      const validImages = [];
  
      for (let i = 1; i <= totalImages; i++) {
        for (const ext of extensions) {
          const path = `/radioMessages/${i}${ext}`;
          const result = await loadImage(path);
          if (result) {
            validImages.push(result);
            break; // Stop checking other extensions for this number
          }
        }
      }
  
      setImages(validImages);
    };
  
    
    fetchValidImages();
  }, []);
  
  
  

  return (
    <div
      className="app"
      style={{
        backgroundImage: "url('/images/luxa.org-opacity-changed-._ferraribglargeredit.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="header">
        <div className="website-name">
          <h1>Forza Ferrari</h1>
        </div>
        <div className="submission-link">
          <a href="https://forms.gle/LNJuwDAxMhXmPCui8" className="user-submissions-link">
            Submit more!
          </a>
        </div>
      </header>

      {/* Paragraph */}
      <p className="forza-ferrari">Ferrari Words of Wisdom.</p>

      {/* Main Content */}
      <main className="main-content">
        <div className="image-gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image} alt={`Radio Message ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Next year is our year, right?</p>
      </footer>
    </div>
  );
};

export default App;

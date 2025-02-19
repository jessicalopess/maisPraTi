import React, { useState } from 'react';

function ImageGallery() {
  const images = [
    'https://placehold.co/150/0000FF/FFFFFF',
    'https://placehold.co/150/FF0000/FFFFFF',
    'https://placehold.co/150/00FF00/FFFFFF'
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            style={{ width: '100px', margin: '5px', cursor: 'pointer' }}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div>
          <h3>Visualização Ampliada</h3>
          <img src={selectedImage} alt="Visualização" style={{ width: '300px' }} />
          <button onClick={() => setSelectedImage(null)}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;

import React from 'react';

const ImageGallery = ({ images, onEdit, onDelete }) => {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((item, index) => (
        <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
          <img
            src={item.image}
            alt={item.description}
            style={{ width: '200px', height: 'auto' }}
          />
          <p>{item.description}</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

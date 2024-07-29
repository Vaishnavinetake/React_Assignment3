import React, { useState } from 'react';
import ImageUploader from './PicUpload';
import ImageGallery from './PicGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleUpload = (newImage) => {
    if (editIndex !== null) {
      // Update existing image
      const updatedImages = images.map((item, index) =>
        index === editIndex ? newImage : item
      );
      setImages(updatedImages);
      setEditIndex(null);
    } else {
      // Add new image
      setImages([...images, newImage]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div>
      <h1>Image Upload and Gallery</h1>
      <ImageUploader onUpload={handleUpload} editIndex={editIndex} />
      <ImageGallery images={images} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;

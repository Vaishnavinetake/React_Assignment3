import React, { useState, useEffect } from 'react';

const ImageUploader = ({ onUpload, editIndex }) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      const existingImage = document.querySelectorAll('.image-gallery img')[editIndex];
      if (existingImage) {
        setImage(existingImage.src);
        setDescription(existingImage.alt);
      }
    } else {
      setImage(null);
      setDescription('');
    }
  }, [editIndex]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image && description) {
      onUpload({ image, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write a description"
        />
      </div>
      <button type="submit">{editIndex !== null ? 'Update' : 'Upload'}</button>
    </form>
  );
};

export default ImageUploader;

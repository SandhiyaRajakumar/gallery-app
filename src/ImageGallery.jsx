import React, { useState, useMemo, useCallback } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'https://via.placeholder.com/150', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/150', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/150', alt: 'Image 3' },
    // Add more images as needed
  ]);

  const [filter, setFilter] = useState('');

  const filteredImages = useMemo(() => {
    return images.filter(image => image.alt.toLowerCase().includes(filter.toLowerCase()));
  }, [images, filter]);

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter images by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredImages.map(image => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.src} alt={image.alt} style={{ width: '150px', height: '150px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

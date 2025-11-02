function ImageCarousel({ images, currentImageIndex, thumbnailClick }) {

  return (
    <>
      <div className="thumbnail-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${
              currentImageIndex === index ? "active" : ""
            }`}
            onClick={() => thumbnailClick(index)}
          >
            <img src={img.thumbnail} alt={`product thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageCarousel

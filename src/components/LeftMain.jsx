import ImageCarousel from "./ImageCarousel";
import CarouselBtns from "./CarouselBtns";

function LeftMain({
  setIsImageVisible,
  images,
  currentImageIndex,
  thumbnailClick,
  handlePrevious,
  handleNext,
}) {
  function handleImageEnlarge() {
    setIsImageVisible(true);
  }

  return (
    <section className="main-left">
      <div className="image-wrapper">
        <img
          src={images[currentImageIndex].image}
          alt="product image"
          className="displayed-img"
          onClick={handleImageEnlarge}
        />
        <CarouselBtns handlePrevious={handlePrevious} handleNext={handleNext} />
      </div>
      <ImageCarousel
        images={images}
        currentImageIndex={currentImageIndex}
        thumbnailClick={thumbnailClick}
      />
    </section>
  );
}

export default LeftMain;

import ImageCarousel from "./ImageCarousel";
import CarouselBtns from "./CarouselBtns";

function EnlargedImage({
  images,
  currentImageIndex,
  thumbnailClick,
  setIsImageVisible,
  handlePrevious,
  handleNext,
}) {
  function handleClose() {
    setIsImageVisible(false);
  }

  return (
    <>
      <div className="enlarge-overlay" onClick={handleClose}>
        <div className="enlarge-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={handleClose}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="hsl(223, 64%, 98%)"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <div className="image-wrapper">
            <img
              src={images[currentImageIndex].image}
              alt="product image"
              className="enlarged-img"
            />
            <CarouselBtns
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
          <div className="enlarged-carousel-wrapper">
            <ImageCarousel
              images={images}
              currentImageIndex={currentImageIndex}
              thumbnailClick={thumbnailClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnlargedImage;

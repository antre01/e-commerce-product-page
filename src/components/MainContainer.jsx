import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

function MainContainer({
  quantity,
  setQuantity,
  setTotal,
  setIsSummaryVisible,
  setIsQuantityVisible,
  isImageVisible,
  setIsImageVisible,
  images,
  currentImageIndex,
  thumbnailClick,
  handlePrevious,
  handleNext,
}) {
  return (
    <main className="main-container">
      <LeftMain
        isImageVisible={isImageVisible}
        setIsImageVisible={setIsImageVisible}
        images={images}
        currentImageIndex={currentImageIndex}
        thumbnailClick={thumbnailClick}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <RightMain
        quantity={quantity}
        setQuantity={setQuantity}
        setTotal={setTotal}
        setIsSummaryVisible={setIsSummaryVisible}
        setIsQuantityVisible={setIsQuantityVisible}
      />
    </main>
  );
}

export default MainContainer;

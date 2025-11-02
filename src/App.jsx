import { useState } from "react";
import "../../dist/style.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import EnlargedImage from "./components/EnlargedImage";

import image1 from "./assets/image-product-1.jpg";
import image2 from "./assets/image-product-2.jpg";
import image3 from "./assets/image-product-3.jpg";
import image4 from "./assets/image-product-4.jpg";
import image1Th from "./assets/image-product-1-thumbnail.jpg";
import image2Th from "./assets/image-product-2-thumbnail.jpg";
import image3Th from "./assets/image-product-3-thumbnail.jpg";
import image4Th from "./assets/image-product-4-thumbnail.jpg";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isQuantityVisible, setIsQuantityVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const images = [
    {
      image: image1,
      thumbnail: image1Th,
    },
    {
      image: image2,
      thumbnail: image2Th,
    },
    {
      image: image3,
      thumbnail: image3Th,
    },
    {
      image: image4,
      thumbnail: image4Th,
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function thumbnailClick(index) {
    setCurrentImageIndex(index);
  }

  function handlePrevious() {
    if (currentImageIndex > 0) {
      thumbnailClick(currentImageIndex - 1);
    } else {
      thumbnailClick(images.length - 1);
    }
  }

  function handleNext() {
    if (currentImageIndex < images.length - 1) {
      thumbnailClick(currentImageIndex + 1);
    } else {
      thumbnailClick(0);
    }
  }

  return (
    <>
      <Navbar
        quantity={quantity}
        setQuantity={setQuantity}
        total={total}
        setTotal={setTotal}
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        isSummaryVisible={isSummaryVisible}
        setIsSummaryVisible={setIsSummaryVisible}
        isQuantityVisible={isQuantityVisible}
        setIsQuantityVisible={setIsQuantityVisible}
      />
      <div className="content-wrapper">
        <MainContainer
          quantity={quantity}
          setQuantity={setQuantity}
          total={total}
          setTotal={setTotal}
          setIsSummaryVisible={setIsSummaryVisible}
          setIsCartVisible={setIsSummaryVisible}
          isQuantityVisible={isQuantityVisible}
          setIsQuantityVisible={setIsQuantityVisible}
          isImageVisible={isImageVisible}
          setIsImageVisible={setIsImageVisible}
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          thumbnailClick={thumbnailClick}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>

      {isImageVisible && (
        <EnlargedImage
          isImageVisible={isImageVisible}
          setIsImageVisible={setIsImageVisible}
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          thumbnailClick={thumbnailClick}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </>
  );
}

export default App;

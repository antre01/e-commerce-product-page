import QuantityBtns from "./QuantityBtns";
import AddToCartBtn from "./AddToCartBtn";

function RightMain({ quantity, setQuantity, setTotal, setIsSummaryVisible, setIsQuantityVisible }) {
  return (
    <section className="main-right">
      <div className="product-info">
        <span className="company">SNEAKER COMPANY</span>
        <h1>
          Fall Limited Edition
          <br />
          Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear comapnion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price">
        <h2>
          $125.00 <span className="discount">50%</span>
        </h2>
        <h3>
          <s>$250.00</s>
        </h3>
      </div>
      <div className="buttons">
        <QuantityBtns quantity={quantity} setQuantity={setQuantity} />
        <AddToCartBtn
          quantity={quantity}
          setTotal={setTotal}
          setIsSummaryVisible={setIsSummaryVisible}
          setIsQuantityVisible={setIsQuantityVisible}
        />
      </div>
    </section>
  );
}

export default RightMain;

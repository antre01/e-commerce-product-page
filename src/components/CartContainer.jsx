import image1Th from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";

function CartContainer({
  isCartVisible,
  isSummaryVisible,
  total,
  quantity,
  handleCartShow,
  handleCartHide,
  handleCartReset,
}) {
  return (
    <>
      <div
        className={`cart-container ${isCartVisible ? "visible" : ""}`}
        onMouseEnter={handleCartShow}
        onMouseLeave={handleCartHide}
      >
        <h4>Cart</h4>
        <hr />

        {isSummaryVisible ? (
          <section className="cart-wrapper">
            <div className="summary">
              <img
                src={image1Th}
                alt="product thumbnail"
                className="thumbnail"
              />
              <article>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {quantity} <span>${total.toFixed(2)}</span>
                </p>
              </article>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="delete-icon"
                onClick={handleCartReset}
              />
            </div>
            <button className="checkout-btn">Checkout</button>
          </section>
        ) : (
          <div className="empty-cart-wrapper">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartContainer;

import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";

function QuantityBtns({ quantity, setQuantity }) {
  
  function incrementHandle() {
    setQuantity(quantity + 1);
  }

  function decrementHandle() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="quantity-btn">
      <button className="decrease" onClick={decrementHandle}>
        <img src={minus} alt="minus icon" />
      </button>
      <span className="current-quantity">{quantity}</span>
      <button className="increase" onClick={incrementHandle}>
        <img src={plus} alt="plus icon" />
      </button>
    </div>
  );
}

export default QuantityBtns;

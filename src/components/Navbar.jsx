import { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import userAvatar from "../assets/image-avatar.png";

import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import CartContainer from "./CartContainer";

function Navbar({
  quantity,
  setQuantity,
  total,
  setTotal,
  isCartVisible,
  isSummaryVisible,
  setIsSummaryVisible,
  setIsCartVisible,
  isQuantityVisible,
  setIsQuantityVisible,
}) {
  const hideTimeoutRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleCartReset() {
    setQuantity(0);
    setTotal(0);
    setIsSummaryVisible(false);
    setIsQuantityVisible(false);
  }

  function handleCartShow() {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsCartVisible(true);
  }

  function handleCartHide() {
    hideTimeoutRef.current = setTimeout(() => {
      setIsCartVisible(false);
    }, 200);
  }

  function handleLogoReload() {
    window.location.reload();
  }

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function handleCartToggle() {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
    setIsCartVisible(!isCartVisible)
  }

  function handleCartClose() {
    setIsCartVisible(false)
  }

  return (
    <header className="navbar">
      <section className="navbar__left">
        <img
          src={menuIcon}
          alt="menu icon"
          className="menu-icon"
          onClick={handleMenuOpen}
        />
        <img src={logo} alt="sneakers logo" onClick={handleLogoReload} />

        {isMenuOpen && (
          <div className="menu-overlay" onClick={handleMenuClose}></div>
        )}

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <img
            src={closeIcon}
            alt="close menu icon"
            className="close-icon"
            onClick={handleMenuClose}
          />
          <li className="nav-link-el">Collections</li>
          <li className="nav-link-el">Men</li>
          <li className="nav-link-el">Women</li>
          <li className="nav-link-el">About</li>
          <li className="nav-link-el">Contact</li>
        </ul>
      </section>
      <section className="navbar__right">
        {isCartVisible && (
          <div className="cart-overlay" onClick={handleCartClose}></div>
        )}
        <div
          className="cart"
          onMouseEnter={handleCartShow}
          onMouseLeave={handleCartHide}
          onClick={handleCartToggle}
        >
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="cart-icon"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          {isQuantityVisible && <div className="quantity-icon">{quantity}</div>}
        </div>
        <img src={userAvatar} alt="user avatar" className="avatar" />
        <CartContainer
          isCartVisible={isCartVisible}
          isSummaryVisible={isSummaryVisible}
          total={total}
          handleCartShow={handleCartShow}
          handleCartHide={handleCartHide}
          handleCartReset={handleCartReset}
          quantity={quantity}
        />
      </section>
    </header>
  );
}

export default Navbar;

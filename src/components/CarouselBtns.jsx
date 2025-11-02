function CarouselBtns({ handlePrevious, handleNext }) {

  return(
    <div className="carousel-btns">
              <button className="previous-icon" onClick={handlePrevious}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <button className="next-icon" onClick={handleNext}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
  )
}

export default CarouselBtns
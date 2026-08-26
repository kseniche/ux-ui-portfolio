import { useState } from "react";

function Carousel({
  slides,
  altPrefix = "Project",
  labels,
  variant = "default",
}) {
  const [current, setCurrent] = useState(0);

  if (!slides?.length) {
    return null;
  }

  const prefix =
    variant === "crm"
      ? "crm-carousel"
      : "carousel";

  const dividerClass =
    variant === "crm"
      ? `${prefix}__slash`
      : `${prefix}__divider`;

  const hasMultipleSlides = slides.length > 1;

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const alt = labels?.[current]
    ? `${altPrefix}: ${labels[current]}`
    : `${altPrefix} ${current + 1}`;

  return (
    <div className={prefix}>

      <div className={`${prefix}__viewport`}>

        {variant === "crm" ? (
          <img
            key={slides[current]}
            src={slides[current]}
            alt={alt}
            className={`${prefix}__image carousel__fade`}
          />
        ) : (
          <div
            key={slides[current]}
            className={`${prefix}__slide carousel__fade`}
          >
            <img
              src={slides[current]}
              alt={alt}
            />
          </div>
        )}

      </div>


      {hasMultipleSlides && (
        <div className={`${prefix}__bottom`}>

          <div className={`${prefix}__counter`}>

            <span>
              {String(current + 1).padStart(2, "0")}
            </span>

            <span className={dividerClass}>
              /
            </span>

            <span>
              {String(slides.length).padStart(2, "0")}
            </span>

            {labels?.[current] && (
              <span className={`${prefix}__label`}>
                {labels[current]}
              </span>
            )}

          </div>


          <div className={`${prefix}__controls`}>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Carousel;
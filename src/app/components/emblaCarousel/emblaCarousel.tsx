"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/images/login-img-one.jpg"
            width={500}
            height={100}
            alt="doctor pics"
            className="w-[100%]"
          />
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src="/images/login-img-two.jpg"
            width={500}
            height={500}
            alt="doctor pics"
            className="w-[100%]"
          />
        </div>
        <div className="embla__slide">
        <Image
            src="/images/login-img-three.jpg"
            width={500}
            height={500}
            alt="doctor pics"
            className="w-[100%] "
          />
        </div>
        <div className="embla__slide">
          <Image
            src="/images/login-img-one.jpg"
            width={500}
            height={500}
            alt="doctor pics"
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

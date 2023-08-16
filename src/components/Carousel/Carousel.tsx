import { FC } from 'react';
import cn from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

interface ArrowsProps {
  className?: string;
  onClick?: () => void;
}

const NextArrow: FC<ArrowsProps> = ({ className, onClick }) => {
  return <div className={cn(className, styles.next_arrow)} onClick={onClick} />;
};

const PrevArrow: FC<ArrowsProps> = ({ className, onClick }) => {
  return <div className={cn(className, styles.prev_arrow)} onClick={onClick} />;
};
const settingsWithArrows = {
  className: `${styles.slider}`,
  infinite: true,
  lazyLoad: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 6000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1430,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 470,

      settings: {
        slidesToShow: 1,
        dots: true,
        dotsClass: cn('slick-dots', styles.dotsBelow),
        arrows: false,
      },
    },
  ],
};

const settingsWithDots = {
  infinite: true,
  lazyLoad: true,
  dots: true,
  dotsClass: cn('slick-dots', styles.dots),
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 15000,
  arrows: false,
  pauseOnHover: true,
};

const settings = {
  infinite: true,
  lazyLoad: true,
  dots: false,
  fade: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 15000,
  arrows: false,
  pauseOnHover: true,
};

interface CarouselProps {
  children: React.ReactNode;
  arrows?: boolean;
  dots?: boolean;
  className?: string;
  asNavFor?: boolean;
  refs?: (slider) => void;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  arrows,
  dots,
  className,
  asNavFor,
  refs,
}) => {
  const carouselSettings = arrows ? settingsWithArrows : dots ? settingsWithDots : settings;
  return (
    <Slider {...carouselSettings} className={className} asNavFor={asNavFor} ref={refs}>
      {children}
    </Slider>
  );
};

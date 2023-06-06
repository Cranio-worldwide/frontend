import cn from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { FC } from 'react';

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={cn(className, styles.next_arrow)}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={cn(className, styles.prev_arrow)}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
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
        dotsClass: `slick-dots ${styles.dotsBelow}`,
        arrows: false,
      },
    },
  ],
};

const settings = {
  infinite: true,
  lazyLoad: true,
  dots: true,
  dotsClass: `slick-dots ${styles.dots}`,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
};

interface IProps {
  children: React.ReactNode;
  arrows?: boolean;
  className?: string;
}

export const Carousel: FC<IProps> = ({ children, arrows, className }) => {
  return arrows ? (
    <Slider {...settingsWithArrows} className={className}>
      {children}
    </Slider>
  ) : (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};

import cn from 'classnames';
import Slider from 'react-slick';
import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { news } from 'src/utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

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
const settings = {
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
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 470,

      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};
export default function Carousel({ children }) {
  return <Slider {...settings}>{children}</Slider>;
}

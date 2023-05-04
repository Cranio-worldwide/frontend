import cn from 'classnames';
import Slider from 'react-slick';
import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { news } from 'src/utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './News.module.scss';

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
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '70px',
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '30px',
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function News() {
  return (
    <SectionContainer className={styles.container}>
      <SectionTitle>News</SectionTitle>
      <Slider {...settings}>
        {news.map((piece) => (
          <NewsPiece key={piece.id} photo={piece.photo.src} title={piece.title} />
        ))}
      </Slider>
    </SectionContainer>
  );
}

import { Component } from 'react';
import cn from 'classnames';
import { NewsPiece } from '../NewsPiece/NewsPiece';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { news } from 'src/utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './News.module.scss';
import { SectionTitle } from '../ui/SectionTitle/SectionTitle';

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={cn(className, styles.next_arrow)}
      style={{
        ...style,
        display: 'block',

        transform: 'translate(0, -120%)',
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
        display: 'block',
        transform: 'translate(0, -120%)',
      }}
      onClick={onClick}
    />
  );
}

export default class News extends Component {
  render() {
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
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <SectionContainer className={styles.container}>
        <SectionTitle>News</SectionTitle>
        <Slider {...settings}>
          {news.map((piece) => (
            <NewsPiece key={piece.id} photo={piece.photo} title={piece.title} />
          ))}
        </Slider>
      </SectionContainer>
    );
  }
}

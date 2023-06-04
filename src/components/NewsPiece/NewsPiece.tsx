import styles from './NewsPiece.module.scss';
import Image from 'next/image';

interface IProps {
  photo: string;
  title: string;
}

export const NewsPiece: React.FC<IProps> = ({ photo, title }) => {
  return (
    <div className={styles.newspiece}>
      <div className={styles.image_container}>
        <Image
          src={photo}
          alt="Изображение к новости"
          width="376"
          height="257"
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

import Image from 'next/image';
import styles from './NewsPiece.module.scss';

interface IProps {
  photo: string;
  title: string;
}

export const NewsPiece: React.FC<IProps> = ({ photo, title }) => {
  return (
    <div className={styles.newspiece}>
      <Image
        src={photo}
        alt="Изображение к новости"
        className={styles.image}
        width="376"
        height="257"
      />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

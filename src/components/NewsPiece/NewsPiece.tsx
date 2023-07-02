import Link from 'next/link';
import styles from './NewsPiece.module.scss';
import Image from 'next/image';

interface IProps {
  photo: string;
  title: string;
  path: string;
}

export const NewsPiece: React.FC<IProps> = ({ photo, title, path }) => {
  return (
    <div className={styles.newspiece}>
      <div className={styles.image_container}>
        <Link href={`/news/${path.toLowerCase()}`}>
          <Image
            src={photo}
            alt="Изображение к новости"
            width="376"
            height="257"
            className={styles.image}
          />
        </Link>
      </div>

      <Link href={`/news/${path.toLowerCase()}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  );
};

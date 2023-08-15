import Link from 'next/link';
import styles from './NewsPiece.module.scss';
import Image from 'next/image';
import { NewsPieceType } from '@/shared/types';

interface IProps {
  piece: NewsPieceType;
}

export const NewsPiece: React.FC<IProps> = ({ piece }) => {
  return (
    <Link href={`/news/${piece.id}`} className={styles.newspiece}>
      <div className={styles.image_container}>
        <Image
          src={piece.picture}
          alt="Изображение к новости"
          width="376"
          height="257"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <h3 className={styles.title}>{piece.title}</h3>
    </Link>
  );
};

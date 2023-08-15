import VKIcon from '@/assets/vk.svg';
import InstIcon from '@/assets/inst.svg';
import TGIcon from '@/assets/tg.svg';
import cn from 'classnames';
import styles from './SocialMediaIcons.module.scss';

interface Props {
  className?: string;
  linkClass?: string;
}

export const SocialMediaIcons: React.FC<Props> = ({ className, linkClass }) => {
  return (
    <div className={cn(styles.sm_block, className)}>
      <a href="#" target="_blank" rel="noopener noreferrer" className={cn(styles.link, linkClass)}>
        <VKIcon className={styles.icon} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className={cn(styles.link, linkClass)}>
        <InstIcon className={styles.icon} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className={cn(styles.link, linkClass)}>
        <TGIcon className={styles.icon} />
      </a>
    </div>
  );
};

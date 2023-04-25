import cn from 'classnames';
import styles from './SectionContainer.module.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<IProps> = ({ children, className }) => (
  <div className={cn(styles.container, className)}>{children}</div>
);

import styles from './ModalItem.module.scss';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ModalItem: React.FC<IProps> = ({ children, onClick }: IProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};

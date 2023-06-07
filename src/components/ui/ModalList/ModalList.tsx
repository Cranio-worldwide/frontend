import styles from './ModalList.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const ModalList: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};

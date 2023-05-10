import Link from 'next/link';
import { ModalList } from '../ui/ModalList/ModalList';
import { ModalItem } from '../ui/ModalList/ModalItem/ModalItem';

type item = {
  text: string;
  href?: string;
};

interface IProps {
  items: Array<item>;
  onClose: () => void;
}

export const MenuDropdown: React.FC<IProps> = ({ items, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <ModalList>
      {items.map(({ text, href }) => (
        <ModalItem key={text}>
          <Link onClick={handleClick} key={text + href} href={href}>
            {text}
          </Link>
        </ModalItem>
      ))}
    </ModalList>
  );
};

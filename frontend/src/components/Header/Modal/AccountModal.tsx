import { BgImage, RigthModal } from 'components';

import { tilesBottomImg } from 'assets';

import { Content } from './Content';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const AccountModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <nav className={styles.container}>
        <Content setIsOpen={setIsOpen} />
        <BgImage image={tilesBottomImg} />
      </nav>
    </RigthModal>
  );
};

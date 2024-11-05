import { RigthModal } from 'components';

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
        <img src={tilesBottomImg} loading="lazy" className="bottom-0 left-0 absolute w-full z--1" />
      </nav>
    </RigthModal>
  );
};

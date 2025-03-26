import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Clamp, Filters, Indicator } from 'components';

import { ApplicationModal } from './Modal';

import styles from './styles.module.scss';

export const Applications = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <ApplicationModal isOpen={modalOpen} setIsOpen={() => setModalOpen((v) => !v)} />
      <Filters handleCreate={() => {}} />
      <section className={styles.list}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Application key={i} handleModalOpen={() => setModalOpen((v) => !v)} />
          ))}
      </section>
    </div>
  );
};

interface Props {
  handleModalOpen: () => void;
}

const Application = ({ handleModalOpen }: Props) => {
  const { t } = useTranslation(['common']);
  return (
    <div className={styles.item}>
      <header className={styles.header}>
        <Clamp clamp={2}>
          <b>Header header header</b>
        </Clamp>
        <Indicator>Active</Indicator>
      </header>
      <Clamp clamp={5} className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae, sed placeat voluptatum molestias
        consequatur labore aliquid atque modi fugiat aliquam ullam mollitia eos nesciunt nam quam tenetur iusto eligendi
        quibusdam eum, veritatis deserunt? Optio explicabo debitis fugit consequuntur asperiores recusandae autem quo
        corrupti, sunt necessitatibus dolor suscipit vel nisi animi ratione facilis magni placeat alias laboriosam
        laborum ducimus. Voluptatum fugit maxime itaque delectus libero quisquam suscipit debitis recusandae accusamus
        beatae ad odio soluta reiciendis aut eligendi, dolor quas velit officiis eius quod. Animi autem magni impedit
        odio laborum blanditiis consectetur sit asperiores dolorem sequi doloremque quae architecto, dignissimos quod?
      </Clamp>
      <div className={styles.actions}>
        <Button buttonType={'transparent'}>{t('common:buttons.finishChecking')}</Button>
        <Button onClick={handleModalOpen}>{t('common:buttons.open')}</Button>
      </div>
    </div>
  );
};

import { useMemo } from 'react';

import { cx, ICargo } from 'features';

import styles from './styles.module.scss';
import { Indicator } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  cargos: ICargo[];

  activeCargoId?: number;
  setOpenCargo: (id: number) => void;
}

export const CargoList = ({ cargos, activeCargoId, setOpenCargo }: Props) => {
  const memoUsers = useMemo(() => {
    return cargos.map((cargo) => (
      <Cargo key={cargo.id} activeCargoId={activeCargoId} setOpenCargo={setOpenCargo} {...cargo} />
    ));
  }, [cargos, activeCargoId, setOpenCargo]);

  return <section className={styles.container}>{memoUsers}</section>;
};

interface CargoProps extends ICargo {
  activeCargoId?: number;
  setOpenCargo: (id: number) => void;
}

const Cargo = ({ activeCargoId, id, setOpenCargo, name, size, packaging, loadApproach, loadMethod }: CargoProps) => {
  const { t } = useTranslation('common');

  return (
    <button className={cx(styles.item, activeCargoId === id && styles.active)} onClick={() => setOpenCargo(id)}>
      <span>#{id}</span>
      <b>{name}</b>
      <Indicator type="blue">{`${size.width}x${size.height}x${size.depth}`}</Indicator>
      <Indicator type="blue">{t('gramm', {value: size.weight})}</Indicator>
      <Indicator type="border">{packaging}</Indicator>
      <Indicator type="border">{loadApproach}</Indicator>
      <Indicator type="border">{loadMethod}</Indicator>
    </button>
  );
};

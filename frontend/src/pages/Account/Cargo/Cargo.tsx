import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { cx, ICargo } from 'features';
import { Filters } from 'components';

import styles from './styles.module.scss';
import { useGetCargosQuery } from 'store/api';
import { CargoList } from './CargoList';
import { ActiveCargo } from './ActiveCargo';

export const Cargo = () => {
  const location = useLocation();
  const { data: cargos } = useGetCargosQuery();
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [openCargo, setOpenCargo] = useState<number>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setOpenCargo(undefined);
  }, [location.pathname]);

  useEffect(() => {
    const userId = searchParams.get('c');
    if (userId) {
      setOpenCargo(Number(userId));
    }
  }, [searchParams]);

  const handleCreateCargoStatus = () => {
    setIsCreate(v => !v);
  };

  const onCreateCargo = (id: ICargo['id']) => {
    handleCreateCargoStatus();
    handleOpenCargo(id);
  };

  const handleOpenCargo = useCallback(
    (id: number) => {
      setOpenCargo(id);
      setIsCreate(false);

      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.set('c', String(id));

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const activeCargo = (cargos || []).find((cargo) => cargo.id === openCargo);

  return (
    <div className={cx(styles.container, (isCreate || openCargo !== undefined) && styles.grid)}>
      <div className={styles.list}>
        <Filters handleCreate={handleCreateCargoStatus} />
        <CargoList cargos={cargos || []} activeCargoId={openCargo} setOpenCargo={handleOpenCargo} />
      </div>
      {(isCreate || openCargo !== undefined) && (
        <ActiveCargo
          onCreate={onCreateCargo}
          isCreate={isCreate}
          cargo={isCreate ? CargoInit : (activeCargo || CargoInit)}
          closeActiveCargo={() => {
            setIsCreate(false);
            setOpenCargo(undefined);
          }}
        />
      )}
    </div>
  );
};

const CargoInit: ICargo = {
  id: 0,
  loadApproach: 'FTL',
  loadMethod: 'ABOVE',
  name: '',
  packaging: 'BAG',
  size: {
    depth: null,
    height: null,
    id: null,
    weight: null,
    width: null,
  },
};

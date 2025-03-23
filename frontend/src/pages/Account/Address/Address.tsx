import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { cx, IAddress } from 'features';
import { Filters } from 'components';

import styles from './styles.module.scss';
import { useGetAddressesQuery } from 'store/api/addressApi';
import { AddressesList } from './AddressesList';
import { ActiveAddress } from './ActiveAddress';

export const Address = () => {
  const location = useLocation();
  const { data: addresses } = useGetAddressesQuery();
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [openAddress, setOpenAddress] = useState<number>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setOpenAddress(undefined);
  }, [location.pathname]);

  useEffect(() => {
    const userId = searchParams.get('a');
    if (userId) {
      setOpenAddress(Number(userId));
    }
  }, [searchParams]);

  const handleCreateAddressStatus = () => {
    setIsCreate((v) => !v);
  };

  const onCreateAddress = (id: IAddress['id']) => {
    handleCreateAddressStatus();
    handleOpenAddress(id);
  };

  const handleOpenAddress = useCallback(
    (id: number) => {
      setOpenAddress(id);
      setIsCreate(false);

      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.set('a', String(id));

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const activeAddress = (addresses || []).find((address) => address.id === openAddress);

  return (
    <div className={cx(styles.container, openAddress && styles.grid)}>
      <div className={styles.list}>
        <Filters handleCreate={handleCreateAddressStatus} />
        <AddressesList addresses={addresses || []} activeAddressId={openAddress} setOpenAddress={handleOpenAddress} />
      </div>
      {((openAddress && activeAddress) || isCreate) && (
        <ActiveAddress
          onCreate={onCreateAddress}
          isCreate={isCreate}
          address={isCreate ? AddressInit : activeAddress || AddressInit}
          closeActiveAddress={() => setOpenAddress(undefined)}
        />
      )}
    </div>
  );
};

const AddressInit = {
  apartment: 0,
  cityName: '',
  countryName: '',
  house: 0,
  id: 0,
  phoneNumber: '',
  street: '',
};

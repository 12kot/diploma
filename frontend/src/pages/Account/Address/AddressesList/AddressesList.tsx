import { useMemo } from 'react';

import { cx, IAddress } from 'features';

import styles from './styles.module.scss';

interface Props {
  addresses: IAddress[];

  activeAddressId?: number;
  setOpenAddress: (id: number) => void;
}

export const AddressesList = ({ addresses, activeAddressId, setOpenAddress }: Props) => {
  const memoUsers = useMemo(() => {
    return addresses.map((address) => (
      <Address key={address.id} activeAddressId={activeAddressId} setOpenAddress={setOpenAddress} {...address} />
    ));
  }, [addresses, activeAddressId, setOpenAddress]);

  return <section className={styles.container}>{memoUsers}</section>;
};

interface AddressProps extends IAddress {
  activeAddressId?: number;
  setOpenAddress: (id: number) => void;
}

const Address = ({ activeAddressId, id, setOpenAddress, countryName, cityName, street, apartment }: AddressProps) => {
  return (
    <button className={cx(styles.item, activeAddressId === id && styles.active)} onClick={() => setOpenAddress(id)}>
      <b>
        {countryName}, {cityName}, {street}, {apartment}
      </b>
    </button>
  );
};

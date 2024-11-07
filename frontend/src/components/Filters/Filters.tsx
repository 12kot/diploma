import { Button, Indicator } from 'components';

import styles from './styles.module.scss';

const filters = [
  {
    id: 1,
    name: 'All',
    count: 256,
    value: 'all',
  },
  {
    id: 2,
    name: 'Filter 1',
    count: 0,
    value: 'Filter 1',
  },
  {
    id: 3,
    name: 'Filter 2',
    count: 3,
    value: 'Filter 2',
  },
  {
    id: 4,
    name: 'Filter 3',
    count: 200,
    value: 'Filter 3',
  },
  {
    id: 5,
    name: 'Filter 4',
    count: 53,
    value: 'Filter 4',
  },
];

export const Filters = () => {
  return (
    <div className={styles.container}>
      {filters.map((item) => (
        <Button buttonType={[item.id === 1 ? `filter_active` : 'filter']} key={item.id}>
          {item.name}
          <Indicator type={item.id === 1 ? `filter_active` : 'filter'}>{item.count}</Indicator>
        </Button>
      ))}
    </div>
  );
};

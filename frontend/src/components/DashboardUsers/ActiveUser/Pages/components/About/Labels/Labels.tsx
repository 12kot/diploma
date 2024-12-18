import { useTranslation } from 'react-i18next';

import { ILabel } from 'features';
import { Labels } from 'components';

import { SVGEarth, SVGTrendingUp } from 'assets';

import styles from './styles.module.scss';

export const UserLabels = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <section className={styles.container}>
      <LabelContainer text={t('pages.about.carrier')} labels={labels} />
      <LabelContainer text={t('pages.about.personal')} labels={labels2} />
    </section>
  );
};

interface LabelProps {
  text: string;
  labels: ILabel[];
}

const LabelContainer = ({ text, labels }: LabelProps) => {
  return (
    <div className={styles.label}>
      <p>
        <b>{text}</b>
      </p>
      <Labels labels={labels} wrap />
    </div>
  );
};

const labels = [
  {
    id: 1,
    icon: <SVGTrendingUp />,
    name: '1000 Orders',
  },
  {
    id: 2,
    icon: <SVGTrendingUp />,
    name: '5.0',
  },
  {
    id: 3,
    icon: <SVGEarth />,
    name: 'Hrodna, Belarus',
  },
  {
    id: 4,
    icon: <SVGEarth />,
    name: 'Metrica',
  },
  {
    id: 5,
    icon: <SVGEarth />,
    name: 'Best 2024',
  },
];

const labels2 = [
  {
    id: 1,
    icon: <SVGTrendingUp />,
    name: '51 Years Old',
  },
  {
    id: 2,
    icon: <SVGTrendingUp />,
    name: '2 childs',
  },
  {
    id: 3,
    icon: <SVGEarth />,
    name: 'Hrodna, Belarus',
  },
  {
    id: 4,
    icon: <SVGEarth />,
    name: 'Female',
  },
  {
    id: 5,
    icon: <SVGEarth />,
    name: 'Hi hi ha ha',
  },
];

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const Description = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <section className={styles.container}>
      <p>
        <b>{t('pages.about.about')}</b>
      </p>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit unde animi, iste consequuntur perferendis
          laudantium dolores quibusdam dolorem amet veritatis deserunt, officia illum voluptatum architecto veniam
          nulla? Quidem quos quas cumque. Esse, voluptatum, consequuntur illum sit vitae nisi illo animi, voluptatem aut
          eos veritatis ut? Veniam veritatis sit esse porro aperiam aliquam expedita nobis modi quia! Ex fuga, veritatis
          qui dignissimos amet suscipit reiciendis asperiores officiis alias odit ipsam, velit hic maiores inventore
          libero illo iusto doloribus quia? Facere reiciendis doloribus nobis repellendus. Itaque alias hic dolore id
          cumque consequuntur blanditiis cum, aut repellat, a asperiores rerum quod fugiat quae reprehenderit est quas
          dolor culpa. Labore non unde accusamus beatae eum alias ducimus, omnis explicabo dicta praesentium vitae
          ullam. Consectetur est esse facilis quae odit commodi harum enim perspiciatis placeat cupiditate similique
          ducimus, sed itaque dolorem tenetur cumque deserunt temporibus quis! Itaque, dignissimos nihil sunt eligendi
          voluptate natus voluptatum modi quisquam maxime in exercitationem atque laborum consequatur corporis
          laboriosam obcaecati unde ut accusamus laudantium? Quaerat, quibusdam eaque. Consectetur, recusandae nihil
          omnis expedita sed debitis officiis cumque dolor at nobis dolorem! Soluta, mollitia assumenda ipsam vero
          tenetur architecto ipsa earum, ut praesentium explicabo, accusamus perspiciatis hic quibusdam aut aliquid ab.
          Exercitationem?
        </p>
      </div>
    </section>
  );
};

import { useTranslation } from 'react-i18next';

import { H2 } from 'components';

import SVGProfileInfo from 'assets/svg/SVGProfileInfo';
import SVGImportant from 'assets/svg/SVGImportant';
import tilesImage from 'assets/img/tiles.png';

const GeneralProfilePage = () => {
  const { t } = useTranslation('dashboard');

  return (
    <div className="profile-grid">
      <section className="flex-col gap profile-padding profile-grid-first">
        <div className="flex gap-mini align-center">
          <SVGProfileInfo />
          <p>
            <b className="text-14">{t('profile.personalInfo')}</b>
          </p>
        </div>
        <form className="flex-col gap profile-grid-first-overflow">
          <section className="flex gap-mini">
            <input type="text" placeholder="Name" className="w-full" />
            <input type="text" placeholder="Surname" className="w-full" />
          </section>
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone number" />
          <section className="flex gap-mini">
            <input type="text" placeholder="Country" className="w-full" />
            <input type="text" placeholder="City" className="w-full" />
          </section>
          <textarea rows={10} placeholder="Self-description" />
        </form>
      </section>
      <section className="flex-col gap align-center text-center profile-grid-second profile-padding relative">
        <SVGImportant />
        <H2>Why is it important to fill out information about yourself</H2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem neque nihil sapiente corrupti exercitationem officia, tenetur sequi ut. Accusantium incidunt corrupti totam facilis eveniet perferendis, iusto iste ducimus quos facere.</p>
        <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
      </section>
    </div>
  );
};

export default GeneralProfilePage;

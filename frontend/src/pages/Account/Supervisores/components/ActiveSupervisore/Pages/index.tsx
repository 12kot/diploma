import { useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { useAuth } from 'features';

import Chat from './components/Chat';
import About from './components/About';
import Analitics from './components/Analitics';

import SVGAnalitics from 'assets/svg/SVGAnalitics';
import SVGChat from 'assets/svg/SVGChat';
import SVGInfo from 'assets/svg/SVGInfo';

interface IPage {
  name: string;
  icon: JSX.Element;
  value: 'chat' | 'about' | 'analitics';
}

const pages = (t: TFunction<['dashboard'], undefined>): IPage[] => [
  {
    name: t('supervisores.active.pages.chat'),
    icon: <SVGChat />,
    value: 'chat',
  },
  {
    name: t('supervisores.active.pages.about'),
    icon: <SVGInfo />,
    value: 'about',
  },
  {
    name: t('supervisores.active.pages.analitics'),
    icon: <SVGAnalitics />,
    value: 'analitics',
  },
];

const Pages = () => {
  const { user } = useAuth();
  const { t } = useTranslation(['dashboard']);

  const [activePage, setActivePage] = useState<'chat' | 'about' | 'analitics'>(
    user?.role === 'admin' ? 'chat' : 'about',
  );

  return (
    <section className="flex-col pages">
      <div className="flex pages-header">
        {pages(t).map((page, i) => (
          <button
            key={i}
            className={`--default gap-mini w-full ${activePage === page.value && 'active'}`}
            onClick={() => setActivePage(page.value)}>
            {page.icon}
            <p>
              <b className="text-14">{page.name}</b>
            </p>
          </button>
        ))}
      </div>
      {activePage === 'chat' && <Chat />}
      {activePage === 'about' && <About />}
      {activePage === 'analitics' && <Analitics />}
    </section>
  );
};

export default Pages;

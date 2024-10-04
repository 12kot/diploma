import { useState } from 'react';
import { useAuth } from 'features';

import Chat from './components/Chat';
import About from './components/About';

import SVGAnalitics from 'assets/svg/SVGAnalitics';
import SVGChat from 'assets/svg/SVGChat';
import SVGInfo from 'assets/svg/SVGInfo';
import Analitics from './components/Analitics';

const pages: {
  name: string;
  icon: JSX.Element;
  value: 'chat' | 'about' | 'analitics';
}[] = [
  {
    name: 'Chat',
    icon: <SVGChat />,
    value: 'chat',
  },
  {
    name: 'About',
    icon: <SVGInfo />,
    value: 'about',
  },
  {
    name: 'Analitics',
    icon: <SVGAnalitics />,
    value: 'analitics',
  },
];

const Pages = () => {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState<'chat' | 'about' | 'analitics'>(
    user?.role === 'admin' ? 'chat' : 'about',
  );

  return (
    <section className="flex-col pages">
      <div className="flex pages-header">
        {pages.map((page, i) => (
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

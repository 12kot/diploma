import { useState } from 'react';

import { Filters } from 'components';

import ApplicationModal from './Modal';

const Applications = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="applications">
      <ApplicationModal isOpen={modalOpen} setIsOpen={() => setModalOpen((v) => !v)} />
      <Filters />
      <section className="applications-padding applications-list gap">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div className="rounded-16 applications-item gap flex-col gap" key={i}>
              <header className="flex gap-mini align-center">
                <p className="clamp-2">
                  <b>Header header header</b>
                </p>
                <p className="indicator">Active</p>
              </header>
              <p className="text-14 clamp clamp-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae, sed placeat voluptatum molestias
                consequatur labore aliquid atque modi fugiat aliquam ullam mollitia eos nesciunt nam quam tenetur iusto
                eligendi quibusdam eum, veritatis deserunt? Optio explicabo debitis fugit consequuntur asperiores
                recusandae autem quo corrupti, sunt necessitatibus dolor suscipit vel nisi animi ratione facilis magni
                placeat alias laboriosam laborum ducimus. Voluptatum fugit maxime itaque delectus libero quisquam
                suscipit debitis recusandae accusamus beatae ad odio soluta reiciendis aut eligendi, dolor quas velit
                officiis eius quod. Animi autem magni impedit odio laborum blanditiis consectetur sit asperiores dolorem
                sequi doloremque quae architecto, dignissimos quod?
              </p>
              <div className="flex gap-mini">
                <button className="--transparent w-full">Finish Сhecking</button>
                <button className="w-full" onClick={() => setModalOpen((v) => !v)}>
                  Open
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Applications;

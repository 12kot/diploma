import { Modal } from 'components';
import { Filters } from 'components/DashboardUsers';
import { useState } from 'react';

const ApplicationsContainer = () => {
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

export default ApplicationsContainer;

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ApplicationModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="applications-modal flex-col gap">
      <header className="flex gap-mini align-center">
        <p className="clamp-2">
          <b>Header header header</b>
        </p>
        <p className="indicator">Active</p>
      </header>
      <section className="flex gap-mini">
        <a className="btn --transparent text-12" href="tel:+375292812071">
          +375 29 281 20 71
        </a>
        <a className="btn --transparent text-12" href="mailto:yakol.nikita@gmail.com">
          yakol.nikita@gmail.com
        </a>
      </section>
      <section className="applications-modal-content">
        <p className="text-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae, sed placeat voluptatum molestias
          consequatur labore aliquid atque modi fugiat aliquam ullam mollitia eos nesciunt nam quam tenetur iusto
          eligendi quibusdam eum, veritatis deserunt? Optio explicabo debitis fugit consequuntur asperiores recusandae
          autem quo corrupti, sunt necessitatibus dolor suscipit vel nisi animi ratione facilis magni placeat alias
          laboriosam laborum ducimus. Voluptatum fugit maxime itaque delectus libero quisquam suscipit debitis
          recusandae accusamus beatae ad odio soluta reiciendis aut eligendi, dolor quas velit officiis eius quod. Animi
          autem magni impedit odio laborum blanditiis consectetur sit asperiores dolorem sequi doloremque quae
          architecto, dignissimos quod? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iste ipsam
          veritatis. Magni deserunt debitis veniam repellendus ut suscipit totam, corporis recusandae ipsum molestiae,
          doloribus optio fugit nihil iste quis iure. A, consectetur. Dicta porro voluptatem excepturi, magnam amet
          necessitatibus aut, molestias inventore blanditiis quasi consectetur optio. Consectetur necessitatibus magni
          quibusdam, beatae sequi excepturi exercitationem ipsum quis cumque voluptatum, velit nostrum architecto?
          Corporis, animi totam mollitia voluptas dolorem, placeat incidunt exercitationem expedita ea, molestiae
          eveniet fugit optio ratione ipsum autem non obcaecati commodi quis laborum minima? Dignissimos officiis
          incidunt aspernatur ullam porro corporis sint? Dolorem ab dignissimos vel qui cupiditate beatae pariatur nobis
          deleniti sapiente, quos minus deserunt, et iste corrupti, at consequuntur dolor minima magni nam quis. Quod,
          repellat aliquid saepe perspiciatis inventore voluptates beatae, quis voluptate atque sit labore aperiam rem
          expedita. Recusandae unde minus dolorem totam incidunt? Iste soluta laudantium totam a tempora. Neque eveniet
          quis debitis officia dignissimos? Assumenda ipsa voluptates delectus alias reiciendis, voluptas quidem
          pariatur natus cumque dolorum dolore explicabo recusandae! Tempora doloremque necessitatibus quia. Hic dolorum
          laudantium cum, quidem quis accusamus aliquam ea expedita facere blanditiis tempora fuga ab officia fugiat eum
          rerum ipsa corrupti consequatur maxime culpa. Iusto quaerat aliquam deleniti esse vero nobis quae, in, qui
          magni provident nulla accusamus nemo laudantium dicta. Laboriosam, rerum repellat reprehenderit aspernatur
          iusto qui magnam minima labore alias ipsum nostrum ex explicabo cupiditate ipsam dignissimos officiis nemo
          unde iste laudantium at nesciunt, ad necessitatibus quod aliquam? Quis incidunt ullam facere voluptatibus ut
          iure nulla, adipisci illo et distinctio animi a neque amet officia impedit autem dolores voluptas earum dolor
          fugiat cupiditate magni libero explicabo! Impedit voluptatum eos voluptatibus, assumenda voluptate nesciunt
          illo dolor corrupti repellat omnis cupiditate eaque dolore earum fugiat facilis perferendis deleniti nihil
          eveniet sed numquam aliquid quasi nam? Corporis amet autem voluptatum accusantium repellendus unde incidunt
          dolore praesentium adipisci quia rem saepe laboriosam illum, nemo assumenda id modi sapiente nihil quam,
          beatae exercitationem tempore corrupti quas? Debitis sit neque officiis repellat quae illo tempore ipsa fugit
          perspiciatis labore. Quos repellat, molestiae maxime sit doloremque id nisi earum, voluptatum odio ex
          quisquam, omnis at cupiditate nam. Laboriosam, dolor quasi eveniet dignissimos possimus quo maxime quas
          repudiandae quaerat. Expedita nemo corrupti repellat distinctio non. Amet eos aut, iusto consequuntur quod
          distinctio voluptatibus esse ut debitis, necessitatibus nobis tempore accusantium vel rerum soluta laudantium
          voluptates aperiam! Vel quaerat temporibus asperiores facilis omnis optio, eaque deserunt.
        </p>
      </section>
      <footer className="flex gap-mini">
        <button className="--transparent w-full" onClick={setIsOpen}>
          Close
        </button>
        <button className="w-full" onClick={setIsOpen}>
          Finish Сhecking
        </button>
      </footer>
    </Modal>
  );
};
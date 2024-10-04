import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';
import { Labels } from 'components';

const About = () => {
  return (
    <div className="mt-16 pages-about flex-col gap">
      <section className="flex gap-mini">
        <a className="btn --transparent text-12" href="tel:+375292812071">
          +375 29 281 20 71
        </a>
        <a className="btn --transparent text-12" href="mailto:yakol.nikita@gmail.com">
          yakol.nikita@gmail.com
        </a>
      </section>
      <section className="flex gap pages-about-labels">
        <div className="flex-col gap-mini">
          <p>
            <b>Carrier</b>
          </p>
          <Labels labels={labels} wrap />
        </div>
        <div className="flex-col gap-mini">
          <p>
            <b>Personal</b>
          </p>
          <Labels labels={labels2} wrap />
        </div>
      </section>
      <section className="flex-col gap-mini pages-about-info">
        <p>
          <b>About</b>
        </p>
        <div className="pages-about-info">
          <p className="text-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit unde animi, iste consequuntur perferendis
            laudantium dolores quibusdam dolorem amet veritatis deserunt, officia illum voluptatum architecto veniam
            nulla? Quidem quos quas cumque. Esse, voluptatum, consequuntur illum sit vitae nisi illo animi, voluptatem
            aut eos veritatis ut? Veniam veritatis sit esse porro aperiam aliquam expedita nobis modi quia! Ex fuga,
            veritatis qui dignissimos amet suscipit reiciendis asperiores officiis alias odit ipsam, velit hic maiores
            inventore libero illo iusto doloribus quia? Facere reiciendis doloribus nobis repellendus. Itaque alias hic
            dolore id cumque consequuntur blanditiis cum, aut repellat, a asperiores rerum quod fugiat quae
            reprehenderit est quas dolor culpa. Labore non unde accusamus beatae eum alias ducimus, omnis explicabo
            dicta praesentium vitae ullam. Consectetur est esse facilis quae odit commodi harum enim perspiciatis
            placeat cupiditate similique ducimus, sed itaque dolorem tenetur cumque deserunt temporibus quis! Itaque,
            dignissimos nihil sunt eligendi voluptate natus voluptatum modi quisquam maxime in exercitationem atque
            laborum consequatur corporis laboriosam obcaecati unde ut accusamus laudantium? Quaerat, quibusdam eaque.
            Consectetur, recusandae nihil omnis expedita sed debitis officiis cumque dolor at nobis dolorem! Soluta,
            mollitia assumenda ipsam vero tenetur architecto ipsa earum, ut praesentium explicabo, accusamus
            perspiciatis hic quibusdam aut aliquid ab. Exercitationem?
          </p>
        </div>
      </section>
      <div className="flex gap-mini pages-about-actions">
        {/* <button>Continue the supervisor's activity</button> */}
        <button className="--red">Suspend the supervisor's activity</button>
      </div>
    </div>
  );
};

export default About;

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

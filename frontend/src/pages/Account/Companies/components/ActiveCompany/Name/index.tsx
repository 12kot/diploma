import SVGLink from "assets/svg/SVGLink";
import { H1 } from "components";

interface Props {
    name: string
}

const CompanyName = ({ name }: Props) => {
  return (
    <section className="flex-between gap align-center">
      <div className="flex gap info align-center">
        <img src="https://cdn.logoworks.com/wp-content/uploads/2017/06/Untitled-2-640x360-1.png" className="rounded" />
        <H1>{name}</H1>
      </div>
      <button className="--default --border square rounded p-0">
        <SVGLink />
      </button>
    </section>
  );
};

export default CompanyName;

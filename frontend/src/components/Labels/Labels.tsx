import { ILabel } from 'features';

interface Props {
  wrap?: boolean;
  labels: ILabel[];
}

export const Labels = ({ labels, wrap }: Props) => {
  return (
    <div className={`flex gap-mini ${wrap && 'wrap'}`}>
      {labels.map((label) => (
        <Label key={label.id} {...label} />
      ))}
    </div>
  );
};

const Label = ({ icon, name, id }: ILabel) => {
  return (
    <div className="flex gap-mini indicator -border nowrap h-content" key={id}>
      {icon}
      <p>{name}</p>
    </div>
  );
};

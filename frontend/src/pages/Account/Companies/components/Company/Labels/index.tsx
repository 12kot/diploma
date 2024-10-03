interface Props {
  labels: {
    id: number;
    icon: JSX.Element;
    name: string;
  }[];
}

const CompanyLabels = ({ labels }: Props) => {
  return (
    <div className="flex gap-mini">
      {labels.map((label) => (
        <div className="flex gap-mini indicator -border" key={label.id}>
          {label.icon}
          <p>{label.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyLabels;

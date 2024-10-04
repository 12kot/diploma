interface Props {
  wrap?: boolean;
  labels: {
    id: number;
    icon: JSX.Element;
    name: string;
  }[];
}

export const Labels = ({ labels, wrap }: Props) => {
  return (
    <div className={`flex gap-mini ${wrap && 'wrap'}`}>
      {labels.map((label) => (
        <div className="flex gap-mini indicator -border nowrap h-content" key={label.id}>
          {label.icon}
          <p>{label.name}</p>
        </div>
      ))}
    </div>
  );
};

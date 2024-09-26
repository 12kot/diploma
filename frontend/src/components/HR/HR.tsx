interface Props {
  text?: string;
}

export const HR = ({ text }: Props) => {
  return (
    <div className="hr-container">
      <p>{text}</p>
      <hr />
    </div>
  );
};

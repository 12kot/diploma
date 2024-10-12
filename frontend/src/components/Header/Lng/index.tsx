interface Props {
  className?: string;
}

const HeaderLng = ({ className }: Props) => {
  return (
    <button className={`--transparent ${className}`} aria-label="Switch to Russian">
      <img src="https://flagsapi.com/US/flat/64.png" alt="en" loading="lazy" />
      <p>EN</p>
    </button>
  );
};

export default HeaderLng;

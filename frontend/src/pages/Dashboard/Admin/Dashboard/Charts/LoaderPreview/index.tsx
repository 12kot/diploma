import { H2, Loader } from 'components';

const LoaderChart = () => {
  return (
    <div className="chart flex-col gap-mini">
      <H2>Loader Preview</H2>
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    </div>
  );
};

export default LoaderChart;

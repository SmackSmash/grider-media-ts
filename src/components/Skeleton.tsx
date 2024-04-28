const Skeleton = ({
  times,
  className
}: {
  times: number;
  className: string;
}) => {
  return Array(times)
    .fill(0)
    .map((_, i) => (
      <div
        className={`${className} bg-slate-800 overflow-hidden rounded relative`}
        key={i}>
        <div className='inset-0 absolute -translate-x-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-shimmer'></div>
      </div>
    ));
};

export default Skeleton;

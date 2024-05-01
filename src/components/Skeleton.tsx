interface SkeletonProps {
  times: number;
  className: string;
}

const Skeleton = ({ times, className }: SkeletonProps) => {
  return Array(times)
    .fill(0)
    .map((_, i) => (
      <div
        className={`${className} bg-poimandres-darkslate overflow-hidden relative`}
        key={i}>
        <div className='inset-0 absolute -translate-x-full bg-gradient-to-r from-poimandres-darkslate via-poimandres-blackslate to-poimandres-darkslate animate-shimmer'></div>
      </div>
    ));
};

export default Skeleton;

interface SkeletonProps {
  times: number;
  className: string;
}

const Skeleton = ({ times, className }: SkeletonProps) => {
  return Array(times)
    .fill(0)
    .map((_, i) => (
      <div className={`${className} relative overflow-hidden bg-poimandres-darkslate`} key={i}>
        <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-poimandres-darkslate via-poimandres-blackslate to-poimandres-darkslate'></div>
      </div>
    ));
};

export default Skeleton;

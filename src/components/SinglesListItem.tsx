import { type Single } from '../store/apis/singlesApi';

interface SinglesListItemProps {
  single: Single;
}

const SinglesListItem = ({ single: { title, image } }: SinglesListItemProps) => {
  return (
    <div className='aspect-square w-1/2 p-4'>
      <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl'>
        <img
          className='absolute inset-0 -z-10 h-full w-full object-cover'
          src={`http://localhost:3000/images/singles/${image}.jpg`}
          alt={title}
        />
        <h3 className='py z-10 bg-poimandres-blackslate px-2 py-1 text-poimandres-yellow'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SinglesListItem;

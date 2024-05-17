import { useState } from 'react';
import { type Single } from '../store/apis/singlesApi';
import { Transition } from '@headlessui/react';

interface SinglesListItemProps {
  single: Single;
}

const SinglesListItem = ({ single: { title, image } }: SinglesListItemProps) => {
  const [overlay, setOverlay] = useState(false);

  const handleMouseEnter = () => {
    setOverlay(true);
  };

  const handleMouseLeave = () => {
    setOverlay(false);
  };

  return (
    <div className='aspect-square w-1/2 p-4'>
      <div
        className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className='absolute inset-0 -z-10 h-full w-full object-cover'
          src={`http://localhost:3000/images/singles/${image}.jpg`}
          alt={title}
        />
        <h3 className='py z-10 bg-poimandres-blackslate px-2 py-1 text-poimandres-yellow'>
          {title}
        </h3>
        <Transition
          className='absolute z-10 flex h-full w-full items-center justify-center bg-poimandres-blackslate/75'
          show={overlay}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          DELETE OVERLAY
        </Transition>
      </div>
    </div>
  );
};

export default SinglesListItem;

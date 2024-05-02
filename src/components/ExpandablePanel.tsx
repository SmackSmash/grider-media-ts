import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

type ExpandablePanelProps = PropsWithChildren<{
  header: ReactNode;
}>;

const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  const [expanded, setExpaned] = useState(false);

  const handleClick = () => {
    setExpaned(!expanded);
  };

  return (
    <div className='mb-4'>
      <div
        className='flex h-10 w-full flex-row items-center border border-poimandres-midslate pl-2 hover:cursor-pointer hover:bg-poimandres-darkslate'
        onClick={handleClick}
      >
        {expanded ? <FaAngleUp className='mr-2' /> : <FaAngleDown className='mr-2' />}
        {header}
      </div>
      <Transition
        show={expanded}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='border border-t-0 border-poimandres-midslate p-2'>{children}</div>
      </Transition>
    </div>
  );
};

export default ExpandablePanel;

import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { FaAngleDown } from 'react-icons/fa';

type ExpandablePanelProps = PropsWithChildren<{
  header: ReactNode;
}>;

const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const handleClick = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <div className='border border-poimandres-midslate mb-4'>
      <div
        className='flex flex-row h-10 w-full pl-2 items-center hover:bg-poimandres-darkslate hover:cursor-pointer'
        onClick={handleClick}>
        <FaAngleDown className='mr-2' />
        {header}
      </div>
      {panelOpen && (
        <div className='p-2 border-t border-poimandres-midslate'>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandablePanel;

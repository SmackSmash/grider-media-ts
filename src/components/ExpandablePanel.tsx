import { useState, type PropsWithChildren, type ReactNode } from 'react';

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
        className='flex h-10 w-full pl-2 items-center justify-between hover:bg-poimandres-darkslate hover:cursor-pointer'
        onClick={handleClick}>
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

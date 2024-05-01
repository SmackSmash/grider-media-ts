import { useState, type PropsWithChildren, type ReactNode } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

type ExpandablePanelProps = PropsWithChildren<{
  header: ReactNode;
}>;

const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  const [expanded, setExpaned] = useState(false);

  const handleClick = () => {
    setExpaned(!expanded);
  };

  return (
    <div className="mb-4 border border-poimandres-midslate">
      <div
        className="flex h-10 w-full flex-row items-center pl-2 hover:cursor-pointer hover:bg-poimandres-darkslate"
        onClick={handleClick}
      >
        {expanded ? (
          <FaAngleLeft className="mr-2" />
        ) : (
          <FaAngleDown className="mr-2" />
        )}
        {header}
      </div>
      {expanded && (
        <div className="border-t border-poimandres-midslate p-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandablePanel;

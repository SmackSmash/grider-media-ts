import type { PropsWithChildren, ReactNode } from 'react';

type ExpandablePanelProps = PropsWithChildren<{
  header: ReactNode;
}>;

const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  return (
    <div>
      {header}
      {children}
    </div>
  );
};

export default ExpandablePanel;

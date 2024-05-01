import { type PropsWithChildren } from "react";
import classNames from "classnames";

type PanelProps = PropsWithChildren<{
  className?: string;
}>;

function Panel({ children, className, ...rest }: PanelProps) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className,
  );

  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
}

export default Panel;

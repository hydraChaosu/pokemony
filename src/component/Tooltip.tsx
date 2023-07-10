import { ReactNode, useState } from "react";
import "./Tooltip.scss";
import LoadingSpinner from "./LoadingSpinner";

interface TooltipProps {
  delay?: number;
  children: ReactNode;
  content: string;
  isLoading: boolean;
}

const Tooltip = ({ delay, children, content, isLoading }: TooltipProps) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="tooltip__wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`tooltip__tip`}>
          {isLoading ? <LoadingSpinner /> : content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

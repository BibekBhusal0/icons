import { Icon } from "@iconify/react";
import { FunctionComponent, useEffect, useState } from "react";

interface ModeToggleProps {
  dark: boolean;
  setDark: (mode: boolean) => void;
}

const ModeToggle: FunctionComponent<ModeToggleProps> = ({ dark, setDark }) => {
  const [icon, setIcon] = useState(
    dark ? "line-md:moon-filled-loop" : "line-md:sunny-filled-loop"
  );
  const handleClick = () => {
    if (dark) {
      setIcon("line-md:moon-filled-to-sunny-filled-loop-transition");
    } else {
      setIcon("line-md:sunny-filled-loop-to-moon-filled-loop-transition");
    }
    setDark(!dark);
  };

  return (
    <button onClick={handleClick} className="text-4xl">
      <Icon key={icon} icon={icon} />
    </button>
  );
};

export default ModeToggle;

import { Icon } from "@iconify/react";
import { FunctionComponent, useState } from "react";
import { useTheme } from "./provider";

const ThemeSwitch: FunctionComponent = () => {
  const { setTheme, theme } = useTheme();
  const dark = theme === "dark";
  const [icon, setIcon] = useState(
    dark ? "line-md:moon-filled-loop" : "line-md:sunny-filled-loop"
  );
  const handleClick = () => {
    if (dark) {
      setIcon("line-md:moon-filled-to-sunny-filled-loop-transition");
    } else {
      setIcon("line-md:sunny-filled-loop-to-moon-filled-loop-transition");
    }
    setTheme(dark ? "light" : "dark");
  };

  return (
    <button onClick={handleClick} className="text-4xl">
      <Icon key={icon} icon={icon} />
    </button>
  );
};

export default ThemeSwitch;

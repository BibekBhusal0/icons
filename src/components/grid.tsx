import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import Box, { boxClasses } from "./box";

function Grid() {
  const initialIcon = "mdi-light:home";
  const [icons, setIcons] = useState([initialIcon, initialIcon]);
  return (
    <div className="w-full py-4 overflow-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {icons.map((icon, i) => (
        <Box
          key={i}
          icon={icon}
          setIcon={(newIcon: string) =>
            setIcons((prevState) => {
              prevState[i] = newIcon;
              return [...prevState];
            })
          }
        />
      ))}
      <button
        onClick={() => setIcons([...icons, initialIcon])}
        className={twMerge(
          "text-3xl flex items-center justify-center group transition-all",
          boxClasses
        )}>
        <Icon
          icon={"line-md:plus-circle"}
          className="text-9xl group-hover:scale-150 transition-all"></Icon>
      </button>
    </div>
  );
}

export default Grid;

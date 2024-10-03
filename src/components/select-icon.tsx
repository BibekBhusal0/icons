import { listIcons } from "@iconify/react/dist/iconify.js";
import { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface SelectIconProps {
  icon: string;
  setIcon: (icon: string) => void;
}

const SelectIcon: FunctionComponent<SelectIconProps> = ({
  icon,
  setIcon,
}: SelectIconProps) => {
  const iconsList = listIcons();

  return (
    <div className="grid gap-3 grid-cols-5 size-full">
      {iconsList.map((i, index) => (
        <div
          key={index}
          onClick={() => setIcon(i)}
          className={cn("p-2", icon === i ? "border-2 border-primary" : "")}>
          <Icon icon={i} />
        </div>
      ))}
    </div>
  );
};

export default SelectIcon;

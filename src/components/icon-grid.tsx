import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useInView } from "react-intersection-observer";

function IconsGrid({
  iconsList,
  selected,
  setSelected,
}: {
  iconsList: string[];
  selected: string;
  setSelected: (icon: string) => void;
}) {
  return (
    <ScrollArea className="w-full h-80">
      <div className="grid grid-cols-5 gap-3">
        {iconsList.map((iconName, index) => (
          <IconInGrid
            key={index}
            iconName={iconName}
            selected={iconName === selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </ScrollArea>
  );
}

const IconInGrid = ({
  iconName,
  selected,
  setSelected,
}: {
  iconName: string;
  selected: boolean;
  setSelected: (icon: string) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.01,
    rootMargin: "200px 0px ",
  });
  return (
    <div ref={ref} className="aspect-square relative">
      {inView ? (
        <Button
          variant="ghost"
          onClick={() => setSelected(iconName)}
          className={cn(
            "p-0 text-2xl transition-all size-full",
            selected ? "border-2 border-primary" : ""
          )}>
          <Icon icon={iconName} className="aspect-square text-2xl size-full" />
        </Button>
      ) : (
        <Skeleton className="size-full rounded-md" />
      )}
    </div>
  );
};

export default IconsGrid;

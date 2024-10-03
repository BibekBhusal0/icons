import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import { Pagination, PaginationContent, PaginationItem } from "./ui/pagination";

interface iconGridProps {
  iconsList: string[];
  selected: string;
  setSelected: (icon: string) => void;
}

const iconsPerPage = 100;

export function IconsGridPagination({ ...props }: iconGridProps) {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(props.iconsList.length / iconsPerPage);

  const getPageContent = (page: number) => {
    const start = (page - 1) * iconsPerPage;
    const end = start + iconsPerPage;
    return props.iconsList.slice(start, end);
  };
  if (pages === 1) return <IconsGrid {...props} />;
  useEffect(() => {
    setPage(1);
  }, [props.iconsList]);
  return (
    <>
      <IconsGrid {...props} iconsList={getPageContent(page)} />
      Page {page} out of {pages}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              disabled={page === 1}
              className="flex items-center justify-center gap-2"
              variant="outline"
              onClick={() => setPage(page - 1)}>
              <Icon icon="mingcute:up-line" rotate={135} className="size-4" />
              <div className="text-xl">Previous</div>
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              disabled={page === pages}
              className="flex items-center justify-center gap-2"
              variant="outline"
              onClick={() => setPage(page + 1)}>
              <div className="text-xl">Next</div>
              <Icon icon="mingcute:up-line" rotate={45} className="size-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

function IconsGrid({ iconsList, selected, setSelected }: iconGridProps) {
  return (
    <ScrollArea className="w-full h-80">
      <div className="grid grid-cols-5 gap-3">
        {iconsList.map((iconName, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => setSelected(iconName)}
            className={cn(
              "p-0 text-2xl transition-all size-full",
              selected === iconName ? "border-2 border-primary" : ""
            )}>
            <Icon
              icon={iconName}
              className="aspect-square text-2xl size-full"
            />
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}

export default IconsGrid;

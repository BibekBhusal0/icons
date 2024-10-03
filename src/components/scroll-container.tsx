import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

function ScrollableContainer(props: ScrollAreaPrimitive.ScrollAreaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;
      setHasMore(scrollHeight > clientHeight + scrollTop);
    }
  };

  const handleClick = () => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      containerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    handleScroll();
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [props.children]);

  return (
    <ScrollArea
      {...props}
      ref={containerRef}
      className={twMerge(`overflow-auto`, props?.className)}>
      {props.children}
      {hasMore && (
        <button
          onClick={handleClick}
          className={twMerge(
            "absolute bottom-2 right-2 rounded-lg px-2 py-0.5",
            "shadow-sm dark:shadow-white dark:bg-gray-900 shadow-black bg-gray-200  ",
            "flex items-center gap-2"
          )}>
          more
          <Icon icon="mingcute:up-line" rotate={90} />
        </button>
      )}
    </ScrollArea>
  );
}

export default ScrollableContainer;

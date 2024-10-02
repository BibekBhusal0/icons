import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef, useEffect, useState, HTMLProps } from "react";

function ScrollableContainer(props: HTMLProps<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current; // Get scrollTop
      console.log(scrollHeight, clientHeight, scrollTop);
      setHasMore(scrollHeight > clientHeight + scrollTop); // Updated condition
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
    <div
      {...props}
      ref={containerRef}
      className={`scrollbar-hide overflow-auto ${props?.className}`}>
      {props.children}
      {hasMore && (
        <div className="absolute bottom-2 right-2 shadow-white shadow-sm bg-gray-900  rounded-lg px-2 py-0.5 flex items-center gap-2">
          more
          <Icon icon="mdi:chevron-down" />
        </div>
      )}
    </div>
  );
}

export default ScrollableContainer;

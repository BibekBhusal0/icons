import { Icon } from "@iconify/react";

function Box({ icon }: { icon: string }) {
  return (
    <div>
      <div>
        <Icon icon={icon} />
      </div>
    </div>
  );
}

export default Box;

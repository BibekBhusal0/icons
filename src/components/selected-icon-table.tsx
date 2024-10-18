import { requierd_icons, SelectedIcons } from "@/icons-name";
import { iconPackNames } from "@/icons";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

function SelectedIconTable() {
  const border = "border border-green-800 dark:border-green-200";
  const cellPadding = "p-2";

  return (
    <table className={cn(border, "border-2 w-full text-left")}>
      <thead>
        <tr>
          <th className={cn(border, cellPadding)}>Icon Name</th>
          {Object.keys(SelectedIcons).map((key) => (
            <th key={key} className={cn(border, cellPadding)}>
              {iconPackNames[key] || key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {requierd_icons.map((RequiredIcon) => (
          <tr key={RequiredIcon}>
            <td className={cn(border, cellPadding)}>{RequiredIcon}</td>
            {Object.entries(SelectedIcons).map(([key, value]) => {
              const icon = value[RequiredIcon];
              return (
                <td className={cn(border, cellPadding, "text-3xl")} key={key}>
                  <div className="flex-center w-full">
                    {icon ? (
                      typeof icon === "string" ? (
                        <Icon icon={`${key}:${icon}`} />
                      ) : (
                        icon
                      )
                    ) : null}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SelectedIconTable;

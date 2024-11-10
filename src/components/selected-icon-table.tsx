import { Icon2RN, iconData, iconPackNames, requiredIcons } from "@/icons";
import { cn } from "@/lib/utils";

function SelectedIconTable({
  SelectedIconPacks,
  usePrefix = true,
}: {
  SelectedIconPacks: Record<string, Partial<iconData>>;
  usePrefix?: boolean;
}) {
  const border = "border border-green-800 dark:border-green-200";
  const cellPadding = "p-2";

  return (
    <table className={cn(border, "border-2 w-full text-left")}>
      <thead>
        <tr>
          <th className={cn(border, cellPadding)}>Icon Name</th>
          {Object.keys(SelectedIconPacks).map((key) => (
            <th key={key} className={cn(border, cellPadding)}>
              {iconPackNames[key] || key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {requiredIcons.map((RequiredIcon) => (
          <tr key={RequiredIcon}>
            <td className={cn(border, cellPadding)}>{RequiredIcon}</td>
            {Object.entries(SelectedIconPacks).map(([key, value]) => {
              const icon = value[RequiredIcon];
              return (
                <td className={cn(border, cellPadding, "text-3xl")} key={key}>
                  <div className="flex-center w-full">
                    <Icon2RN
                      icon={
                        typeof icon === "string" && usePrefix
                          ? `${key}:${icon}`
                          : icon
                      }
                    />
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

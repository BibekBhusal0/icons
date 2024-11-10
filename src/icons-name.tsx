// import { Icon } from "@iconify/react";
// import { ReactNode } from "react";

// export const requierd_icons = [
//   "settings",
//   "widget",
//   "lock",
//   "unlock",
//   "habitTracker",
//   "pin",
//   "filter",
//   "sort",
//   "show",
//   "hide",
//   "search",
//   "checklist",
//   "space",
//   "bookmark",
//   "reset",
//   "edit",
//   "delete",
//   "menu",
//   "readingList",
// ];

// export const optional_icons = [
//   "add",
//   "subtract",
//   "calendar",
//   "music",
//   "clock",
//   "arrows",
//   "check",
// ];

// const ri_fill = {
//   settings: "settings-4-fill",
//   widget: "apps-2-add-fill",
//   lock: "lock-fill",
//   unlock: "lock-unlock-fill",
//   habitTracker: "calendar-check-fill",
//   pin: "pushpin-fill",
//   filter: "filter-fill",
//   sort: "sort-desc",
//   search: "search-2-fill",
//   reset: "refresh-fill",
//   checklist: "list-check-3",
//   bookmark: "bookmark-fill",
//   edit: "edit-fill",
//   delete: "delete-bin-fill",
//   menu: "menu-fill",
//   readingList: "book-open-fill",
//   show: "eye-fill",
//   hide: "eye-off-fill",
//   space: "rocket-2-fill",
// };

// const solar_bold = {
//   settings: "settings-bold",
//   widget: "widget-add-bold",
//   unlock: "lock-unlocked-bold",
//   lock: "lock-bold",
//   habitTracker: "calendar-mark-bold",
//   pin: "pin-bold",
//   filter: "filter-bold",
//   sort: "sort-from-top-to-bottom-bold",
//   reset: "refresh-bold",
//   checklist: "checklist-minimalistic-bold",
//   bookmark: "bookmark-bold",
//   edit: "pen-new-square-bold",
//   delete: "trash-bin-trash-bold",
//   menu: "hamburger-menu-bold",
//   readingList: "notebook-minimalistic-bold",
//   show: "eye-bold",
//   hide: "eye-closed-bold",
//   space: "planet-2-bold",
// };

// function transformIcons(
//   iconObject: Record<string, string>,
//   prefix: string,
//   itemToReplace: string = "fill",
//   replacementItem: string = "string"
// ): Record<string, ReactNode> {
//   const transformed: Record<string, ReactNode> = {};

//   for (const key in iconObject) {
//     if (iconObject.hasOwnProperty(key)) {
//       const newKey = iconObject[key].replace(itemToReplace, replacementItem);
//       transformed[key] = <Icon icon={`${prefix}:${newKey}`} />;
//     }
//   }

//   return transformed;
// }

// export const SelectedIcons: Record<string, Record<string, ReactNode>> = {
//   "material-symbols": {
//     settings: "settings-rounded",
//     widget: "widgets-rounded",
//     lock: "lock",
//     unlock: "lock-open",
//     habitTracker: "edit-calendar",
//     pin: "push-pin",
//     filter: "filter-alt",
//     sort: "sort-rounded",
//     search: "search-rounded",
//     checklist: "checklist-rounded",
//     bookmark: "bookmark-rounded",
//     edit: "edit",
//     reset: "sync",
//     delete: "delete-rounded",
//     menu: "menu-rounded",
//     readingList: "menu-book-rounded",

//     hide: "visibility-off",
//     show: "visibility",
//     space: "rocket-launch-rounded",
//   },
//   "material-symbols-light": {
//     settings: "settings-outline-rounded",
//     widget: "widgets-outline-rounded",
//     lock: "lock-outline",
//     unlock: "lock-open-outline-rounded",
//     habitTracker: "edit-calendar-outline-rounded",
//     pin: "push-pin-outline",
//     filter: "filter-alt-outline",
//     sort: "sort-rounded",
//     search: "search",
//     reset: "sync",
//     checklist: "checklist-rounded",
//     bookmark: "bookmark-outline-rounded",
//     edit: "edit",
//     delete: "delete-outline-rounded",
//     menu: "menu-rounded",
//     readingList: "menu-book-outline-rounded",

//     hide: "visibility-off-outline",
//     space: "rocket-launch-outline-rounded",
//     show: "visibility-outline",
//   },
//   tabler: {
//     settings: "settings",
//     widget: "apps",
//     lock: "lock",
//     unlock: "lock-open",
//     habitTracker: "calendar-check",
//     pin: "pin",
//     filter: "filter",
//     sort: "arrows-sort",
//     search: "search",
//     reset: "refresh",
//     checklist: "list-check",
//     bookmark: "bookmark",
//     edit: "edit",
//     delete: "trash",
//     menu: "menu",
//     readingList: "book",
//     show: "eye",
//     hide: "eye-off",
//     space: "rocket",
//   },
//   lucide: {
//     settings: "settings",
//     widget: "grid-2x2-plus",
//     lock: "lock",
//     unlock: "lock-open",
//     habitTracker: "calendar-check",
//     pin: "pin",
//     filter: "filter",
//     search: "search",
//     checklist: "list-check",
//     bookmark: "bookmark",
//     edit: "edit",
//     delete: "trash",
//     menu: "menu",
//     readingList: "book-open",
//     show: "eye",
//     hide: "eye-off",
//     space: "rocket",
//   },
//   uil: {
//     settings: "setting",
//     widget: "apps",
//     lock: "lock",
//     habitTracker: "calendar-alt",
//     filter: "filter",
//     sort: "sort-amount-down",
//     search: "search",
//     reset: "refresh",
//     checklist: "file-check-alt",
//     bookmark: "bookmark",
//     edit: "edit",
//     delete: "trash",
//     menu: "bars",
//     readingList: "book-open",
//     show: "eye",
//     hide: "eye-slash",
//     space: "rocket",
//   },
//   carbon: {
//     settings: "settings",
//     widget: "grid",
//     lock: "locked",
//     unlock: "unlocked",
//     habitTracker: "calendar",
//     pin: "pin",
//     filter: "filter",
//     sort: "chevron-sort",
//     search: "search",
//     reset: "reset",
//     checklist: "list-checked",
//     bookmark: "bookmark",
//     edit: "edit",
//     delete: "trash-can",
//     menu: "menu",
//     readingList: "book",
//     space: "rocket",
//   },
//   hugeicons: {
//     settings: "settings-01",
//     widget: "resources-add",
//     lock: "circle-lock-01",
//     unlock: "circle-unlock-01",
//     habitTracker: "calendar-favorite-01",
//     pin: "pin",
//     filter: "filter",
//     sort: "sort-by-down-02",
//     search: "search-01",
//     reset: "refresh",
//     checklist: "check-list",
//     bookmark: "bookmark-02",
//     edit: "edit-02",
//     delete: "delete-02",
//     menu: "menu-01",
//     readingList: "book-01",
//     show: "view",
//     hide: "view-off",
//     space: "rocket",
//   },
//   "Remix Icon Filled": transformIcons(ri_fill, "ri", "fill", "fill"),
//   "Remix Icon Line": transformIcons(ri_fill, "ri", "fill", "line"),
//   "Solar Bold": transformIcons(solar_bold, "solar", "bold", "bold"),
//   "Solar Bold Duotone": transformIcons(
//     solar_bold,
//     "solar",
//     "bold",
//     "bold-duotone"
//   ),
//   "Solar Line Duotone": transformIcons(
//     solar_bold,
//     "solar",
//     "bold",
//     "line-duotone"
//   ),
//   "Solar Broken": transformIcons(solar_bold, "solar", "bold", "broken"),
//   "Solar Line": transformIcons(solar_bold, "solar", "bold", "linear"),
// };

// export const chosenIcons = [
//   "majesticons:book-open",
//   "majesticons:bookmark",
//   "majesticons:pin",
//   "majesticons:hedset",
//   "majesticons:heart",
//   "majesticons:key",
//   "majesticons:map-marker",
//   "majesticons:microphone",
//   "majesticons:music",
//   "majesticons:music-note",
//   "majesticons:phone",
//   "majesticons:play-circle",
//   "majesticons:question-circle",
//   "majesticons:settings-cog",
//   "majesticons:shopping-cart",
//   "majesticons:skull",
//   "majesticons:tag",
//   "mage:chip-fill",
//   "mage:dashboard-fill",
//   "mage:rocket-fill",
//   "mage:wrench-fill",
//   "mage:trophy-fill",
//   "ri:download-cloud-fill",
//   "fluent:cloud-24-filled",
//   "fluent:games-28-filled",
//   "mingcute:game-2-fill",
//   "fluent:board-games-20-filled",
//   "fluent:video-32-filled",
// ];
import { Icon, IconifyIcon, IconProps } from "@iconify/react";
import { ReactNode } from "react";
import type { IconifyInfo, IconifyJSON } from "@iconify/types";

export type iconAsProp = IconifyIcon | ReactNode;
export type iconRN = Record<allRequiredIcons, ReactNode>;

export interface APIv2CollectionResponse {
  prefix: string;
  total: number;
  title?: string;
  info?: IconifyInfo;
  uncategorized?: string[];
  categories?: Record<string, string[]>;
  hidden?: string[];
  aliases?: Record<string, string>;
  chars?: Record<string, string>;
  themes?: IconifyJSON["themes"];
  prefixes?: IconifyJSON["prefixes"];
  suffixes?: IconifyJSON["suffixes"];
}
export interface APISearchResponse {
  icons: string[];
}

export const searchIcons = async (
  searchTerm: string,
  limit = 999,
  prefix = ""
): Promise<string[]> => {
  try {
    const response = await fetch(
      `https://api.iconify.design/search?query=${searchTerm}&limit=${limit}${
        prefix.trim() !== "" ? `&prefix=${prefix}` : ""
      }`
    );
    if (!response.ok || response.status !== 200) {
      throw new Error(`Failed to search icons. Status: ${response.status}`);
    }
    const data: APISearchResponse = await response.json();
    return data.icons;
  } catch (error) {
    console.error("Error searching icons:", error);
    return [];
  }
};

export function Icon2RN({
  icon,
  ...props
}: IconProps | { icon: iconAsProp }): ReactNode {
  if (
    typeof icon === "string" ||
    (typeof icon === "object" && icon !== null && "body" in icon)
  ) {
    return <Icon {...props} icon={icon} />;
  }
  return icon;
}

const R_icons = [
  "settings",
  "widget",
  "lock",
  "unlock",
  "habitTracker",
  "pin",
  "sort",
  "show",
  "hide",
  "search",
  "checklist",
  "space",
  "bookmark",
  "reset",
  "edit",
  "delete_",
  "menu",
  "add",
  "note",
] as const;
export type allRequiredIcons = (typeof R_icons)[number];
export const requiredIcons: allRequiredIcons[] = [...R_icons];
export type iconData = Record<allRequiredIcons, iconAsProp>;

export function transformIcons<T extends Partial<iconData>>(
  iconObject: T,
  prefix: string | null = null,
  itemToReplace: string = "",
  replacementItem: string = ""
): T extends iconData ? iconRN : Partial<iconRN> {
  const transformed: Partial<iconRN> = {};

  for (const [name, val] of Object.entries(iconObject)) {
    let transformedVal: iconAsProp = val;
    if (typeof val === "string") {
      if (itemToReplace !== replacementItem) {
        transformedVal = val.replace(itemToReplace, replacementItem);
      }
      if (prefix) {
        transformedVal = `${prefix}:${transformedVal}`;
      }
    }
    transformed[name as allRequiredIcons] = (
      <Icon2RN className="theme-icons" icon={transformedVal} />
    );
  }

  return transformed as T extends iconData ? iconRN : Partial<iconRN>;
}

export const keyWords: Record<allRequiredIcons, string[]> = {
  settings: ["cog", "gear", "wrench", "tool"],
  widget: ["app", "grid"],
  lock: [],
  unlock: ["lock"],
  habitTracker: ["calendar", "habit"],
  pin: [],
  sort: ["arrow"],
  checklist: ["list", "todo", "task"],
  space: ["planet", "rocket", "compass"],
  bookmark: ["heart", "star", "link"],
  reset: ["refresh", "loop", "sync"],
  edit: ["edit", "pencil", "change"],
  delete_: ["delete", "trash", "erase", "remove", "clear"],
  menu: ["hamburger"],
  show: ["eye", "visible", "see", "view", "visibility"],
  hide: ["eye", "visible", "view", "visibility"],
  add: ["plus", "create"],
  note: ["pencil", "write", "paper", "book"],
  search: ["glass", "look", "find"],
};

export const IconPacks = [
  "oui",
  "dashicons",
  "icons8",
  "raphael",
  "flat-color-icons",
  "eva",
  "fe",
  "la",
  "gridicons",
  "maki",
  "zondicons",
  "el",
  "pixelarticons",
  "foundation",
  "fxemoji",
  "jam",
  "noto",
  "fluent-emoji-flat",
];

export const iconPackNames: Record<string, string> = {
  "material-symbols": "Material Symbols",
  "material-symbols-light": "Material Symbols Light",
  ic: "Google Material Icons",
  mdi: "Material Design Icons",
  ph: "Phosphor",
  solar: "Solar",
  tabler: "Tabler Icons",
  hugeicons: "Huge Icons",
  mingcute: "MingCute Icon",
  ri: "Remix Icon",
  bi: "Bootstrap Icons",
  carbon: "Carbon",
  iconamoon: "IconaMoon",
  iconoir: "Iconoir",
  ion: "IonIcons",
  lucide: "Lucide",
  "lucide-lab": "Lucide Lab",
  uil: "Unicons",
  tdesign: "TDesign Icons",
  teenyicons: "Teenyicons",
  clarity: "Clarity",
  bx: "BoxIcons",
  bxs: "BoxIcons Solid",
  majesticons: "Majesticons",
  "ant-design": "Ant Design Icons",
  lsicon: "Lsicon",
  gg: "css.gg",
  "gravity-ui": "Gravity UI Icons",
  octicon: "Octicons",
  memory: "Memory Icons",
  cil: "CoreUI Free",
  flowbite: "Flowbite Icons",
  mynaui: "Myna UI Icons",
  basil: "Basil",
  pixelarticons: "Pixelarticons",
  "akar-icons": "Akar Icons",
  ci: "coolicons",
  proicons: "ProIcons",
  "system-uicons": "System UIcons",
  typcn: "Typicons",
  "radix-icons": "Radix Icons",
  zondicons: "Zondicons",
  ep: "Element Plus",
  circum: "Circum Icons",
  "mdi-light": "Material Design Light",
  fe: "Feather Icon",
  "eos-icons": "EOS Icons",
  "bitcoin-icons": "Bitcoin Icons",
  charm: "Charm Icons",
  prime: "Prime Icons",
  humbleicons: "Humbleicons",
  uiw: "uiw icons",
  uim: "Unicons Monochrome",
  uit: "Unicons Thin Line",
  uis: "Unicons Solid",
  maki: "Maki",
  gridicons: "Gridicons",
  mi: "Mono Icons",
  cuida: "Cuida Icons",
  weui: "WeUI Icon",
  quill: "Quill Icons",
  "duo-icons": "Duoicons",
  gala: "Gala Icons",
  "lets-icons": "Lets Icons",
  f7: "Framework7 Icons",
  mage: "Mage Icons",
  marketeq: "Marketeq",
  fluent: "Fluent UI System Icons",
  "fluent-color": "Fluent UI System Color Icons",
  "icon-park-outline": "IconPark Outline",
  "icon-park-solid": "IconPark Solid",
  "icon-park-twotone": "IconPark TwoTone",
  "icon-park": "IconPark",
  jam: "Jam Icons",
  heroicons: "HeroIcons",
  pajamas: "Gitlab SVGs",
  "pepicons-pop": "Pepicons Pop!",
  "pepicons-print": "Pepicons Print",
  "pepicons-pencil": "Pepicons Pencil",
  bytesize: "Bytesize Icons",
  ei: "Evil Icons",
  streamline: "Streamline",
  guidance: "Guidance",
  "fa6-solid": "Font Awesome Solid",
  "fa6-regular": "Font Awesome Regular",
  ooui: "OOUI",
  "rivet-icons": "Rivet Icons",
  nimbus: "Nimbus",
  oui: "OpenSearch UI",
  formkit: "FormKit Icons",
  "line-md": "Material Line Icons",
  meteocons: "Meteocons",
  "svg-spinners": "SVG Spinners",
  openmoji: "OpenMoji",
  twemoji: "Twitter Emoji",
  noto: "Noto Emoji",
  "fluent-emoji": "Fluent Emoji",
  "fluent-emoji-flat": "Fluent Emoji Flat",
  "fluent-emoji-high-contrast": "Fluent Emoji High Contrast",
  "noto-v1": "Noto Emoji (v1)",
  emojione: "Emoji One (Colored)",
  "emojione-monotone": "Emoji One (Monotone)",
  "emojione-v1": "Emoji One (v1)",
  fxemoji: "Firefox OS Emoji",
  "streamline-emojis": "Streamline Emojis",
  bxl: "BoxIcons Logo",
  logos: "SVG Logos",
  "simple-icons": "Simple Icons",
  cib: "CoreUI Brands",
  "fa6-brands": "Font Awesome Brands",
  nonicons: "Nonicons",
  arcticons: "Arcticons",
  cbi: "Custom Brand Icons",
  brandico: "Brandico",
  "entypo-social": "Entypo+ Social",
  token: "Web3 Icons",
  "token-branded": "Web3 Icons Branded",
  cryptocurrency: "Cryptocurrency Icons",
  "cryptocurrency-color": "Cryptocurrency Color Icons",
  flag: "Flag Icons",
  "circle-flags": "Circle Flags",
  flagpack: "Flagpack",
  cif: "CoreUI Flags",
  gis: "Font-GIS",
  map: "Map Icons",
  geo: "GeoGlyphs",
  "vscode-icons": "VSCode Icons",
  codicon: "Codicons",
  "file-icons": "File Icons",
  devicon: "Devicon",
  "devicon-plain": "Devicon Plain",
  catppuccin: "Catppuccin Icons",
  "skill-icons": "Skill Icons",
  unjs: "UnJS Logos",
  "game-icons": "Game Icons",
  fad: "FontAudio",
  academicons: "Academicons",
  wi: "Weather Icons",
  healthicons: "Health Icons",
  "medical-icon": "Medical Icons",
  covid: "Covid Icons",
  la: "Line Awesome",
  eva: "Eva Icons",
  dashicons: "Dashicons",
  "flat-color-icons": "Flat Color Icons",
  entypo: "Entypo+",
  foundation: "Foundation",
  raphael: "Raphael",
  icons8: "Icons8 Windows 10 Icons",
  iwwa: "Innowatio Font",
  "heroicons-outline": "HeroIcons v1 Outline",
  "heroicons-solid": "HeroIcons v1 Solid",
  "fa-solid": "Font Awesome 5 Solid",
  "fa-regular": "Font Awesome 5 Regular",
  "fa-brands": "Font Awesome 5 Brands",
  fa: "Font Awesome 4",
  "fluent-mdl2": "Fluent UI MDL2",
  fontisto: "Fontisto",
  "icomoon-free": "IcoMoon Free",
  subway: "Subway Icon Set",
  oi: "Open Iconic",
  wpf: "Icons8 Windows 8 Icons",
  "simple-line-icons": "Simple line icons",
  et: "Elegant",
  el: "Elusive Icons",
  vaadin: "Vaadin Icons",
  "grommet-icons": "Grommet Icons",
  whh: "WebHostingHub Glyphs",
  "si-glyph": "SmartIcons Glyph",
  zmdi: "Material Design Iconic Font",
  ls: "Ligature Symbols",
  bpmn: "BPMN",
  "flat-ui": "Flat UI Icons",
  vs: "Vesper Icons",
  topcoat: "TopCoat Icons",
  il: "Icalicons",
  websymbol: "Web Symbols Liga",
  fontelico: "Fontelico",
  ps: "PrestaShop Icons",
  feather: "Feather Icons",
  "mono-icons": "Mono Icons",
  pepicons: "Pepicons",
};

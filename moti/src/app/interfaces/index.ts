export enum Variant {
  Dark = "dark",
  Transparent = "transparent",
  Light = "light",
}

export enum PositionStyle {
  Sticky = "sticky",
  Absolute = "absolute",
  Normal = " ",
}

export interface NavbarProps {
  variant?: Variant;
  positionStyle?: PositionStyle;
}

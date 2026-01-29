import type { HTMLAttributes } from "react";

declare namespace JSX {
  interface IntrinsicElements {
    "iconify-icon": HTMLAttributes<HTMLElement> & {
      icon?: string;
      width?: number | string;
      height?: number | string;
      inline?: boolean | string;
    };
  }
}

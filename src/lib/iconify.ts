"use client";

import { Icon } from "@iconify-icon/react";
import type { IconifyIcon } from "@iconify-icon/react";

import arrowRight from "@iconify-icons/mdi/arrow-right";
import calendar from "@iconify-icons/mdi/calendar";
import clockOutline from "@iconify-icons/mdi/clock-outline";
import contentCopy from "@iconify-icons/mdi/content-copy";
import github from "@iconify-icons/mdi/github";
import linkedin from "@iconify-icons/mdi/linkedin";
import link from "@iconify-icons/mdi/link";
import openInNew from "@iconify-icons/mdi/open-in-new";

import discord from "@iconify-icons/ic/baseline-discord";

import gradleIcon from "@iconify-icons/devicon/gradle";

import nextjsIcon from "@iconify-icons/logos/nextjs-icon";
import intellijIcon from "@iconify-icons/logos/intellij-idea";

import reactIcon from "@iconify-icons/vscode-icons/file-type-reactjs";
import typescriptIcon from "@iconify-icons/vscode-icons/file-type-typescript-official";
import tailwindIcon from "@iconify-icons/vscode-icons/file-type-tailwind";
import kotlinIcon from "@iconify-icons/vscode-icons/file-type-kotlin";

const stackIconMap: Record<string, IconifyIcon> = {
  "logos:nextjs-icon": nextjsIcon,
  "vscode-icons:file-type-reactjs": reactIcon,
  "vscode-icons:file-type-typescript-official": typescriptIcon,
  "vscode-icons:file-type-tailwind": tailwindIcon,
  "vscode-icons:file-type-kotlin": kotlinIcon,
  "devicon:gradle": gradleIcon,
  "logos:intellij-idea": intellijIcon,
};

function getStackIcon(iconName: string) {
  return stackIconMap[iconName];
}

export {
  Icon,
  type IconifyIcon,
  getStackIcon,
  arrowRight,
  calendar,
  clockOutline,
  contentCopy,
  discord,
  github,
  intellijIcon,
  kotlinIcon,
  link,
  linkedin,
  nextjsIcon,
  openInNew,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
};

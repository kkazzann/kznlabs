"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, link, openInNew } from "@/lib/iconify";
import { trackExternalLink } from "@/lib/analytics";

type LinkType = "inner" | "outer";

type LinkComponentProps = {
  type?: LinkType;
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const INTERNAL_HOSTS = ["kznlabs.com", "www.kznlabs.com"];

function getHostname(href: string) {
  try {
    return new URL(href).hostname;
  } catch {
    return "";
  }
}

function isExternalLink(href: string) {
  const hostname = getHostname(href);
  if (!hostname) {
    return false;
  }
  return !INTERNAL_HOSTS.includes(hostname);
}

export function LinkComponent({ type, href, className, children, ...props }: LinkComponentProps) {
  const isOuter = type ? type === "outer" : isExternalLink(href);

  const handleClick = () => {
    if (isOuter) {
      trackExternalLink(href);
    }
  };

  if (isOuter) {
    return (
      <a
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[var(--foreground)]",
          className,
        )}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
        onClick={handleClick}
        {...props}
      >
        {children}
        <Icon icon={openInNew} className="h-3.5 w-3.5 flex-shrink-0" />
      </a>
    );
  }

  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[var(--foreground)]",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
      <Icon icon={link} className="h-3.5 w-3.5 flex-shrink-0" />
    </Link>
  );
}

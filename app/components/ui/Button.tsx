"use client";

import { cn } from "@/app/lib/utils";
import { scrollToSection } from "@/app/lib/scrollToSection";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-on hover:bg-accent-strong focus-visible:outline-accent active:bg-accent-strong",
  secondary:
    "border border-border text-foreground hover:border-accent/50 hover:text-accent-strong focus-visible:outline-accent active:border-accent/50 active:bg-surface-hover",
  ghost:
    "text-foreground-muted hover:text-foreground focus-visible:outline-accent active:text-foreground",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition duration-200 outline-offset-2 focus-visible:outline-2 active:scale-[0.98]";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "className" | "href"
    >)
  | ({ href?: undefined } & Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "className"
    >)
);

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, onClick, ...anchorProps } = props;

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
      onClick?.(event);
      // Next's router leaves same-page "#id" hrefs without a native
      // scroll-into-view, so it's triggered explicitly here.
      if (!event.defaultPrevented && href.startsWith("#")) {
        event.preventDefault();
        scrollToSection(href.slice(1));
        window.history.pushState(null, "", href);
      }
    }

    return (
      <a href={href} onClick={handleClick} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

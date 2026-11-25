"use client";

import { cn } from "@/app/lib/utils";
import { scrollToSection } from "@/app/lib/scrollToSection";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-white active:bg-foreground-muted",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-white/20 hover:bg-surface-hover active:bg-surface-raised",
  ghost:
    "text-foreground-muted hover:bg-surface-hover hover:text-foreground active:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
};

const baseStyles =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-150 outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

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

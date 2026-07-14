import { Fragment, type ReactNode } from "react";

/**
 * The copy in content.ts carries `**bold**` and `*italic*`. That's the entire
 * markup vocabulary the page needs, so it gets ~15 lines rather than a markdown
 * dependency. Anything richer than this belongs in a component, not in a string.
 */
export function rich(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

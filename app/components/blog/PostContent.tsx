import React from "react";

const TOKEN_REGEX =
  /(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:\/\/|\/)[^\s)]+\)|https?:\/\/[^\s<]+)/g;

function renderLink(href: string, label: string, key: number) {
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      key={key}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        textDecoration: "underline",
        wordBreak: "break-word",
        fontWeight: 500,
      }}
    >
      {label}
    </a>
  );
}

function formatInline(text: string): React.ReactNode[] {
  const parts = text.split(TOKEN_REGEX);

  return parts.map((part, i) => {
    if (!part) return null;

    // **bold**
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }

    // [label](url)
    const mdMatch = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)$/);
    if (mdMatch) {
      return renderLink(mdMatch[2], mdMatch[1], i);
    }

    // Plain URL: https://... or http://...
    if (/^https?:\/\//i.test(part)) {
      const cleanUrl = part.replace(/[.,!?;:]+$/, "");
      const trailing = part.slice(cleanUrl.length);
      return (
        <React.Fragment key={i}>
          {renderLink(cleanUrl, cleanUrl, i)}
          {trailing}
        </React.Fragment>
      );
    }

    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function PostContent({ content }: { content: string }) {
  const blocks = content
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", lineHeight: 1.75 }}>
      {blocks.map((block, idx) => {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);

        if (lines.length === 1 && /^###\s+/.test(lines[0])) {
          return (
            <h3 key={idx} style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "0.75rem" }}>
              {formatInline(lines[0].replace(/^###\s+/, ""))}
            </h3>
          );
        }

        if (lines.length === 1 && /^##?\s+/.test(lines[0])) {
          return (
            <h2 key={idx} style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "0.75rem" }}>
              {formatInline(lines[0].replace(/^##?\s+/, ""))}
            </h2>
          );
        }

        if (lines.every((l) => /^[-*]\s+/.test(l))) {
          return (
            <ul key={idx} style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              {lines.map((l, i) => (
                <li key={i} style={{ marginBottom: "0.35rem" }}>
                  {formatInline(l.replace(/^[-*]\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        if (lines.every((l) => /^\d+\.\s+/.test(l))) {
          return (
            <ol key={idx} style={{ paddingLeft: "1.5rem", listStyleType: "decimal" }}>
              {lines.map((l, i) => (
                <li key={i} style={{ marginBottom: "0.35rem" }}>
                  {formatInline(l.replace(/^\d+\.\s+/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={idx} style={{ margin: 0 }}>
            {lines.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {formatInline(line)}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
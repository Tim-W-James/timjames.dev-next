import CopyTextButton from "@features/blog/utils/CopyTextButton";
import { clsx } from "clsx";
import rangeParser from "parse-numeric-range";
import type { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { z } from "zod";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
const syntaxTheme = oneDark;

const languageRegex = /language-(\w+)/u;
// biome-ignore lint/nursery/useUnicodeRegex: used for code only
const lineNumberRegex = /{([\d,-]+)}/;

const CodeBlock: React.FC<{
  node?: unknown | undefined;
  className?: string | undefined;
  inline?: boolean | undefined;
  children?: ReactNode | undefined;
}> = ({ node, className, inline, ...props }) => {
  // Adapted from https://amirardalan.com/blog/syntax-highlight-code-in-markdown
  const hasLang = languageRegex.exec(className ?? "");

  const nodeDataCodec = z.object({ data: z.object({ meta: z.unknown() }) });
  const nodeData = nodeDataCodec.safeParse(node);
  const hasMeta = nodeData.success;

  const applyHighlights: object = (applyHighlights: number) => {
    if (hasMeta) {
      const rawMetadata = nodeData.data.data.meta;
      const metadata =
        typeof rawMetadata === "string" ? rawMetadata.replace(/\s/gu, "") : "";
      const strlineNumbers = lineNumberRegex.test(metadata)
        ? lineNumberRegex.exec(metadata)?.[1]
        : "0";
      const highlightLines = rangeParser(strlineNumbers ?? "");
      const highlight = highlightLines;
      const data = highlight.includes(applyHighlights) ? "highlight" : null;
      return { data };
    }
    return {};
  };

  const codeString = (
    typeof props.children === "string"
      ? props.children
      : typeof props.children === "object" && props.children
        ? // @ts-expect-error - fallback for parsing react nodes
          props.children[0]
        : ""
  ) as string;

  return hasLang ? (
    <>
      <SyntaxHighlighter
        customStyle={{
          marginBottom: "2rem",
          marginTop: 0,
          paddingBottom: 0,
        }}
        language={hasLang[1]}
        lineProps={applyHighlights}
        PreTag="div"
        showLineNumbers={true}
        style={syntaxTheme}
        useInlineStyles={true}
        wrapLines={hasMeta}
      >
        {[codeString]}
      </SyntaxHighlighter>
      <div className={clsx("-mt-[1.5rem] flex justify-between pb-1")}>
        <div className={clsx("mx-2 mt-[0.75rem] select-none text-sm italic")}>
          {hasLang[1]}
        </div>
        {isMobile ? null : (
          <CopyTextButton
            buttonClasses={clsx("!mx-1 !h-[30px]", "!px-2 !py-0", "!text-sm")}
            stringToCopy={codeString}
          />
        )}
      </div>
    </>
  ) : (
    <code className={className} {...props} />
  );
};

export default CodeBlock;

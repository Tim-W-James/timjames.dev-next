import { clsx } from "clsx";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./markdown/CodeBlock";
import Header from "./markdown/Header";

/**
 * Render markdown content with syntax highlighting in code blocks
 */
const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => (
  <article className={clsx("prose", "prose-invert", "lg:prose-xl", "mb-16")}>
    <ReactMarkdown
      components={{
        code: CodeBlock,
        // h1 should not be rendered within markdown content, so is mapped to a h2
        h1: Header,
        h2: Header,
        h3: Header,
      }}
    >
      {markdown}
    </ReactMarkdown>
  </article>
);

export default MarkdownRenderer;

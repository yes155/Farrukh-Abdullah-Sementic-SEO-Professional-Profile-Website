import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function MarkdownContent({ content }: { content: string }) {
  return <div className="article-body space-y-5 text-sm md:text-base leading-relaxed text-neutral-700">
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
      h1: ({ children }) => <h2 className="text-2xl font-black text-black mt-8">{children}</h2>,
      h2: ({ children }) => <h2 className="text-xl md:text-2xl font-black text-black mt-8 border-b pb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-lg font-bold text-black mt-6">{children}</h3>,
      h4: ({ children }) => <h4 className="text-base font-bold text-black mt-5">{children}</h4>,
      ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
      a: ({ href, children }) => href?.startsWith("/") ? <Link href={href} className="text-cyan-800 underline underline-offset-4 font-semibold">{children}</Link> : <a href={href} className="text-cyan-800 underline underline-offset-4 font-semibold">{children}</a>,
      table: ({ children }) => <div className="overflow-x-auto"><table className="w-full border-collapse text-sm">{children}</table></div>,
      th: ({ children }) => <th className="border border-neutral-300 p-3 text-left bg-neutral-100 text-black">{children}</th>,
      td: ({ children }) => <td className="border border-neutral-300 p-3 align-top">{children}</td>,
      pre: ({ children }) => <pre className="bg-neutral-100 border p-4 overflow-x-auto text-xs">{children}</pre>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-cyan-600 pl-4">{children}</blockquote>,
    }}>{content}</ReactMarkdown>
  </div>;
}

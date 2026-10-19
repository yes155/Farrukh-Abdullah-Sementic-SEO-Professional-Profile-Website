export function articleHeadingId(line: number) { return `section-${line}`; }
export function getArticleHeadings(markdown: string) {
  return markdown.split('\n').flatMap((line, index) => {
    const match = /^##\s+(.+?)\s*#*\s*$/.exec(line);
    return match ? [{ text: match[1], id: articleHeadingId(index + 1) }] : [];
  });
}

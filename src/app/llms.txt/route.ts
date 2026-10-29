import { getInsightsArticles } from '@/sanity/posts';
import { buildLlmsText } from '@/lib/llms';

export async function GET() {
  return new Response(buildLlmsText(await getInsightsArticles()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

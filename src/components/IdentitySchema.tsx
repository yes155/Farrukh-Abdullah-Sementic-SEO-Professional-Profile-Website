import identityGraph from '@/lib/identityGraph.json';
import JsonLd from './JsonLd';

// One server-rendered identity record on every route, including client navigation.
// Services, articles, and WebSite reference these stable entity identifiers.
export default function IdentitySchema() {
  return <JsonLd id="schema-identity-graph" data={identityGraph} />;
}

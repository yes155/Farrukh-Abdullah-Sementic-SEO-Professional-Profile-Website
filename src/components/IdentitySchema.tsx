'use client';

import { usePathname } from 'next/navigation';
import identityGraph from '@/lib/identityGraph.json';
import { PERSON_SCHEMA, ORGANIZATION_SCHEMA } from '@/lib/schemas';
import JsonLd from './JsonLd';

// usePathname renders during prerendering and updates when Next links change routes.
// Keep the requested graph in the root document head, with one identity definition
// per page, while retaining the existing identity markup on other routes.
export default function IdentitySchema({ placement }: { placement: 'head' | 'body' }) {
  const pathname = usePathname();
  const usesGraph = pathname === '/' || pathname === '/about';
  if (placement === 'head') {
    return usesGraph ? <JsonLd id="schema-identity-graph" data={identityGraph} /> : null;
  }
  if (usesGraph) return null;
  return <>
    <JsonLd id="schema-person" data={PERSON_SCHEMA} />
    <JsonLd id="schema-organization" data={ORGANIZATION_SCHEMA} />
  </>;
}

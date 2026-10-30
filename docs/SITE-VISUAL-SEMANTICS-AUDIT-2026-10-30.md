# Site-wide visual semantics audit — 30 October 2026

Scope: current 68-URL source inventory, representative live electrician page at desktop width 1363 CSS px, and production HTML regression checks. Implementation is in this change. The Koray visual-semantics playbook supplies testable UX hypotheses; it does not establish a special Google ranking threshold. Google’s helpful-content guidance favors useful, original information and clear headings; W3C reflow guidance calls for usable narrow layouts.

| Check | Status before → after | Evidence and fix | Priority |
| --- | --- | --- | --- |
| Page function and opening entity | Mixed → pass in source | Different heading scales and intro positions; PageHeader now introduces page/task, attributes and relevant action consistently. Electrician still identifies electricians early and presents its sample review. | P1 |
| Site structure and navigation | Fail → pass in source | Editorial, About, cases, insights, tools, legal, and Contact used unrelated wrappers and heading patterns. Shared PageFrame/Header/Panel/Navigation and tokens now align them; service industries are grouped by user task. Nav marks active page/section. | P1 |
| Above-fold task | Mixed → pass in source | Audit workbook now puts actual controls immediately after introduction, with manual-only limit adjacent. Electrician inquiry and break-even calculator retained. | P1 |
| Evidence and claims | Pass → preserved | Case-study evidence context, publication types, verified source links, About badge and links remain. No fabricated review, ranking or client metric. | P0 guardrail |
| Right-side and vertical whitespace | Fail → improved in source | Old electrician hero was about 669px tall and sections padded 76px at 1363px. Shared 80rem shell, 24/32px section gap, and wider reading columns; electrician uses shell/spacing tokens. Browser inspection after deployment still needed for visual proof. | P1 |
| Forms and keyboard | Mixed → improved in source | Contact form labels now associate with their controls, service selection has a named group and pressed states; focus outline is sitewide. Submit flow itself remains untested to avoid a real inquiry. | P1 |
| Responsive reflow / contrast | Verify | Responsive grids and 320px-capable shell in CSS; desktop/narrow browser audit and measured color contrast remain needed. Build/HTML checks alone cannot prove visual usability. | P1 |
| Metadata, access, internal links, schema | Pass | Existing 68-page production checks cover one H1, canonical/description, links/fragment paths, head identity graph, Article/Service schemas, bot access and redirects. No new schema type or artificial keyword quota. | P0 guardrail |

## Query-to-page decision

| Cluster | Target | Decision and rationale | Evidence / confidence |
| --- | --- | --- | --- |
| Semantic, local, AI SEO consulting | Three core service pages | Distinct deliverables and customer tasks, surfaced as three service cards on hub. | Existing source; high |
| Electrician SEO | Dedicated electrician page | Keep custom audit, job-journey examples, scope, calculator and inquiry path. Align visual tokens only. | Inspected live page and code; high |
| Industry and remote markets | Existing niche/location pages | Preserve URLs pending page-level GSC/backlink/conversion analysis. Layout consolidation alone is not evidence to merge or redirect. | Current content inventory; medium |
| Proof and research | Case studies, About, Evidence | Use project evidence and properly labelled authored/public work as supporting bridges. | Source and previous verification; high |
| Guides and tools | Insights and two interactive tools | Explain methods on guides and move working input ahead of optional instructions on workbook. | Current source; high |

Practitioner-tested hypothesis: placing the main entity/task early and showing true attributes near a useful action may improve comprehension and task completion. It is not a proven ~2% ranking rule. Compare representative GSC queries and landing pages over matched periods and track qualified inquiries separately; do not attribute ranking changes to this visual release without additional evidence.

Verification: clean Next.js production build and TypeScript passed; 68-page production HTTP suite passed. The earlier desktop live electrician screenshot was inspected. After deployment, inspect one representative route per page family at desktop and narrow width and exercise the two tools without submitting an inquiry.

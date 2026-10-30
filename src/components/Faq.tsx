import PageQuestions from './PageQuestions';
import { FAQ_QUESTIONS_DATA } from '@/lib/schemas';
export default function Faq() {
  return <section id="faq" className="site-shell site-section border-t border-neutral-200"><div><PageQuestions title="Questions before we work together" items={FAQ_QUESTIONS_DATA.map(item => ({ q: item.question, a: item.answer }))} /></div></section>;
}

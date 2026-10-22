export type BreakEvenResult =
  | { valid: false; message: string }
  | { valid: true; contribution: number; jobs: number; remaining: number };

// Round money to cents before dividing; fractional jobs must round up.
export function calculateElectricianBreakEven(campaign: number, revenue: number, directCost: number): BreakEvenResult {
  if (![campaign, revenue, directCost].every(value => Number.isFinite(value) && value >= 0 && value <= 100_000_000)) {
    return { valid: false, message: 'Enter amounts between $0 and $100,000,000.' };
  }
  const campaignCents = Math.round(campaign * 100);
  const contributionCents = Math.round(revenue * 100) - Math.round(directCost * 100);
  if (contributionCents <= 0) {
    return { valid: false, message: 'Revenue per job must exceed its direct delivery cost to cover campaign spending.' };
  }
  const jobs = Math.ceil(campaignCents / contributionCents);
  return { valid: true, contribution: contributionCents / 100, jobs, remaining: (jobs * contributionCents - campaignCents) / 100 };
}

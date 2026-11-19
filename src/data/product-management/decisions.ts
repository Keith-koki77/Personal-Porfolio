export type ProductDecision = {
  project: string
  challenge: string
  decision: string
  rationale: string
  principle: string
  detail?: string
}

export const decisions: ProductDecision[] = [
  {
    project: 'QavaEat',
    challenge:
      'Daily food ordering solves immediate demand but doesn\'t necessarily address the burden of planning meals every day.',
    decision:
      'Position QavaEat around scheduled, prepaid meal plans rather than instant ordering.',
    rationale:
      'The product creates a differentiated value proposition around predictability, convenience, and budget control.',
    principle:
      'Build around the actual problem, not the existing category convention.',
  },
  {
    project: 'QavaEat',
    challenge:
      'Customers may select different meals from different chefs at different prices and locations.',
    decision:
      'Design a planning experience that makes scheduling, pricing, and fulfilment understandable across the entire plan.',
    rationale:
      'The product must represent operational complexity without transferring unnecessary complexity to the customer.',
    principle:
      'Hide unnecessary complexity. Preserve important information.',
  },
  {
    project: 'QavaEat',
    challenge:
      'Managing delivery introduces additional operational responsibilities.',
    decision:
      'Use delivery partners rather than making QavaEat itself a delivery company.',
    rationale:
      'Keep the marketplace\'s core product responsibilities distinct from third-party delivery operations.',
    detail:
      'QavaEat\'s delivery commission is 10% and is charged to the delivery partner, not the customer.',
    principle:
      'Align product scope, operational responsibility, and business economics.',
  },
  {
    project: 'MamaSure',
    challenge:
      'Payments, contributions, balances, and transaction records are interconnected but have different responsibilities.',
    decision:
      'Define payments, contributions, and the ledger as distinct but connected product modules.',
    rationale:
      'Financial traceability and data consistency need to be considered at the product architecture level.',
    principle:
      'Build system integrity into the product from the beginning.',
  },
]

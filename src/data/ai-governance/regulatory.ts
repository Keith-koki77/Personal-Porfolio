export type RegulatoryFramework = {
  name: string
  description: string
  relevance: string
  sourceUrl?: string
}

export const regulatoryFrameworks: RegulatoryFramework[] = [
  {
    name: 'ISO/IEC 42001',
    description:
      'An international standard specifying requirements and guidance for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS).',
    relevance:
      'Provides a structured framework for organizational AI governance, including risk management, accountability, transparency, human oversight, data governance, and lifecycle management.',
    sourceUrl: 'https://www.iso.org/standard/81230.html',
  },
  {
    name: 'NIST AI Risk Management Framework (AI RMF)',
    description:
      'A voluntary framework for incorporating trustworthiness and risk management into the design, development, use, and evaluation of AI systems.',
    relevance:
      'Offers a structured approach to AI risk management with four functions: Govern, Map, Measure, and Manage. Useful for organizations seeking a practical, adaptable risk framework.',
    sourceUrl: 'https://www.nist.gov/itl/ai-risk-management-framework',
  },
  {
    name: 'OECD AI Principles',
    description:
      'International principles promoting innovative, trustworthy, and human-centred AI that respects human rights and democratic values.',
    relevance:
      'Provides five value-based principles (inclusive growth, human-centred values, transparency, robustness, accountability) and five policy recommendations for governments and organizations.',
    sourceUrl: 'https://oecd.ai/en/ai-principles',
  },
  {
    name: 'EU AI Act',
    description:
      'A comprehensive regulatory framework for AI systems in the European Union, classifying AI by risk level and imposing requirements accordingly.',
    relevance:
      'Establishes obligations for high-risk AI systems, including risk management, data governance, transparency, human oversight, and conformity assessment. Relevant for organizations deploying AI in or serving EU markets.',
    sourceUrl: 'https://artificial-intelligence-act.com',
  },
]
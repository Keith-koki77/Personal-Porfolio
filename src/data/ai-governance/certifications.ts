export type AICertification = {
  title: string
  issuer: string
  completionDate: string
  credentialId?: string
  verificationUrl?: string
  imageUrl?: string
}

export const aiCertifications: AICertification[] = [
  {
    title: 'AI Governance for ISO/IEC 42001',
    issuer: '[Issuing Institution — to be confirmed from certificate]',
    completionDate: '[Completion Date — to be confirmed from certificate]',
    credentialId: '[Credential ID — if available]',
    verificationUrl: '[Verification URL — if publicly available]',
    imageUrl: '[Certificate image path — if provided]',
  },
]
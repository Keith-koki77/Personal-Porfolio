export type EngineeringDecision = {
  title: string
  problem: string
  consideration: string
  implementation: string
  benefit?: string
}

export const engineeringDecisions: EngineeringDecision[] = [
  {
    title: 'Choosing the Right Product Architecture',
    problem:
      'Connecting frontend, backend, database, and external services without creating unnecessary complexity or tight coupling between layers.',
    consideration:
      'Evaluate separation of concerns, deployment independence, team ownership, and scaling requirements. Avoid premature microservices; start with modular monolith patterns.',
    implementation:
      'Next.js frontend with API routes for simpler cases, separate Python backend for complex business logic, shared Supabase for auth and data where appropriate. Clear API contracts between services.',
    benefit:
      'Maintainable boundaries, independent deployments where needed, reduced cross-service coupling.',
  },
  {
    title: 'Designing Reliable Financial Workflows',
    problem:
      'Payment records, wallet balances, contributions, and settlement records must have clear responsibilities, traceable relationships, and auditable histories.',
    consideration:
      'Financial data requires ACID guarantees, idempotency, reconciliation, and clear module boundaries. Payment processing is distinct from contribution tracking, which is distinct from ledger recording.',
    implementation:
      'Separate modules for Payments (transaction processing), Contributions (plan funding), and Ledger (traceable movements). Database constraints, transaction isolation, and audit fields on every financial record.',
    benefit:
      'Traceable financial flows, reduced reconciliation errors, clear audit trail for compliance.',
  },
  {
    title: 'Managing Authentication and Permissions',
    problem:
      'Multiple user roles (customers, chefs, admins, healthcare users) need appropriate access to data and actions without over-engineering authorization logic.',
    consideration:
      'Supabase Auth with Row-Level Security provides database-level access control. Application-layer checks complement database policies. Keep role logic centralized and testable.',
    implementation:
      'Supabase Auth for identity, RLS policies on all tables, role-based UI rendering, protected API routes with server-side validation, clear permission matrix documented per project.',
    benefit:
      'Defense-in-depth security, clear audit path, maintainable permission logic as roles evolve.',
  },
  {
    title: 'Handling API and Deployment Failures',
    problem:
      'Build errors, environment mismatches, server configuration, API failures, callback issues, and production health checks require systematic debugging.',
    consideration:
      'Observability through structured logging, health endpoints, error tracking, and deployment verification. Configuration parity across environments with environment-specific values.',
    implementation:
      'Health check endpoints on all services, structured error responses with correlation IDs, environment-specific config via platform (Vercel/Railway), CI checks for type safety and lint, post-deployment smoke tests.',
    benefit:
      'Faster incident response, reduced deployment risk, confidence in production releases.',
  },
  {
    title: 'Building Maintainable Applications',
    problem:
      'Codebases grow quickly. Reusable components, structured code, validation, clear naming, and modular architecture prevent technical debt accumulation.',
    consideration:
      'Invest in component libraries, shared type definitions, validation schemas, consistent patterns, and automated quality gates early. Refactor proactively.',
    implementation:
      'Shared UI component library, Zod schemas for validation, TypeScript strict mode, ESLint/Prettier, component-driven development, regular dependency updates, architectural decision records.',
    benefit:
      'Faster feature velocity, easier onboarding, reduced bug surface area, sustainable long-term development.',
  },
]
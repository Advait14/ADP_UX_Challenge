# State Model

## Candidate screening states

```text
Application received
  → Ready to review
  → Needs clarification
  → Assessment recommended
  → Assessment completed
  → Assessment result ready
  → Ready to shortlist
  → Decision recorded
```

## Decision paths

```text
Low confidence
  → Recruiter review required
  → Structured assessment OR clarification OR escalation
  → Recruiter decision

High / sufficient evidence
  → Recruiter review required
  → Shortlist OR clarification OR do not progress
  → Candidate update approved
```

## Prototype behavior

- Candidate selection opens an on-demand review drawer.
- Search, filter, and sort controls update the active queue state.
- Assessment, clarification, shortlist, and non-progression decisions update the selected candidate only.
- Candidate update approval creates a visible confirmation.
- Timeline entries record recommendations, assessment events, recruiter decisions, overrides, escalation, and candidate-update approval.
- Overrides and non-progression cannot be recorded without a job-related reason.

## Safeguards

- Low confidence is never a rejection state.
- AI output is advisory, not a final hiring decision.
- Candidate communication is not sent without recruiter approval.

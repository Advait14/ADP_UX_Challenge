# State Model

## Candidate screening states

```text
Application received
  → Ready to review
  → Needs clarification
  → Assessment recommended
  → Assessment completed
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

- Candidate selection updates the queue preview.
- Filter selection changes the active queue state.
- Assessment approval and shortlist approval update local interface state.
- Candidate update approval creates a visible confirmation.
- Timeline entries represent audit events for decisions in the Rohan scenario.

## Safeguards

- Low confidence is never a rejection state.
- AI output is advisory, not a final hiring decision.
- Candidate communication is not sent without recruiter approval.

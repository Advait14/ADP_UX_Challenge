# UX Specification

## Recruiter dashboard

- Shows four operational groups: decisions, assessment results, clarifications, and updates awaiting approval.
- Prioritises candidates by how long they have waited for the recruiting team.
- Provides direct routes into filtered work and candidate-update approval.
- Labels prototype queue information as synthetic demo data.

## Candidate queue

- Uses action-led filters: Needs your decision, Clarifications, Assessment results, All.
- Search, filters, and sort controls update the visible candidate set.
- Each row contains candidate, evidence signal, waiting time, labelled status, and review affordance.
- Selecting a row opens an on-demand right-side review drawer; opening full evidence is optional.
- Keyboard shortcuts support next/previous candidate, open, and close actions.
- Bulk selection is limited to preparing non-consequential clarification drafts.

## Candidate review

- Starts with candidate stage and decision controls.
- Shows recommendation, confidence, evidence found, missing evidence, source excerpt, and timeline.
- Shows completed structured-assessment evidence for the low-confidence scenario.
- States which inputs were used and excluded.
- Provides escalation for unclear evidence or accommodation requests.

## Decision modal

- Options: structured assessment, shortlist, clarification, or do not progress.
- States that the recommendation is advisory.
- Requires a structured job-related reason for recommendation overrides or non-progression.
- Records the selected action, reason, note, actor, and time in the candidate timeline.

## Candidate update

- Is a preview, not an automatic message.
- Is editable by the recruiter and sent only after approval.
- Mentions alternative format / support for the assessment route.
- Changes content for assessment, clarification, shortlist, and non-progression outcomes.
- Explicitly states that the prototype does not send a real message.

## Hiring-manager brief

- Deliberately excludes candidate queue, detailed audit log, and unrelated applicant data.
- Includes candidate summary, key criteria, recruiter rationale, and next-step approval.

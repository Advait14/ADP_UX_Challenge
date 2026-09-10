# Visual Language — Calm Recruiting Workspace

## Design intent

Create an ATS workspace that feels capable without feeling clinical. The interface should help a recruiter work through sensitive decisions with calm attention: structured enough for high-volume operations, while keeping a clean, neutral product-tool expression.

**Working phrase:** *quiet confidence, human judgement.*

## Reference synthesis

- Recruitment products such as [Pin](https://mobbin.com/screens/d11e5744-4017-44ed-bfe4-a6ef58feb8b0) and [Wrangle](https://mobbin.com/screens/59d9966c-0a4d-4041-9d76-bd3b2e38daa8) show the value of a persistent role context, efficient candidate scanning, and clear operational actions.
- [Homerun](https://mobbin.com/screens/c4ce5f75-da60-4a2d-b15d-df5cc1ef5739) demonstrates a quieter list-led ATS surface, while [Maze](https://mobbin.com/screens/3e58c3d9-c8de-477f-8358-2b530889414a) shows how a focused detail panel can preserve context.
- Productivity products such as [Asana](https://mobbin.com/screens/afea59a1-d470-437b-b8a2-712a8f83cf01) and [Lightfield](https://mobbin.com/screens/c1322cfa-763a-4f21-8b49-0062d3c40ed1) demonstrate the useful pattern of a worklist with a dedicated detail pane.

The project should adopt those structural patterns, not copy their visual assets or layouts.

## Personality

- **Human-centred:** candidate review is treated as a considered decision, not a mechanical score-sorting activity.
- **Neutral product-tool expression:** a clean sans-serif hierarchy, restrained panels, and precise utility controls keep the workspace contemporary.
- **Operationally grounded:** compact tables, filters, evidence rows, and fixed actions maximise the number of meaningful items visible.
- **Calmly intelligent:** AI is communicated through evidence and uncertainty, not through decorative “futuristic” motifs.

## Colour direction

Green remains the trust anchor, but it should be more nuanced than a generic dashboard palette.

- **Ink — deep forest:** `#183A31` for navigation, high-emphasis text, and primary actions.
- **Evergreen — active state:** `#2D6A4F` for selected states and affirmative controls.
- **Mist — supportive surface:** `#EAF3EC` for selected rows, completed evidence, and quiet backgrounds.
- **Parchment — canvas:** `#FAF9F6` for the page background; warmer than clinical grey.
- **Paper — elevated surface:** `#FFFFFF` for work panels, sheets, and modals.
- **Clay — attention / low confidence:** `#B96D42` with `#FFF1E7` surface; warm and intentional rather than warning-yellow.
- **Plum — clarification:** `#6B5B95` with `#F0ECF8` surface; distinct from low-confidence attention.
- **Slate — neutral detail:** `#5F6D68` for metadata and secondary information.

Red should be reserved for destructive action or an error state. Green, clay, and plum must always appear with labels and icons; they are not status signals by colour alone.

## Typography

- **Single product typeface:** Inter for page titles, navigation, data, filters, evidence, and decisions.
- **Rule:** use weight, size, spacing, and contrast—not a display typeface—to establish hierarchy.
- **Density:** page title 26px, section title 17px, interface text 13px, metadata 11–12px.

## Layout and spacing

- Use a three-part desktop shell: **52px icon rail → 256px expanded navigation → fluid work area**.
- Keep a global utility bar above the work area: role context on the left, global search in the centre, utility controls and profile on the right.
- Make the queue the primary working surface: **candidate worklist left, selected candidate detail right**.
- Use the full candidate review only for evidence verification and decisions that require concentration.
- Prefer one strong primary action per context. Keep secondary actions close, but visually quieter.
- Use 8px spacing increments. Compact operational rows use 10–13px vertical padding; decision surfaces use 16px.

## Surface and elevation

- Parchment canvas + paper work surfaces create softness without adding decoration.
- Use thin, low-contrast borders before shadows. Shadows should be diffuse and rare, reserved for modal sheets and temporary layers.
- A selected candidate row should use a mist fill and a 3px evergreen leading edge, not a heavy card treatment.
- Evidence should be grouped into small, calm rows rather than dense score widgets.

## Component expression

### Worklist row

Name, a plain-language evidence signal, labelled status, and time due. Avoid a prominent numeric score. Keep row height compact and make the selected row visibly anchored while the recruiter reads the adjacent detail pane.

### Recommendation card

Use a sentence-led recommendation: **what evidence was found, what remains unclear, and what the recruiter can do next.** Low confidence uses clay surface treatment and the explicit label “Recruiter review required.”

### Decision controls

Place the recommended next action in evergreen. Keep “do not progress” quiet but clearly destructive; it should require a job-related reason. Avoid a large block of equally weighted actions.

### Status chips

Small, text-first, icon-supported pills. They summarize state; they do not carry the main decision logic.

### Audit timeline

Use a simple vertical line with discreet event markers. Keep it below evidence and decision content because it supports accountability rather than immediate action.

## AI expression

- Use “AI-assisted recommendation,” never language suggesting autonomous hiring.
- Present evidence snippets, missing evidence, confidence, and a next step together.
- Explain excluded inputs in quiet supporting text.
- Treat low confidence as a signal to gather better evidence, not a negative assessment of the candidate.
- Avoid bot avatars, glowing gradients, brain icons, chat-first experiences, and claims of objectivity.

## Motion and feedback

- Use short, functional transitions: 150–200ms for a selected worklist row, 200–250ms for a detail pane or modal.
- Confirm recruiter-approved actions with concise, plain-language feedback.
- Do not use celebratory animations for shortlisting; recruitment outcomes are consequential.

## Do not do

- Neon gradients, glassmorphism, or generic AI imagery
- Large dashboard charts that distract from today’s decisions
- Score gauges as the primary candidate summary
- Colour-only status communication
- Overly cheerful language around rejection or candidate uncertainty

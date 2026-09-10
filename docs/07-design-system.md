# Design System

## Visual tone

**Calm recruiting workspace:** human-centred, neutral, and operationally grounded. The interface uses a dense modern-product layout: icon rail, expanded navigation, global search, and an evidence-led worklist/detail pane. See [13-visual-language.md](13-visual-language.md) for the full direction.

## Foundations

- **Ink / deep forest:** `#183A31`
- **Evergreen / active:** `#2D6A4F`
- **Mist / selected surface:** `#EAF3EC`
- **Parchment / canvas:** `#FAF9F6`
- **Paper / elevated surface:** `#FFFFFF`
- **Clay / low confidence:** `#B96D42` with `#FFF1E7` surface
- **Plum / clarification:** `#6B5B95` with `#F0ECF8` surface
- **Slate / metadata:** `#5F6D68`

## Typography

- Product typeface: Inter for both headings and interface text
- Use weight, size, spacing, and contrast to create hierarchy; do not introduce a decorative display typeface.
- Use a clear heading hierarchy and concise labels for dense operational scanning.

## Components

- Primary, secondary, and quiet buttons
- Status pills with icon/dot and text label
- Candidate avatars
- Worklist rows
- Evidence criteria rows
- Recommendation callout
- Decision modal
- Audit timeline

## Layout and feedback

- Use a 52px utility rail, 256px expanded navigation panel, and fluid work area with worklist/detail-pane relationship.
- Place global search and utility controls in the top bar.
- Use thin borders and restrained, diffuse shadows.
- Prefer one primary action per context; keep destructive action quiet but explicit.
- Use 150–250ms functional transitions only. Do not use celebratory motion for hiring outcomes.

## Accessibility rules

- Never use colour as the only status signal.
- Pair visual colour with a written label and icon.
- Keep text contrast and hierarchy readable.
- Use clear uncertainty and error messages rather than implying certainty.

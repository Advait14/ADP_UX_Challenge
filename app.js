const candidates = [
  {
    id: "rohan", name: "Rohan Mehta", initials: "RM", experience: "Retail service · 2y 4m", location: "Mumbai", applied: "Today, 8:42 AM", waitingHours: 3,
    status: "Assessment result ready", stage: "assessment", confidence: "Low initial evidence", tone: "amber", consent: "Application consent captured",
    signal: "Transferable service experience · assessment adds new evidence",
    recommendation: "Review assessment for shortlist", recommendationChoice: "shortlist",
    explanation: "The application lacked direct call-centre and CRM evidence. A structured customer-response assessment now provides relevant evidence of empathy, clarity, and issue resolution.",
    evidence: [
      { criterion: "Customer issue resolution", state: "found", text: "Handled delivery complaints, returns, and escalations at UrbanCart.", source: "CV · UrbanCart" },
      { criterion: "Customer-facing experience", state: "found", text: "2 years 4 months of direct retail service experience.", source: "Application + CV" },
      { criterion: "CRM or ticketing familiarity", state: "missing", text: "No direct CRM or ticketing tool experience stated.", source: "Application + CV" },
      { criterion: "Rotational-shift availability", state: "unclear", text: "Availability was not confirmed in the application.", source: "Application" },
    ],
    assessment: {
      state: "completed", completedAt: "Today, 9:32 AM", scenario: "Respond to an upset customer whose replacement order is delayed.",
      summary: "Rohan acknowledged the issue, explained a clear next step, and used an empathetic tone. Policy escalation judgement needs interview verification.",
      rubric: [{ label: "Empathy", result: "Strong" }, { label: "Response clarity", result: "Strong" }, { label: "Issue resolution", result: "Meets" }, { label: "Policy judgement", result: "Verify" }]
    },
    audit: [
      { actor: "System", title: "Initial recommendation generated", detail: "Low evidence confidence; no automatic rejection", time: "9:06 AM" },
      { actor: "Advait M.", title: "Assessment invitation approved", detail: "Customer-response simulation selected", time: "9:14 AM" },
      { actor: "Candidate", title: "Assessment completed", detail: "New job-related evidence available", time: "9:32 AM" },
      { actor: "System", title: "Recommendation updated", detail: "Recruiter review required", time: "9:33 AM" },
    ]
  },
  {
    id: "aisha", name: "Aisha Khan", initials: "AK", experience: "Customer support · 2y", location: "Pune", applied: "Today, 8:56 AM", waitingHours: 2,
    status: "Ready to shortlist", stage: "decision", confidence: "High evidence", tone: "green", consent: "Application consent captured",
    signal: "Support experience and required criteria are complete", recommendation: "Consider shortlist", recommendationChoice: "shortlist",
    explanation: "Direct customer-support experience, confirmed shifts, and relevant resolution examples align with the approved role criteria.",
    evidence: [
      { criterion: "Customer issue resolution", state: "found", text: "Resolved billing and delivery tickets in a prior support role.", source: "CV · HelpPoint" },
      { criterion: "Customer-facing experience", state: "found", text: "Two years in voice and chat customer support.", source: "Application + CV" },
      { criterion: "CRM or ticketing familiarity", state: "found", text: "Zendesk and Freshdesk listed.", source: "Application" },
      { criterion: "Rotational-shift availability", state: "found", text: "Confirmed by candidate.", source: "Application" },
    ], assessment: null,
    audit: [{ actor: "System", title: "Recommendation generated", detail: "Sufficient role-related evidence; recruiter approval required", time: "9:18 AM" }]
  },
  {
    id: "ishan", name: "Ishan Rao", initials: "IR", experience: "BPO operations · 1y", location: "Hyderabad", applied: "Yesterday, 4:20 PM", waitingHours: 18,
    status: "Needs clarification", stage: "clarification", confidence: "Medium evidence", tone: "blue", consent: "Application consent captured",
    signal: "Shift availability is unconfirmed", recommendation: "Request clarification", recommendationChoice: "clarify",
    explanation: "Relevant BPO experience is present, but a required availability field is incomplete.",
    evidence: [
      { criterion: "Customer issue resolution", state: "found", text: "Supported inbound service enquiries.", source: "CV · ConnectOne" },
      { criterion: "Customer-facing experience", state: "found", text: "One year of BPO operations experience.", source: "CV" },
      { criterion: "CRM or ticketing familiarity", state: "unclear", text: "Tool name not provided.", source: "Application" },
      { criterion: "Rotational-shift availability", state: "missing", text: "Required answer is incomplete.", source: "Application" },
    ], assessment: null,
    audit: [{ actor: "System", title: "Clarification recommended", detail: "Required shift field incomplete", time: "Yesterday, 4:22 PM" }]
  },
  {
    id: "mira", name: "Mira Thomas", initials: "MT", experience: "Retail associate · 1y", location: "Bengaluru", applied: "Yesterday, 1:05 PM", waitingHours: 21,
    status: "Ready to review", stage: "decision", confidence: "Medium evidence", tone: "gray", consent: "Application consent captured",
    signal: "Customer-facing evidence present · resolution example unclear", recommendation: "Review evidence", recommendationChoice: "assessment",
    explanation: "The application shows customer-facing experience but lacks a clear example of handling a difficult issue.",
    evidence: [
      { criterion: "Customer issue resolution", state: "unclear", text: "No detailed example supplied.", source: "Application + CV" },
      { criterion: "Customer-facing experience", state: "found", text: "One year of retail floor experience.", source: "CV" },
      { criterion: "CRM or ticketing familiarity", state: "missing", text: "No evidence provided.", source: "Application + CV" },
      { criterion: "Rotational-shift availability", state: "found", text: "Confirmed by candidate.", source: "Application" },
    ], assessment: null,
    audit: [{ actor: "System", title: "Human review requested", detail: "Transferable experience; insufficient resolution evidence", time: "Yesterday, 1:08 PM" }]
  },
  {
    id: "aditya", name: "Aditya S", initials: "AS", experience: "Technical support · 3y", location: "Chennai", applied: "Yesterday, 9:12 AM", waitingHours: 25,
    status: "Ready to shortlist", stage: "decision", confidence: "High evidence", tone: "green", consent: "Application consent captured",
    signal: "Relevant support evidence is complete", recommendation: "Consider shortlist", recommendationChoice: "shortlist",
    explanation: "Technical-support experience, ticketing knowledge, and availability align with the role scorecard.",
    evidence: [
      { criterion: "Customer issue resolution", state: "found", text: "Owned technical tickets through resolution.", source: "CV · ServiceGrid" },
      { criterion: "Customer-facing experience", state: "found", text: "Three years of customer-facing technical support.", source: "Application + CV" },
      { criterion: "CRM or ticketing familiarity", state: "found", text: "ServiceNow and Jira Service Management listed.", source: "Application" },
      { criterion: "Rotational-shift availability", state: "found", text: "Confirmed by candidate.", source: "Application" },
    ], assessment: null,
    audit: [{ actor: "System", title: "Recommendation generated", detail: "Sufficient evidence; recruiter approval required", time: "Yesterday, 9:14 AM" }]
  }
];

const state = {
  view: "dashboard", selected: "rohan", previewOpen: false, modal: null, queueFilter: "decision", sort: "action", search: "",
  selectedIds: new Set(), pendingUpdate: null, decisionError: "", toast: "", expandedAI: false
};

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function icon(name) {
  const paths = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5M9 21v-7h6v7"/>',
    queue: '<path d="M5 6h14M5 12h14M5 18h14"/><circle cx="2" cy="6" r=".7"/><circle cx="2" cy="12" r=".7"/><circle cx="2" cy="18" r=".7"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
    role: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.5 2.5 0 1 1 3.2 2.4c-.9.4-.9 1-.9 1.8M12 17h.01"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    arrow: '<path d="M9 18l6-6-6-6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    dots: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'
  };
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.dots}</svg>`;
}

function pill(text, tone = "gray") { return `<span class="pill ${tone}"><span class="dot"></span>${escapeHTML(text)}</span>`; }
function avatar(candidate) { return `<span class="candidate-avatar">${candidate.initials}</span>`; }
function currentCandidate() { return candidates.find(candidate => candidate.id === state.selected) || candidates[0]; }
function navItem(view, iconName, label) { return `<button class="${state.view === view ? "active" : ""}" data-view="${view}">${icon(iconName)}<span>${label}</span></button>`; }

function shell(content, crumb = "Recruitment / Customer Support Associate") {
  return `<div class="shell">
    <aside class="utility-rail" aria-label="Primary workspace controls"><div class="rail-mark">S</div><button class="rail-button active" title="Recruitment">${icon("home")}</button><button class="rail-button" title="My tasks">${icon("check")}</button><button class="rail-button" title="Notifications">${icon("bell")}</button><button class="rail-button" title="Reports">${icon("history")}</button><div class="rail-bottom"><button class="rail-button" title="Help">${icon("help")}</button></div></aside>
    <aside class="side"><div class="workspace-switch"><div class="workspace-logo">S</div><span>Screening workspace</span><span class="workspace-chevron">⌄</span></div><div class="side-create"><button class="button primary small" data-view="queue">+ Review queue</button></div><div class="nav-label">Workspace</div><nav class="nav">${navItem("dashboard", "home", "Today’s work")}${navItem("queue", "queue", "Candidate queue")}${navItem("scorecard", "check", "Role scorecard")}${navItem("audit", "history", "Decision history")}</nav><button class="role-chip" data-view="manager"><strong>Recruiter view</strong><span>Open hiring-manager handoff →</span></button></aside>
    <main class="main"><header class="topbar"><div class="crumb">${crumb}</div><label class="global-search">${icon("search")}<input data-global-search value="${escapeHTML(state.search)}" placeholder="Search candidates, roles, or actions" /><kbd>⌘ K</kbd></label><div class="top-actions"><button class="utility-action" title="Notifications">${icon("bell")}</button><button class="utility-action" title="Help">${icon("help")}</button><span class="pill green">AI-assisted</span><div class="avatar">AM</div></div></header>${content}</main>
  </div>`;
}

function dashboard() {
  const urgent = [...candidates].sort((a, b) => b.waitingHours - a.waitingHours).slice(0, 4);
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Customer Support Associate · Demo workspace</div><h1>Today’s recruiting work</h1><p class="lede">Start with candidates who are waiting on your decision or need information.</p></div><button class="button primary" data-view="queue">Open candidate queue ${icon("arrow")}</button></div>
    <div class="ops-strip"><button data-open-filter="decision"><strong>12</strong><span>Need your decision</span><small>4 due today</small></button><button data-open-filter="assessment"><strong>12</strong><span>Assessment results</span><small>Ready to review</small></button><button data-open-filter="clarification"><strong>14</strong><span>Need clarification</span><small>Drafts not sent</small></button><button data-open-updates><strong>8</strong><span>Updates to approve</span><small>Candidate waiting</small></button></div>
    <div class="dashboard-grid"><section class="card"><div class="card-head"><div><h2>Waiting on your team</h2><div class="card-sub">Oldest candidate first · synthetic demo data</div></div><button class="button small" data-view="queue">View all</button></div>${urgent.map(c => dashboardRow(c)).join("")}</section>
    <aside class="card action-card"><div><div class="eyebrow">Queue health</div><h2>Keep the response loop moving</h2><p>Aditya has waited 25 hours for a recruiter decision. Eight approved outcomes still need a candidate update.</p></div><div class="health-list"><div><span>Oldest recruiter wait</span><strong>25h</strong></div><div><span>Updates awaiting approval</span><strong>8</strong></div><div><span>Low-confidence auto-rejections</span><strong>0</strong></div></div><button class="button primary" data-open-updates>Review updates</button></aside></div>
  </section>`);
}

function dashboardRow(c) {
  return `<button class="dashboard-row" data-open-candidate="${c.id}">${avatar(c)}<span><strong>${c.name}</strong><small>${c.signal}</small></span>${pill(c.status, c.tone)}<span class="wait-time">${c.waitingHours}h</span>${icon("arrow")}</button>`;
}

function visibleCandidates() {
  const query = state.search.trim().toLowerCase();
  let list = candidates.filter(candidate => {
    const matchesFilter = state.queueFilter === "all" || (state.queueFilter === "assessment" ? candidate.stage === "assessment" : state.queueFilter === "clarification" ? candidate.stage === "clarification" : candidate.stage === "decision" || candidate.stage === "assessment");
    const matchesSearch = !query || `${candidate.name} ${candidate.experience} ${candidate.status} ${candidate.signal}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
  if (state.sort === "oldest") list.sort((a, b) => b.waitingHours - a.waitingHours);
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function queue() {
  const list = visibleCandidates();
  const candidate = currentCandidate();
  const labels = { decision: "Needs your decision", clarification: "Clarifications", assessment: "Assessment results", all: "All candidates" };
  const rows = list.map(c => `<div class="work-row ${state.previewOpen && c.id === candidate.id ? "selected" : ""}"><input class="row-check" type="checkbox" data-select-id="${c.id}" ${state.selectedIds.has(c.id) ? "checked" : ""} aria-label="Select ${c.name} for a safe bulk action"/><button class="work-row-main" data-select="${c.id}" aria-label="Open ${c.name} candidate details">${avatar(c)}<span class="work-copy"><strong>${c.name}</strong><span>${c.signal}</span></span><span class="row-applied">${c.waitingHours}h waiting</span>${pill(c.status, c.tone)}${icon("arrow")}</button></div>`).join("");
  return shell(`<section class="page queue-page"><div class="page-head"><div><div class="eyebrow">Candidate queue</div><h1>Review what needs a decision</h1><p class="lede">Prioritised by action due. AI organises evidence; you decide what happens next.</p></div><button class="button" data-view="scorecard">View role criteria</button></div>
    <div class="queue-tools"><label class="queue-search">${icon("search")}<input data-queue-search value="${escapeHTML(state.search)}" placeholder="Search candidates" /></label><div class="filters"><button class="filter ${state.queueFilter === "decision" ? "active" : ""}" data-filter="decision">Needs decision · 12</button><button class="filter ${state.queueFilter === "clarification" ? "active" : ""}" data-filter="clarification">Clarifications · 14</button><button class="filter ${state.queueFilter === "assessment" ? "active" : ""}" data-filter="assessment">Assessments · 12</button><button class="filter ${state.queueFilter === "all" ? "active" : ""}" data-filter="all">All · 84</button></div><label class="sort-control"><span>Sort</span><select data-sort><option value="action" ${state.sort === "action" ? "selected" : ""}>Action due</option><option value="oldest" ${state.sort === "oldest" ? "selected" : ""}>Oldest waiting</option><option value="name" ${state.sort === "name" ? "selected" : ""}>Candidate name</option></select></label></div>
    <section class="card work-panel"><div class="work-panel-head"><div class="work-panel-title"><strong>${labels[state.queueFilter]}</strong><span>${list.length} sample candidates shown · synthetic data</span></div><span>Select a candidate to review their evidence</span></div><div class="column-head"><span></span><span>Candidate and evidence signal</span><span>Waiting</span><span>Status</span><span></span></div>${rows || `<div class="empty-result"><strong>No candidates match this view</strong><span>Try another filter or search term.</span></div>`}</section>
    ${state.selectedIds.size ? `<div class="bulk-bar"><strong>${state.selectedIds.size} selected</strong><span>Safe bulk actions only</span><button class="button" data-safe-bulk>Prepare clarification drafts</button><button class="button ghost" data-clear-selection>Clear</button></div>` : ""}
    ${drawer(candidate)}
  </section>`);
}

function drawer(candidate) {
  const action = candidate.recommendationChoice === "clarify" ? "Request clarification" : candidate.assessment?.state === "completed" ? "Review assessment" : candidate.recommendationChoice === "assessment" ? "Send assessment" : "Review shortlist";
  const found = candidate.evidence.filter(item => item.state === "found").map(item => item.criterion).slice(0, 2).join(" · ");
  const gaps = candidate.evidence.filter(item => item.state !== "found").map(item => item.criterion).join(" · ") || "No required gaps found";
  return `<aside class="review-preview drawer ${state.previewOpen ? "open" : ""}" aria-hidden="${!state.previewOpen}"><div class="drawer-handle"><span>Candidate review</span><button class="drawer-close" data-close-preview aria-label="Close candidate details">${icon("close")}</button></div><div class="preview-head"><div>${avatar(candidate)}<div><div class="eyebrow">${escapeHTML(candidate.status)}</div><h2>${candidate.name}</h2><p>${candidate.experience} · ${candidate.location}</p></div></div>${pill(candidate.confidence, candidate.tone)}</div><div class="preview-block"><strong>${candidate.recommendation}</strong><p>${candidate.explanation}</p></div><details class="ai-details"><summary>Why this recommendation?</summary><p><strong>Evidence found:</strong> ${found}</p><p><strong>Missing or unclear:</strong> ${gaps}</p><p><strong>Source:</strong> application, CV${candidate.assessment ? ", structured assessment" : ""}</p></details>${candidate.assessment?.state === "completed" ? `<div class="assessment-peek"><span>Assessment completed</span><strong>${candidate.assessment.summary}</strong></div>` : ""}<div class="data-notice"><strong>Candidate data</strong><p>${candidate.consent}. Screening uses application, CV, and approved assessment responses. A correction or alternative format can be requested.</p></div><div class="drawer-spacer"></div><div class="drawer-actions"><button class="button ghost" data-open="${candidate.id}">Open full evidence</button><button class="button primary" data-modal="decision">${action}</button><button class="icon-button" title="More actions">${icon("dots")}</button></div></aside>`;
}

function profile() {
  const candidate = currentCandidate();
  return shell(`<section class="page"><div class="page-head sticky-decision"><div><button class="button ghost small" data-view="queue">← Back to queue</button><div class="eyebrow profile-eyebrow">${candidate.status}</div><h1>${candidate.name}</h1><p class="lede">${candidate.experience} · ${candidate.location} · Applied ${candidate.applied}</p></div><div class="top-actions"><button class="button" data-modal="communication">Preview candidate update</button><button class="button primary" data-modal="decision">Choose next step</button></div></div>
  <div class="profile-grid"><section class="card"><div class="section recommendation-section"><div><div class="eyebrow">AI-assisted recommendation</div><h2>${candidate.recommendation}</h2><p>${candidate.explanation}</p></div>${pill(candidate.confidence, candidate.tone)}</div>${candidate.assessment?.state === "completed" ? assessmentResult(candidate) : ""}<div class="section"><div class="section-title"><div><h3>Role evidence</h3><div class="card-sub">Verify every source before deciding</div></div><span>${candidate.evidence.filter(e => e.state === "found").length} of ${candidate.evidence.length} criteria evidenced</span></div><div class="criteria">${candidate.evidence.map(evidenceRow).join("")}</div></div><div class="section"><div class="section-title"><h3>Decision timeline</h3><span class="muted">Auditable demo history</span></div><div class="timeline">${candidate.audit.map(eventRow).join("")}</div></div></section>
  <aside><section class="card card-pad"><h3>System boundaries</h3><div class="system-boundaries"><p><strong>Used:</strong> application, CV, role scorecard${candidate.assessment ? ", and structured assessment" : ""}.</p><p><strong>Excluded from the stated recommendation:</strong> name, photo, age, gender, college prestige, accent, and inferred personality.</p><p><strong>Human control:</strong> progression and non-progression require recruiter approval.</p></div><button class="button primary full" data-modal="decision">Choose next step</button></section><section class="card card-pad side-section"><h3>Escalate this review</h3><p class="card-sub">Use for conflicting evidence, accessibility requests, or uncertainty requiring another reviewer.</p><button class="button small" data-escalate>Request human review</button></section></aside></div></section>`, `Recruitment / Customer Support Associate / ${candidate.name}`);
}

function assessmentResult(candidate) {
  return `<div class="section assessment-result"><div class="section-title"><div><div class="eyebrow">Structured assessment · completed ${candidate.assessment.completedAt}</div><h3>New job-related evidence</h3></div>${pill("Recruiter review required", "amber")}</div><p class="assessment-scenario"><strong>Scenario:</strong> ${candidate.assessment.scenario}</p><p>${candidate.assessment.summary}</p><div class="rubric">${candidate.assessment.rubric.map(item => `<div><span>${item.label}</span><strong>${item.result}</strong></div>`).join("")}</div></div>`;
}

function evidenceRow(item) {
  const symbols = { found: "✓", unclear: "?", missing: "!" };
  return `<div class="criterion"><div><b>${item.criterion}</b><p>${item.text}</p><small>${item.source}</small></div><div class="check ${item.state === "found" ? "yes" : item.state === "unclear" ? "partial" : "no"}" aria-label="${item.state}">${symbols[item.state]}</div></div>`;
}

function eventRow(event) { return `<div class="event"><div class="event-mark"></div><div><strong>${event.title}</strong><p>${event.actor} · ${event.detail} · ${event.time}</p></div></div>`; }

function scorecard() {
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Approved role criteria</div><h1>Customer Support Associate scorecard</h1><p class="lede">Recruiter and hiring manager align criteria before AI-assisted screening begins.</p></div><button class="button primary" data-view="queue">Open queue</button></div><div class="layout-2"><section class="card"><div class="section"><div class="section-title"><h2>Required criteria</h2>${pill("Reviewed first", "green")}</div><div class="criteria">${[
    ["English and Hindi communication", "Confirmed through the application and structured assessment."], ["Rotational-shift availability", "Candidate confirms availability before progression."], ["Work-location eligibility", "Candidate confirms an eligible location or approved remote arrangement."]
  ].map(([title, copy]) => `<div class="criterion"><div><b>${title}</b><p>${copy}</p></div>${pill("Required", "gray")}</div>`).join("")}</div></div><div class="section"><div class="section-title"><h2>Weighted evidence</h2>${pill("Supports recommendation", "blue")}</div><div class="criteria">${[["Customer issue resolution", "35%"], ["Customer-facing experience", "30%"], ["CRM or ticketing familiarity", "20%"], ["Structured response quality", "15%"]].map(([title, weight]) => `<div class="criterion"><div><b>${title}</b><p>Reviewed from approved, job-related evidence.</p></div><b>${weight}</b></div>`).join("")}</div></div></section><aside class="card card-pad"><h2>Fair-screening guardrails</h2><div class="guardrail-list"><div><span>✓</span><p><strong>Job-related evidence only</strong><small>Recommendation follows the approved scorecard.</small></p></div><div><span>!</span><p><strong>Low confidence routes to review</strong><small>It cannot trigger automatic rejection.</small></p></div><div><span>×</span><p><strong>Irrelevant inputs excluded</strong><small>Name, photo, age, gender, prestige, accent, and inferred personality.</small></p></div></div></aside></div></section>`);
}

function audit() {
  const events = candidates.flatMap(candidate => candidate.audit.map(event => ({ ...event, candidate: candidate.name }))).slice().reverse();
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Decision history</div><h1>Trace recommendations and human decisions</h1><p class="lede">Prototype audit events from synthetic candidate data.</p></div><button class="button" data-view="queue">Open queue</button></div><section class="card audit-list"><div class="audit-head"><span>Event</span><span>Candidate</span><span>Actor</span><span>Time</span></div>${events.map(event => `<div class="audit-row"><span><strong>${event.title}</strong><small>${event.detail}</small></span><span>${event.candidate}</span><span>${event.actor}</span><span>${event.time}</span></div>`).join("")}</section></section>`);
}

function manager() {
  const candidate = candidates[1];
  return shell(`<section class="page"><div class="page-head"><div><button class="button ghost small" data-view="dashboard">← Return to recruiter workspace</button><div class="eyebrow profile-eyebrow">Hiring-manager handoff</div><h1>Shortlist review</h1><p class="lede">A compact handoff containing recruiter-reviewed, job-related evidence.</p></div>${pill("Recruiter-reviewed", "green")}</div><div class="manager-brief"><section class="card"><div class="section"><div class="profile-top">${avatar(candidate)}<div><h2>${candidate.name}</h2><div class="contact">${candidate.experience} · ${candidate.location}</div></div></div></div><div class="section"><div class="section-title"><h3>Why this candidate is being recommended</h3>${pill("Evidence complete", "green")}</div><div class="criteria">${candidate.evidence.slice(0, 3).map(evidenceRow).join("")}</div></div><div class="section"><h3>Recruiter rationale</h3><p class="brief-copy">“I reviewed the source evidence. Aisha meets the agreed screening criteria and is ready for the next interview stage.”</p></div></section><aside class="card card-pad"><h3>Hiring-manager review</h3><p class="card-sub">The hiring manager sees the shortlist rationale, not the recruiter’s full applicant queue.</p><div class="brief-actions"><button class="button primary" data-manager-action="approve">Approve interview</button><button class="button" data-manager-action="more">Request more information</button></div><div class="callout"><strong>Decision ownership:</strong> this approves the next interview step. The final hiring decision remains human-led.</div></aside></div></section>`, "Hiring-manager handoff / Customer Support Associate");
}

function decisionModal() {
  const candidate = currentCandidate();
  const choices = [
    ["assessment", "Send structured assessment", "Collect additional role-relevant evidence."],
    ["shortlist", "Shortlist for interview", "Progress to the next recruiter-approved stage."],
    ["clarify", "Request clarification", "Ask for a missing required application detail."],
    ["reject", "Do not progress", "Requires a job-related reason and recruiter approval."]
  ];
  return `<div class="modal-layer"><section class="modal"><div class="modal-head"><div><h2>Choose next step for ${candidate.name}</h2><div class="card-sub">The AI-assisted recommendation is advisory.</div></div><button class="icon-button" data-close>${icon("close")}</button></div><div class="modal-body"><div class="decision-context"><span>Suggested</span><strong>${candidate.recommendation}</strong></div><div class="decision-options">${choices.map(([value, title, copy]) => `<label class="decision"><input type="radio" name="decision" value="${value}" ${value === candidate.recommendationChoice ? "checked" : ""}/><div><strong>${title}</strong><span>${copy}</span></div></label>`).join("")}</div><label class="field-label">Job-related reason <span>Required for non-progression or override</span><select data-reason><option value="">Select a reason</option><option>Transferable experience is relevant</option><option>Application information is incomplete</option><option>Assessment evidence changes the recommendation</option><option>Required role criterion is not met</option><option>Other job-related reason</option></select></label><label class="field-label">Optional note<textarea data-decision-note placeholder="Add context for the audit history"></textarea></label>${state.decisionError ? `<div class="form-error">${state.decisionError}</div>` : ""}</div><div class="modal-foot"><button class="button" data-close>Cancel</button><button class="button primary" data-save-decision>Record decision</button></div></section></div>`;
}

function communicationTemplate(candidate, action) {
  const first = candidate.name.split(" ")[0];
  if (action === "clarify") return { subject: "A detail needed for your application", body: `Hi ${first},\n\nThank you for applying for the Customer Support Associate role. Before we complete this screening step, please confirm your availability for rotational shifts.\n\nIf you need help updating this information, reply to the recruitment team.` };
  if (action === "reject") return { subject: "Update on your application", body: `Hi ${first},\n\nThank you for the time you invested in applying for the Customer Support Associate role. After recruiter review, we will not be progressing your application to the next stage.\n\nWe appreciate your interest and wish you well in your search.` };
  if (action === "shortlist") return { subject: "Your application is moving forward", body: `Hi ${first},\n\nThank you for applying for the Customer Support Associate role. After recruiter review, we would like to progress your application to the next interview stage.\n\nWe will share the next-step details shortly.` };
  return { subject: "Next step for your application", body: `Hi ${first},\n\nThank you for applying for the Customer Support Associate role. We would like to invite you to a short customer-response assessment. It takes approximately 7 minutes.\n\nYou may request an alternative format or contact our team if you need support.` };
}

function communicationModal() {
  const candidate = currentCandidate();
  const action = state.pendingUpdate?.action || candidate.recommendationChoice;
  const copy = communicationTemplate(candidate, action);
  return `<div class="modal-layer"><section class="modal"><div class="modal-head"><div><h2>Candidate update preview</h2><div class="card-sub">Editable and sent only after recruiter approval</div></div><button class="icon-button" data-close>${icon("close")}</button></div><div class="modal-body"><label class="field-label">Subject<input value="${escapeHTML(copy.subject)}" /></label><label class="field-label">Message<textarea class="message-editor">${escapeHTML(copy.body)}</textarea></label><div class="prototype-note">Prototype only — approving this update does not send a real message.</div></div><div class="modal-foot"><button class="button" data-close>Cancel</button><button class="button primary" data-send-update>Approve simulated update</button></div></section></div>`;
}

function updatesModal() {
  return `<div class="modal-layer"><section class="modal"><div class="modal-head"><div><h2>Updates awaiting approval</h2><div class="card-sub">Eight synthetic queue updates; three examples shown</div></div><button class="icon-button" data-close>${icon("close")}</button></div><div class="modal-body update-list">${candidates.slice(0, 3).map(c => `<button data-open-update="${c.id}">${avatar(c)}<span><strong>${c.name}</strong><small>${communicationTemplate(c, c.recommendationChoice).subject}</small></span>${icon("arrow")}</button>`).join("")}</div></section></div>`;
}

function modal() {
  if (state.modal === "decision") return decisionModal();
  if (state.modal === "communication") return communicationModal();
  if (state.modal === "updates") return updatesModal();
  return "";
}

function render() {
  const views = { dashboard, queue, profile, scorecard, audit, manager };
  $("#app").innerHTML = views[state.view]() + modal() + (state.toast ? `<div class="toast">${state.toast}</div>` : "");
  bind();
}

function notify(message) {
  state.toast = message; render();
  window.setTimeout(() => { state.toast = ""; render(); }, 2600);
}

function bind() {
  document.querySelectorAll("[data-view]").forEach(element => element.addEventListener("click", () => { state.view = element.dataset.view; state.previewOpen = false; render(); }));
  document.querySelectorAll("[data-open-filter]").forEach(element => element.addEventListener("click", () => { state.queueFilter = element.dataset.openFilter; state.view = "queue"; render(); }));
  document.querySelectorAll("[data-filter]").forEach(element => element.addEventListener("click", () => { state.queueFilter = element.dataset.filter; state.previewOpen = false; render(); }));
  document.querySelectorAll("[data-select]").forEach(element => element.addEventListener("click", () => { state.selected = element.dataset.select; state.previewOpen = true; render(); }));
  document.querySelectorAll("[data-open-candidate]").forEach(element => element.addEventListener("click", () => { state.selected = element.dataset.openCandidate; state.view = "queue"; state.previewOpen = true; render(); }));
  document.querySelectorAll("[data-open]").forEach(element => element.addEventListener("click", () => { state.selected = element.dataset.open; state.view = "profile"; state.previewOpen = false; render(); }));
  document.querySelectorAll("[data-close-preview]").forEach(element => element.addEventListener("click", () => { state.previewOpen = false; render(); }));
  document.querySelectorAll("[data-modal]").forEach(element => element.addEventListener("click", () => { state.modal = element.dataset.modal; state.decisionError = ""; render(); }));
  document.querySelectorAll("[data-close]").forEach(element => element.addEventListener("click", () => { state.modal = null; state.decisionError = ""; render(); }));
  document.querySelectorAll("[data-open-updates]").forEach(element => element.addEventListener("click", () => { state.modal = "updates"; render(); }));
  document.querySelectorAll("[data-open-update]").forEach(element => element.addEventListener("click", () => { state.selected = element.dataset.openUpdate; state.pendingUpdate = { action: currentCandidate().recommendationChoice }; state.modal = "communication"; render(); }));
  document.querySelectorAll("[data-select-id]").forEach(element => element.addEventListener("change", () => { element.checked ? state.selectedIds.add(element.dataset.selectId) : state.selectedIds.delete(element.dataset.selectId); render(); }));
  document.querySelectorAll("[data-clear-selection]").forEach(element => element.addEventListener("click", () => { state.selectedIds.clear(); render(); }));
  document.querySelectorAll("[data-safe-bulk]").forEach(element => element.addEventListener("click", () => { state.selectedIds.clear(); notify("Clarification drafts prepared for recruiter review. No message was sent."); }));
  document.querySelectorAll("[data-sort]").forEach(element => element.addEventListener("change", () => { state.sort = element.value; render(); }));
  document.querySelectorAll("[data-queue-search]").forEach(element => element.addEventListener("input", () => { state.search = element.value; render(); const input = document.querySelector("[data-queue-search]"); input?.focus(); input?.setSelectionRange(state.search.length, state.search.length); }));
  document.querySelectorAll("[data-global-search]").forEach(element => element.addEventListener("keydown", event => { if (event.key === "Enter") { state.search = element.value; state.queueFilter = "all"; state.view = "queue"; render(); } }));
  document.querySelectorAll("[data-escalate]").forEach(element => element.addEventListener("click", () => { const c = currentCandidate(); c.audit.push({ actor: "Advait M.", title: "Human review requested", detail: "Escalated for a second job-related review", time: "Just now" }); notify("Human review requested and added to the audit history."); }));
  document.querySelectorAll("[data-manager-action]").forEach(element => element.addEventListener("click", () => notify(element.dataset.managerAction === "approve" ? "Interview approval recorded in this prototype." : "Information request returned to the recruiter.")));
  document.querySelectorAll("[data-save-decision]").forEach(element => element.addEventListener("click", saveDecision));
  document.querySelectorAll("[data-send-update]").forEach(element => element.addEventListener("click", approveUpdate));
}

function saveDecision() {
  const candidate = currentCandidate();
  const choice = document.querySelector('input[name="decision"]:checked')?.value;
  const reason = document.querySelector("[data-reason]")?.value || "";
  const note = document.querySelector("[data-decision-note]")?.value.trim() || "";
  const requiresReason = choice === "reject" || choice !== candidate.recommendationChoice;
  if (requiresReason && !reason) { state.decisionError = "Choose a job-related reason before recording this decision."; render(); return; }
  const statuses = { assessment: "Assessment recommended", shortlist: "Ready to shortlist", clarify: "Needs clarification", reject: "Decision recorded" };
  const tones = { assessment: "amber", shortlist: "green", clarify: "blue", reject: "rose" };
  candidate.status = statuses[choice]; candidate.tone = tones[choice]; candidate.stage = choice === "clarify" ? "clarification" : choice === "assessment" ? "assessment" : "decision";
  candidate.audit.push({ actor: "Advait M.", title: choice === candidate.recommendationChoice ? "Recruiter decision recorded" : "AI-assisted recommendation overridden", detail: `${statuses[choice]}${reason ? ` · ${reason}` : ""}${note ? ` · ${note}` : ""}`, time: "Just now" });
  state.pendingUpdate = { candidateId: candidate.id, action: choice }; state.modal = null; state.decisionError = ""; notify("Decision recorded. Candidate update is ready for approval.");
}

function approveUpdate() {
  const candidate = currentCandidate();
  const action = state.pendingUpdate?.action || candidate.recommendationChoice;
  candidate.audit.push({ actor: "Advait M.", title: "Candidate update approved", detail: communicationTemplate(candidate, action).subject, time: "Just now" });
  state.pendingUpdate = null; state.modal = null; notify("Prototype update approved. No real message was sent.");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && (state.previewOpen || state.modal)) { state.previewOpen = false; state.modal = null; render(); return; }
  if (state.view !== "queue" || ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
  const list = visibleCandidates(); const index = Math.max(0, list.findIndex(c => c.id === state.selected));
  if (["j", "J", "ArrowDown"].includes(event.key)) { event.preventDefault(); state.selected = list[Math.min(index + 1, list.length - 1)]?.id || state.selected; state.previewOpen = true; render(); }
  if (["k", "K", "ArrowUp"].includes(event.key)) { event.preventDefault(); state.selected = list[Math.max(index - 1, 0)]?.id || state.selected; state.previewOpen = true; render(); }
  if (event.key === "Enter" && state.previewOpen) { state.view = "profile"; state.previewOpen = false; render(); }
});

render();

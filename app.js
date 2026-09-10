const candidates = [
  { id: "rohan", name: "Rohan Mehta", initials: "RM", experience: "Retail service · 2y 4m", source: "Application + CV", status: "Assessment recommended", score: 58, confidence: "Low", tone: "amber", updated: "2 min ago" },
  { id: "aisha", name: "Aisha Khan", initials: "AK", experience: "Customer support · 2y", source: "Application + CV", status: "Ready to shortlist", score: 84, confidence: "High", tone: "green", updated: "18 min ago" },
  { id: "ishan", name: "Ishan Rao", initials: "IR", experience: "BPO operations · 1y", source: "Application + CV", status: "Needs clarification", score: 72, confidence: "Medium", tone: "blue", updated: "41 min ago" },
  { id: "mira", name: "Mira Thomas", initials: "MT", experience: "Retail associate · 1y", source: "Application + CV", status: "Ready to review", score: 67, confidence: "Medium", tone: "gray", updated: "1 hr ago" },
  { id: "aditya", name: "Aditya S", initials: "AS", experience: "Technical support · 3y", source: "Application + CV", status: "Ready to shortlist", score: 89, confidence: "High", tone: "green", updated: "2 hrs ago" },
];

const state = { view: "dashboard", selected: "rohan", modal: null, assessmentSent: false, shortlisted: false, toast: "", queueFilter: "decision" };
const $ = (selector) => document.querySelector(selector);

function pill(text, tone = "gray") { return `<span class="pill ${tone}"><span class="dot"></span>${text}</span>`; }
function candidateAvatar(c) { return `<div class="candidate-avatar">${c.initials}</div>`; }
function navItem(view, icon, label) { return `<button class="${state.view === view ? "active" : ""}" data-view="${view}"><span class="nav-icon">${icon}</span><span>${label}</span></button>`; }

function shell(content, crumb = "Recruitment / Customer Support Associate") {
  return `<div class="shell">
    <aside class="side">
      <div class="brand"><div class="brand-mark">S</div><span>screening</span></div>
      <div class="nav-label">Workspace</div>
      <nav class="nav">
        ${navItem("dashboard", "⌂", "Today’s work")}
        ${navItem("queue", "◫", "Candidate queue")}
        ${navItem("profile", "◉", "Candidate review")}
        ${navItem("scorecard", "✓", "Role scorecard")}
        ${navItem("manager", "↗", "Shortlist brief")}
      </nav>
      <div class="role-chip"><strong>Recruiter view</strong><span>Decisions require your approval</span></div>
    </aside>
    <main class="main"><header class="topbar"><div class="crumb">${crumb}</div><div class="top-actions"><span class="pill green">● AI-assisted screening</span><div class="avatar">AM</div></div></header>${content}</main>
  </div>`;
}

function dashboard() {
  return shell(`<section class="page">
    <div class="page-head"><div><div class="eyebrow">Customer Support Associate · Today</div><h1>Start with the decisions that need you.</h1><p class="lede">AI prepares job-related evidence and status updates. You approve every meaningful outcome.</p></div><button class="button primary" data-view="queue">Open worklist →</button></div>
    <div class="stats">
      <div class="stat"><div class="number">12</div><div class="label">Need your decision</div><div class="trend warn">Prioritised for today</div></div>
      <div class="stat"><div class="number">14</div><div class="label">Need candidate clarification</div><div class="trend">Drafts ready after approval</div></div>
      <div class="stat"><div class="number">12</div><div class="label">Assessment results ready</div><div class="trend">Review within 24 hours</div></div>
    </div>
    <div class="layout-2">
      <section class="card"><div class="card-head"><div><h2>Needs your decision</h2><div class="card-sub">The highest-impact reviews, not the highest scores.</div></div><button class="button small" data-view="queue">Open worklist</button></div>
        <div class="queue-item"><div class="candidate-avatar">RM</div><div><div class="candidate-name">Rohan Mehta</div><div class="candidate-meta">Transferable service experience · CRM evidence missing</div></div>${pill("Review now", "amber")}<button class="button small" data-open="rohan">Open</button></div>
        <div class="queue-item"><div class="candidate-avatar">AK</div><div><div class="candidate-name">Aisha Khan</div><div class="candidate-meta">Support experience and assessment evidence complete</div></div>${pill("Shortlist review", "green")}<button class="button small" data-open="aisha">Open</button></div>
        <div class="queue-item"><div class="candidate-avatar">IR</div><div><div class="candidate-name">Ishan Rao</div><div class="candidate-meta">Shift availability is unconfirmed</div></div>${pill("Clarification", "blue")}<button class="button small" data-open="ishan">Open</button></div>
      </section>
      <aside class="card card-pad"><h2>Updates awaiting approval</h2><p class="card-sub">No automatic rejection or progression messages are sent.</p><div class="action-list" style="margin-top:16px"><div class="action-row"><div class="action-icon">1</div><div><strong>Assessment invitation</strong><p>Rohan Mehta · review draft</p></div></div><div class="action-row"><div class="action-icon">2</div><div><strong>Clarification request</strong><p>14 candidates · grouped by missing detail</p></div></div><div class="action-row"><div class="action-icon">3</div><div><strong>Outcome updates</strong><p>8 approved decisions ready to send</p></div></div></div></aside>
    </div>
  </section>`);
}

function queue() {
  const current = candidates.find(c => c.id === state.selected) || candidates[0];
  const rows = candidates.map(c => `<button class="work-row ${c.id === current.id ? "selected" : ""}" data-select="${c.id}">${candidateAvatar(c)}<span class="work-copy"><strong>${c.name}</strong><span>${c.id === "rohan" ? "Transferable service experience · CRM evidence missing" : c.id === "ishan" ? "Shift availability is unconfirmed" : "Relevant support evidence is complete"}</span></span>${pill(c.id === "rohan" ? "Review now" : c.status, c.tone)}<span class="work-time">${c.updated}</span></button>`).join("");
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Candidate queue</div><h1>Review what needs a decision.</h1><p class="lede">The worklist surfaces an action, evidence signal, and timing—not an opaque score.</p></div><button class="button" data-view="scorecard">View role criteria</button></div>
    <div class="filterbar"><input class="search" placeholder="Search candidates" /><button class="filter ${state.queueFilter === "decision" ? "active" : ""}" data-filter="decision">Needs your decision · 12</button><button class="filter ${state.queueFilter === "clarification" ? "active" : ""}" data-filter="clarification">Clarifications · 14</button><button class="filter ${state.queueFilter === "assessment" ? "active" : ""}" data-filter="assessment">Assessment results · 12</button><button class="filter ${state.queueFilter === "all" ? "active" : ""}" data-filter="all">All · 84</button></div>
    <div class="worklist"><section class="card work-panel"><div class="work-panel-head"><div><strong>${state.queueFilter === "decision" ? "Needs your decision" : state.queueFilter === "clarification" ? "Clarifications" : state.queueFilter === "assessment" ? "Assessment results" : "All candidates"}</strong><span>Sorted by action due</span></div>${rows}</section><aside class="card review-preview"><div class="preview-head"><div><div class="eyebrow">Selected candidate</div><h2>${current.name}</h2><p>${current.experience} · Applied today</p></div>${pill(current.confidence + " confidence", current.tone)}</div><div class="preview-block"><strong>${current.id === "rohan" ? "Needs recruiter review" : current.status}</strong><p>${current.id === "rohan" ? "Transferable service evidence is present, but direct CRM evidence is missing." : "The application is ready for your job-related review."}</p></div><div class="preview-evidence"><span>Evidence found</span><strong>${current.id === "rohan" ? "Issue resolution · customer-facing experience" : "Role-relevant experience · application complete"}</strong></div><div class="preview-evidence"><span>Still needed</span><strong>${current.id === "rohan" ? "CRM familiarity · shift confirmation" : "Recruiter approval"}</strong></div><div class="preview-actions"><button class="button" data-open="${current.id}">Open full review</button><button class="button primary" data-modal="decision">Choose next step</button></div><p class="preview-note">AI recommendation is advisory. Low confidence never triggers automatic rejection.</p></aside></div>
  </section>`);
}

function scorecard() {
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Role setup</div><h1>Customer Support Associate scorecard</h1><p class="lede">Recruiter and hiring manager agree on criteria before screening starts.</p></div><button class="button primary" data-view="queue">Open queue</button></div>
  <div class="layout-2"><section class="card"><div class="section"><div class="section-title"><h2>Required criteria</h2>${pill("Checked first", "green")}</div><div class="criteria"><div class="criterion"><div><b>English and Hindi communication</b><p>Confirmed through application and structured assessment.</p></div>${pill("Required", "gray")}</div><div class="criterion"><div><b>Rotational-shift availability</b><p>Candidate confirms before shortlisting.</p></div>${pill("Required", "gray")}</div><div class="criterion"><div><b>Work location eligibility</b><p>Candidate selects their eligible location or remote-work eligibility.</p></div>${pill("Required", "gray")}</div></div></div>
  <div class="section"><div class="section-title"><h2>Weighted evidence</h2>${pill("Used for recommendation", "blue")}</div><div class="criteria"><div class="criterion"><div><b>Customer issue resolution</b><p>Relevant work examples or assessment responses.</p></div><b>35%</b></div><div class="criterion"><div><b>Customer-facing experience</b><p>Support, retail, hospitality, or service roles.</p></div><b>30%</b></div><div class="criterion"><div><b>CRM or ticketing familiarity</b><p>Direct tool knowledge is useful, but not a hard requirement.</p></div><b>20%</b></div><div class="criterion"><div><b>Structured response quality</b><p>Clarity, empathy, and problem solving in job simulation.</p></div><b>15%</b></div></div></div></section>
  <aside class="card card-pad"><h2>Fair-screening guardrails</h2><div class="action-list" style="margin-top:15px"><div class="action-row"><div class="action-icon">✓</div><div><strong>Job-related evidence only</strong><p>Match is based on approved role criteria.</p></div></div><div class="action-row"><div class="action-icon">!</div><div><strong>Low confidence is reviewable</strong><p>It cannot trigger an automatic rejection.</p></div></div><div class="action-row"><div class="action-icon">×</div><div><strong>Excluded from screening</strong><p>Name, age, photo, gender, college prestige, accent, and inferred personality.</p></div></div></div></aside></div></section>`);
}

function profile() {
  const c = candidates.find(x => x.id === state.selected) || candidates[0];
  const isRohan = c.id === "rohan";
  const actionTitle = state.shortlisted && isRohan ? "Recruiter approved shortlist" : isRohan ? (state.assessmentSent ? "Assessment invitation approved" : "Invite to structured assessment") : "Recruiter review required";
  return shell(`<section class="page"><div class="page-head"><div><button class="button ghost small" data-view="queue">← Back to worklist</button><div style="height:10px"></div><div class="eyebrow">Candidate review · ${c.status}</div><h1>${c.name}</h1><p class="lede">${c.experience} · Applied today · ${isRohan ? "Low-confidence recommendation requires human review" : "Ready for recruiter review"}</p></div><div class="top-actions"><button class="button" data-modal="communication">Preview update</button><button class="button primary" data-modal="decision">Choose next step</button></div></div>
  <div class="profile-grid"><section class="card"><div class="section"><div class="profile-top"><div class="profile-avatar">${c.initials}</div><div><h2>${c.name}</h2><div class="contact">${c.experience} · Mumbai · Applied today</div><div style="margin-top:9px">${pill(c.status, c.tone)} ${pill(`${c.confidence} confidence`, c.tone)}</div></div></div></div>
  <div class="section"><div class="section-title"><div><h3>Recommendation and evidence</h3><div class="card-sub">AI organized this from the application and CV. Verify evidence before deciding.</div></div>${pill(isRohan ? "Needs review" : "Ready", c.tone)}</div><div class="criteria">
    <div class="criterion"><div><b>Customer issue resolution</b><p>Retail associate at UrbanCart: handled delivery complaints, exchanges, and escalations.</p></div><div class="check yes">✓</div></div>
    <div class="criterion"><div><b>Customer-facing experience</b><p>2 years 4 months of direct customer service.</p></div><div class="check yes">✓</div></div>
    <div class="criterion"><div><b>CRM or ticketing familiarity</b><p>No direct tool experience found in application or CV.</p></div><div class="check partial">?</div></div>
    <div class="criterion"><div><b>Shift availability</b><p>Not yet confirmed by candidate.</p></div><div class="check no">!</div></div>
  </div></div>
  <div class="section"><div class="section-title"><h3>Verified source evidence</h3><span class="muted">CV excerpt · view full application</span></div><div class="callout"><strong>UrbanCart, 2023–present:</strong> “Resolved delivery and return concerns for 50+ customers per day; escalated complex cases and maintained customer satisfaction.”</div></div>
  <div class="section"><div class="section-title"><h3>Decision history</h3><span class="muted">Auditable timeline</span></div><div class="timeline"><div class="event"><div class="event-mark"></div><div><strong>AI recommendation generated</strong><p>58% evidence match · low confidence · 10:14 AM</p></div></div>${state.assessmentSent ? `<div class="event"><div class="event-mark"></div><div><strong>Recruiter approved assessment invitation</strong><p>Structured customer-response simulation sent · 10:18 AM</p></div></div>` : ""}${state.shortlisted ? `<div class="event"><div class="event-mark"></div><div><strong>Recruiter approved shortlist</strong><p>Decision reason recorded; candidate update ready to send · 10:26 AM</p></div></div>` : ""}</div></div>
  </section>
  <aside><section class="card card-pad"><div class="recommendation ${isRohan && !state.shortlisted ? "low" : ""}"><div class="recommendation-title"><h3>${actionTitle}</h3>${pill(isRohan && !state.shortlisted ? "Low confidence" : "Ready", isRohan && !state.shortlisted ? "amber" : "green")}</div><p>${isRohan && !state.shortlisted ? "The system found relevant transferable service evidence, but cannot confidently infer direct support readiness from the application alone." : "New assessment evidence has been recorded for recruiter review."}</p><ul class="mini-list"><li>${isRohan && !state.shortlisted ? "Do not reject automatically." : "Recruiter retains final screening control."}</li><li>${isRohan && !state.shortlisted ? "Recommended next step: a short, accessible customer-response simulation." : "Candidate communication is ready after approval."}</li></ul></div>
  <div class="system-boundaries"><h3>How this recommendation was made</h3><p><strong>Used:</strong> application, CV, approved role criteria, and structured assessment responses.</p><p><strong>Excluded:</strong> name, photo, age, gender, college prestige, accent, and inferred personality.</p></div><button class="button primary" style="width:100%" data-modal="decision">${state.assessmentSent ? "Review decision" : "Choose next step"}</button></section>
  <section class="card card-pad" style="margin-top:18px"><h3>Escalation route</h3><p class="card-sub">Use human review for low confidence, conflicting evidence, accommodation requests, or an unclear application.</p><button class="button small" style="margin-top:12px">Escalate for review</button></section></aside>
  </div></section>`);
}

function manager() {
  return shell(`<section class="page"><div class="page-head"><div><div class="eyebrow">Hiring manager · Shortlist brief</div><h1>One candidate, only the evidence needed to review.</h1><p class="lede">A compact handoff—not a second recruiter workspace.</p></div>${pill("Recruiter-reviewed", "green")}</div><div class="manager-brief"><section class="card"><div class="section"><div class="profile-top"><div class="profile-avatar">AK</div><div><h2>Aisha Khan</h2><div class="contact">Customer support · 2 years · Recruiter-shortlisted</div></div></div></div><div class="section"><div class="section-title"><h3>Why Aisha is being recommended</h3>${pill("Evidence complete", "green")}</div><div class="criteria"><div class="criterion"><div><b>Customer issue resolution</b><p>Structured assessment and prior support role show clear resolution steps.</p></div><div class="check yes">✓</div></div><div class="criterion"><div><b>Customer-facing experience</b><p>Two years in a customer support role.</p></div><div class="check yes">✓</div></div><div class="criterion"><div><b>Shift availability</b><p>Confirmed in application.</p></div><div class="check yes">✓</div></div></div></div><div class="section"><h3>Recruiter rationale</h3><p class="brief-copy">“I reviewed the AI-organized evidence and assessment response. Aisha meets the agreed screening criteria and is ready for the next interview stage.”</p></div></section><aside class="card card-pad"><h3>Review decision</h3><p class="card-sub">The hiring manager sees role-relevant evidence and the recruiter’s rationale, not the full applicant queue or AI audit log.</p><div class="brief-actions"><button class="button primary">Approve interview</button><button class="button">Request more information</button></div><div class="callout"><strong>Decision ownership:</strong> this approves the next interview step. The final hiring decision remains human-led.</div></aside></div></section>`, "Recruitment / Customer Support Associate / Shortlist brief");
}

function modal() {
  if (!state.modal) return "";
  const candidate = candidates.find(c => c.id === state.selected) || candidates[0];
  if (state.modal === "communication") return `<div class="modal-layer"><section class="modal"><div class="modal-head"><div><h2>Candidate update preview</h2><div class="card-sub">Sent only after recruiter approval</div></div><button class="button small" data-close>Close</button></div><div class="modal-body"><p>Hi ${candidate.name.split(" ")[0]},</p><p>Thank you for applying for the Customer Support Associate role. Your application has been reviewed, and we would like to invite you to a short customer-response assessment as the next screening step.</p><p>The assessment takes approximately 7 minutes. You can request an alternative format or contact our team if you need support.</p><p class="muted">This message is drafted by the system and remains editable by the recruiter.</p></div><div class="modal-foot"><button class="button" data-close>Cancel</button><button class="button primary" data-send="message">Approve & send</button></div></section></div>`;
  return `<div class="modal-layer"><section class="modal"><div class="modal-head"><div><h2>Record screening decision</h2><div class="card-sub">AI recommendation is advisory. Your decision is recorded.</div></div><button class="button small" data-close>Close</button></div><div class="modal-body"><div class="decision-options"><label class="decision ${!state.assessmentSent ? "selected" : ""}"><input type="radio" name="decision" value="assessment" ${!state.assessmentSent ? "checked" : ""}/><div><strong>Send structured assessment</strong><span>Collect role-relevant evidence before making a shortlist decision.</span></div></label><label class="decision ${state.assessmentSent ? "selected" : ""}"><input type="radio" name="decision" value="shortlist" ${state.assessmentSent ? "checked" : ""}/><div><strong>Shortlist candidate</strong><span>Progress ${candidate.name} after reviewing job-related evidence.</span></div></label><label class="decision"><input type="radio" name="decision" value="clarify"/><div><strong>Request clarification</strong><span>Ask about shift availability or an unclear application detail.</span></div></label><label class="decision"><input type="radio" name="decision" value="reject"/><div><strong>Do not progress</strong><span>Requires a job-related reason and recruiter approval.</span></div></label></div><textarea placeholder="Add a decision or override reason (required for meaningful overrides)"></textarea></div><div class="modal-foot"><button class="button" data-close>Cancel</button><button class="button primary" data-save-decision>Confirm decision</button></div></section></div>`;
}

function render() {
  const views = { dashboard, queue, profile, scorecard, manager };
  $("#app").innerHTML = views[state.view]() + modal() + (state.toast ? `<div class="toast">${state.toast}</div>` : "");
  bind();
}

function bind() {
  document.querySelectorAll("[data-view]").forEach(el => el.addEventListener("click", () => { state.view = el.dataset.view; render(); }));
  document.querySelectorAll("[data-filter]").forEach(el => el.addEventListener("click", () => { state.queueFilter = el.dataset.filter; render(); }));
  document.querySelectorAll("[data-select]").forEach(el => el.addEventListener("click", () => { state.selected = el.dataset.select; render(); }));
  document.querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", () => { state.selected = el.dataset.open; state.view = "profile"; render(); }));
  document.querySelectorAll("[data-modal]").forEach(el => el.addEventListener("click", () => { state.modal = el.dataset.modal; render(); }));
  document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", () => { state.modal = null; render(); }));
  document.querySelectorAll("[data-send]").forEach(el => el.addEventListener("click", () => { state.modal = null; state.assessmentSent = true; state.toast = "Assessment invitation approved and queued for delivery."; render(); setTimeout(() => { state.toast = ""; render(); }, 3000); }));
  document.querySelectorAll("[data-save-decision]").forEach(el => el.addEventListener("click", () => { const choice = document.querySelector("input[name=decision]:checked")?.value; if (choice === "assessment") { state.assessmentSent = true; state.toast = "Assessment invitation approved and queued for delivery."; } else if (choice === "shortlist") { state.shortlisted = true; state.assessmentSent = true; state.toast = "Shortlist decision recorded. Candidate update is ready."; } else { state.toast = "Decision recorded with recruiter review."; } state.modal = null; render(); setTimeout(() => { state.toast = ""; render(); }, 3000); }));
}
render();

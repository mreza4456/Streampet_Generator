/* ── Data ─────────────────────────────────────────────────── */
const ALERT_OPTS = {
  none: "None",
  follower: "Follower",
  subscriber: "Subscriber",
  tip: "Tip",
  cheer: "Cheer",
  welcome: "Welcome",
  "community-gifted": "Community Gifted",
  raid: "raid",
  reedem: "Item Redemption",
  superchat: "Superchat",
  member: "MemberYT",
};

const TRIGGER_OPTS = {
  none: "None",
  everyone: "Everyone",
  broadcasterAndmoderator: "Streamer And Mods",
  broadcasterAndmoderatorAndvip: "Streamer, Moderator And Vip",
  broadcasterAndmoderatorAndvipAndsubscriber: "Streamer, Moderator, Vip And Subscriber",
  viewer: "Viewer",
  moderator: "Moderator",
  vip: "Vip",
  subscriber: "Subscriber",
  broadcaster: "Broadcaster",
  owner: "YtOwner",
  moderatorYT: "Moderator YT",
  member: "MemberYT",
  verived: "Veriv YT",
  viewerYT: "ViewerYT",
};

/* ── Builders ─────────────────────────────────────────────── */
function buildSimulate() {
  return {
    buttonTest:        { type: "button", label: "Dev Beta ", group: "🧪 Simulate Triggered Comand" },
    buttonYTOwner:     { type: "button", label: "Owner",     group: "🧪 Simulate Command YT" },
    buttonYTModerator: { type: "button", label: "Moderator", group: "🧪 Simulate Command YT" },
    buttonYTVerived:   { type: "button", label: "Verived",   group: "🧪 Simulate Command YT" },
    buttonYTMember:    { type: "button", label: "Member",    group: "🧪 Simulate Command YT" },
    buttonYTAnonymous: { type: "button", label: "Anonymous", group: "🧪 Simulate Command YT" },
  };
}
function buildAlerts() {
  return {
    subMessage:           { type: "text", label: "Subscriber Alert Message",       value: "Thank you, {name}, for subscribing!",                                             group: "🔔 Alert Setting" },
    folowersMessage:      { type: "text", label: "Folower Alert Message",          value: "Thank you, {name}, for following",                                                group: "🔔 Alert Setting" },
    giftMessage:          { type: "text", label: "Gift Sub Alert Message",         value: "{sender} gifted a subscription to {name}! 🎉",                                   group: "🔔 Alert Setting" },
    tipMessage:           { type: "text", label: "Tip Alert Message",              value: "Thank you, {name}, for your generous {amount} donation! 🎉 Message: {message}",  group: "🔔 Alert Setting" },
    cheerMessage:         { type: "text", label: "Cheer Alert Message",            value: "Thank you, {name}, for your {amount} bits cheer! 🎉 Message: {message}",         group: "🔔 Alert Setting" },
    communityGiftMessage: { type: "text", label: "Community Gift Alert Message",   value: "{gifterName} has gifted {giftAmount} subs to the community! Message: {message}", group: "🔔 Alert Setting" },
    raid:                 { type: "text", label: "Raid Alert Message",             value: "{raidName} has gifted {raidAmount} subs to the community! Message: {message}",   group: "🔔 Alert Setting" },
    redemption:           { type: "text", label: "Item Redemption Alert Message",  value: "{name} spent points to redeem {iteem} Message: {message}",                       group: "🔔 Alert Setting" },
    welcomeMessage:       { type: "text", label: "Welcome Alert Message",          value: "Welcome to the stream, {name}! 👋😊",                                            group: "🔔 Alert Setting" },
  };
}

function buildAnim(n) {
  const group = n === 0 ? "🎬 Default Animation" : `🎥 Animation ${n}`;
  return {
    [`animCommand${n}`]:         { type: "text",        label: "Type Comand Here",            value: "!pd",  group },
    [`Reactive With Alert${n}`]: { type: "dropdown",    label: "Reactive With Alert",          value: "none", options: ALERT_OPTS,   group },
    [`Comand Trigered By${n}`]:  { type: "dropdown",    label: "Comand Trigered By",           value: "none", options: TRIGGER_OPTS, group },
    [`anim${n}Text`]:            { type: "text",        label: "Pet reply",                    value: "",     group },
    [`animImage${n}`]:           { type: "image-input", label: group,                                         group },
    [`image${n}Size`]:           { type: "text",        label: "Image Size",                   value: 400,    group },
    [`font${n}Size`]:            { type: "input",       label: "Font Size",                    value: 16,     group },
    [`vertikalBox${n}`]:         { type: "input",       label: "vertikal Box Chat",             value: 0,      group },
    [`horizontalBox${n}`]:       { type: "input",       label: "horizontal Box Chat",           value: 0,      group },
    [`anim${n}Time`]:            { type: "number",      label: "Animation Duration(seconds)",   value: 5000,   group },
    [`anim${n}Sound`]:           { type: "sound-input", label: "Audio",                                       group },
    [`volumeSlider${n}`]:        { type: "input",       label: "Sound Volume", value: 50, min: 0, max: 100, steps: 1, group },
  };
}



function buildYTAlerts() {
  return {
    superchatMessage: { type: "text", label: "Superchat Alert Message", value: "🎉 {name} just sent a Superchat of {amount}! Thank you for the support 🙌", group: "🔔 YT Alert Setting" },
    memberMessage:    { type: "text", label: "Member Alert Message",    value: "🎉 {name} just became a channel member! Welcome to the community 🙌",       group: "🔔 YT Alert Setting" },
  };
}

function buildBranding() {
  return {
    widgetPersonalize:  { label: "Personalize Stream Widget",         type: "text", value: "Made by @UsbiafCreativeStudio",              group: "🎨 UsbiafCreativeStudio" },
    widgetPersonalizee: { label: "Made by @UsbiafCreativeStudio",     type: "text", value: "@UsbuafCreativeStudio All right reserved",   group: "🎨 UsbiafCreativeStudio" },
  };
}

/* ── State ────────────────────────────────────────────────── */
let currentJSON = {};
let currentTab  = "json";

/* ── Generate ─────────────────────────────────────────────── */
function generate() {
  const count = Math.min(99, Math.max(1, parseInt(document.getElementById("animCount").value) || 1));

  const obj = {};
  Object.assign(obj, buildSimulate());
  Object.assign(obj, buildAlerts());
  Object.assign(obj, buildYTAlerts());
  for (let i = 0; i <= count; i++) Object.assign(obj, buildAnim(i));
  Object.assign(obj, buildBranding());

  currentJSON = obj;

  const keys   = Object.keys(obj).length;
  const raw    = JSON.stringify(obj, null, 2);
  const bytes  = (new TextEncoder().encode(raw).length / 1024).toFixed(1);
  const groups = new Set(Object.values(obj).map(v => v.group).filter(Boolean)).size;

  /* update stats */
  document.getElementById("st-anims").textContent  = count + 1;
  document.getElementById("st-keys").textContent   = keys;
  document.getElementById("st-bytes").textContent  = bytes;
  document.getElementById("st-groups").textContent = groups;
  document.getElementById("key-count").textContent = keys + " keys";
  document.getElementById("hdr-stat").textContent  = keys + " keys";

  updateChips(count);

  if (currentTab === "json")    renderJSON(raw);
  if (currentTab === "preview") renderPreview(obj);
}

/* ── Chips ────────────────────────────────────────────────── */
function updateChips(count) {
  const wrap   = document.getElementById("chips");
  const labels = ["Default", ...Array.from({ length: count }, (_, i) => "Anim " + (i + 1))];
  const shown  = labels.slice(0, 14);
  const extra  = labels.length - shown.length;

  wrap.innerHTML = shown
    .map((l, i) => `<span class="chip${i === 0 ? " active" : ""}">${l}</span>`)
    .join("") + (extra > 0 ? `<span class="chip">+${extra} more</span>` : "");
}

/* ── Syntax Highlight ─────────────────────────────────────── */
function syntaxHighlight(json) {
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (m) => {
        if (/^"/.test(m))       return /:$/.test(m) ? `<span class="j-key">${m}</span>` : `<span class="j-str">${m}</span>`;
        if (/true|false/.test(m)) return `<span class="j-bool">${m}</span>`;
        if (/null/.test(m))       return `<span class="j-null">${m}</span>`;
        return `<span class="j-num">${m}</span>`;
      }
    );
}

/* ── Render JSON ──────────────────────────────────────────── */
function renderJSON(raw) {
  const pre = document.getElementById("output-pre");
  pre.style.display = "block";
  pre.innerHTML = syntaxHighlight(raw);
}

/* ── Render Preview ───────────────────────────────────────── */
function renderPreview(obj) {
  const groups = {};
  Object.entries(obj).forEach(([k, v]) => {
    const g = v.group || "Ungrouped";
    if (!groups[g]) groups[g] = [];
    groups[g].push({ key: k, ...v });
  });

  document.getElementById("preview-tab").innerHTML = Object.entries(groups)
    .map(
      ([g, fields]) => `
      <div class="preview-group">
        <div class="preview-group-title">${g}</div>
        <div class="preview-grid">
          ${fields
            .map(
              (f) => `
            <div class="preview-field">
              <div class="preview-field-key">${f.key}</div>
              <div class="preview-field-type">
                <span class="type-dot ${f.type || ""}"></span>
                ${f.type}${f.label ? " · " + f.label.substring(0, 20) : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

/* ── Copy ─────────────────────────────────────────────────── */
function copyJSON() {
  const raw = JSON.stringify(currentJSON, null, 2);
  navigator.clipboard.writeText(raw).then(() => {
    const btn = document.getElementById("copy-btn");
    btn.classList.add("copied");
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l4 4 6-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      Tersalin!`;
    showToast();
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/>
          <path d="M3 11H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v1" stroke="currentColor" stroke-width="1.4"/>
        </svg>
        Salin`;
    }, 2000);
  });
}

/* ── Download ─────────────────────────────────────────────── */
function downloadJSON() {
  const raw  = JSON.stringify(currentJSON, null, 2);
  const blob = new Blob([raw], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement("a"), { href: url, download: "fielddata-usbiaf.json" });
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Toast ────────────────────────────────────────────────── */
function showToast() {
  const t = document.getElementById("toast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

/* ── Tab switch ───────────────────────────────────────────── */
function switchTab(tab) {
  currentTab = tab;
  document.getElementById("tab-json").classList.toggle("active",    tab === "json");
  document.getElementById("tab-preview").classList.toggle("active", tab === "preview");
  document.getElementById("output-pre").style.display    = tab === "json"    ? "block" : "none";
  document.getElementById("preview-tab").style.display   = tab === "preview" ? "block" : "none";
  if (tab === "preview") renderPreview(currentJSON);
  if (tab === "json")    renderJSON(JSON.stringify(currentJSON, null, 2));
}

/* ── Event Listeners ──────────────────────────────────────── */
document.getElementById("btn-dec").addEventListener("click", () => {
  const el = document.getElementById("animCount");
  el.value = Math.max(1, (parseInt(el.value) || 1) - 1);
  generate();
});

document.getElementById("btn-inc").addEventListener("click", () => {
  const el = document.getElementById("animCount");
  el.value = Math.min(99, (parseInt(el.value) || 1) + 1);
  generate();
});

document.getElementById("animCount").addEventListener("input", generate);
document.getElementById("gen-btn").addEventListener("click",   generate);
document.getElementById("copy-btn").addEventListener("click",  copyJSON);
document.getElementById("dl-btn").addEventListener("click",    downloadJSON);
document.getElementById("tab-json").addEventListener("click",    () => switchTab("json"));
document.getElementById("tab-preview").addEventListener("click", () => switchTab("preview"));

/* ── Init ─────────────────────────────────────────────────── */
generate();

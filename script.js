const body = document.body;
const header = document.querySelector(".site-header");
const mobileMenu = document.querySelector(".mobile-menu");
const menuTrigger = document.querySelector(".menu-trigger");
const backdrop = document.querySelector(".panel-backdrop");
const panels = [...document.querySelectorAll(".side-panel, .search-panel")];
const languageTrigger = document.querySelector(".language-trigger");
const languageMenu = document.querySelector(".language-menu");
const languageLinks = [...document.querySelectorAll("[data-language]")];
const mobileLanguageToggles = [...document.querySelectorAll("[data-language-toggle]")];

let lastScrollY = window.scrollY;

function syncHeader() {
  const currentY = window.scrollY;
  const isOverlayLocked = body.classList.contains("menu-open") || body.classList.contains("panel-open");

  header.classList.toggle("is-scrolled", currentY > 24);

  if (!isOverlayLocked && currentY > 180 && currentY > lastScrollY + 8) {
    header.classList.add("is-hidden");
  } else if (currentY < lastScrollY - 4 || currentY < 180 || isOverlayLocked) {
    header.classList.remove("is-hidden");
  }

  lastScrollY = currentY;
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

function updateHeaderLock() {
  const locked = body.classList.contains("menu-open") || body.classList.contains("panel-open");
  header.classList.toggle("force-solid", locked);
  header.classList.remove("is-hidden");
}

function setMobileMenu(open) {
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuTrigger.classList.toggle("is-open", open);
  menuTrigger.setAttribute("aria-expanded", String(open));
  menuTrigger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  body.classList.toggle("menu-open", open);
  updateHeaderLock();
}

menuTrigger.addEventListener("click", () => {
  closeAllPanels();
  setMobileMenu(!mobileMenu.classList.contains("is-open"));
});

function closeAllPanels() {
  panels.forEach((panel) => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  });
  backdrop.classList.remove("is-visible");
  body.classList.remove("panel-open");
  updateHeaderLock();
}

function openPanel(id) {
  const target = document.getElementById(id);
  if (!target) return;

  setMobileMenu(false);
  closeAllPanels();
  target.classList.add("is-open");
  target.setAttribute("aria-hidden", "false");
  backdrop.classList.add("is-visible");
  body.classList.add("panel-open");
  updateHeaderLock();

  window.setTimeout(() => {
    const focusTarget = target.querySelector("input, button, a");
    focusTarget?.focus();
  }, 360);
}

document.querySelectorAll("[data-panel-open]").forEach((trigger) => {
  trigger.addEventListener("click", () => openPanel(trigger.dataset.panelOpen));
});

document.querySelectorAll("[data-panel-close]").forEach((trigger) => {
  trigger.addEventListener("click", closeAllPanels);
});

backdrop.addEventListener("click", closeAllPanels);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeAllPanels();
  setMobileMenu(false);
  closeLanguageMenu();
});

function closeLanguageMenu() {
  languageMenu.hidden = true;
  languageTrigger.setAttribute("aria-expanded", "false");
}

languageTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  const willOpen = languageMenu.hidden;
  languageMenu.hidden = !willOpen;
  languageTrigger.setAttribute("aria-expanded", String(willOpen));
});

document.addEventListener("click", (event) => {
  if (!languageMenu.contains(event.target) && !languageTrigger.contains(event.target)) {
    closeLanguageMenu();
  }
});

const polishInterface = {
  "ORLEN Group": "Grupa ORLEN",
  "Contact": "Kontakt",
  "About Us": "O nas",
  "For you": "Dla Ciebie",
  "For business": "Dla biznesu",
  "Sustainability": "Zrównoważony rozwój",
  "Investor relations": "Relacje inwestorskie",
  "Career": "Kariera",
  "Companies": "Spółki",
  "Shortcuts": "Skróty",
  "Tenders and supplies": "Przetargi i dostawy",
  "Fuel stations": "Stacje paliw",
  "VITAY Program": "Program VITAY",
  "About the company": "O firmie",
  "Our vision": "Nasza wizja",
  "Press-pack": "Materiały prasowe",
  "Report a question or complaint": "Zgłoś pytanie lub reklamację",
  "Sitemap": "Mapa serwisu",
  "Privacy policy": "Polityka prywatności",
  "Legal disclaimer": "Nota prawna",
  "Personal data": "Dane osobowe",
  "Back to top": "Wróć na górę"
};

const originalInterfaceText = new WeakMap();
let languageNoticeTimer;

function savedLanguage() {
  try { return localStorage.getItem("orlen-interface-language"); }
  catch { return null; }
}

function storeLanguage(language) {
  try { localStorage.setItem("orlen-interface-language", language); }
  catch { /* Storage can be unavailable in privacy-focused browser modes. */ }
}

function showLanguageNotice(language) {
  let notice = document.querySelector(".language-status");
  if (!notice) {
    notice = document.createElement("div");
    notice.className = "language-status";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    document.body.append(notice);
  }
  notice.textContent = language === "pl" ? "Język interfejsu: polski" : "Interface language: English";
  notice.classList.add("is-visible");
  window.clearTimeout(languageNoticeTimer);
  languageNoticeTimer = window.setTimeout(() => notice.classList.remove("is-visible"), 2600);
}

function applyInterfaceLanguage(language, announce = false) {
  const selected = language === "pl" ? "pl" : "en";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const trimmed = node.nodeValue.trim();
    if (trimmed && !originalInterfaceText.has(node)) originalInterfaceText.set(node, trimmed);
    const original = originalInterfaceText.get(node);
    if (original && polishInterface[original]) {
      const replacement = selected === "pl" ? polishInterface[original] : original;
      node.nodeValue = node.nodeValue.replace(trimmed, replacement);
    }
    node = walker.nextNode();
  }

  document.documentElement.lang = selected;
  const triggerLabel = languageTrigger.querySelector("span");
  if (triggerLabel) triggerLabel.textContent = selected === "pl" ? "Polski" : "English";
  languageLinks.forEach((link) => {
    const active = link.dataset.language === selected;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  mobileLanguageToggles.forEach((toggle) => {
    toggle.dataset.language = selected === "pl" ? "en" : "pl";
    toggle.textContent = selected === "pl" ? "English" : "Polski";
  });
  storeLanguage(selected);
  if (announce) showLanguageNotice(selected);
}

languageLinks.forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  applyInterfaceLanguage(link.dataset.language, true);
  closeLanguageMenu();
}));

mobileLanguageToggles.forEach((toggle) => toggle.addEventListener("click", (event) => {
  event.preventDefault();
  applyInterfaceLanguage(toggle.dataset.language, true);
  setMobileMenu(false);
}));

applyInterfaceLanguage(savedLanguage() || "en");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#site-search");
const searchMessage = document.querySelector("#search-message");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (!query) {
    searchMessage.textContent = "Enter a search phrase.";
    searchInput.focus();
    return;
  }
  searchMessage.textContent = `No local results found for “${query}”.`;
});

document.querySelectorAll(".footer-heading").forEach((heading) => {
  if (window.innerWidth <= 767) heading.setAttribute("aria-expanded", "false");
  heading.addEventListener("click", () => {
    if (window.innerWidth > 767) return;
    const isExpanded = heading.getAttribute("aria-expanded") === "true";
    heading.setAttribute("aria-expanded", String(!isExpanded));
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px" });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1279) setMobileMenu(false);
  if (window.innerWidth > 767) {
    document.querySelectorAll(".footer-heading").forEach((heading) => {
  if (window.innerWidth <= 767) heading.setAttribute("aria-expanded", "false");
      heading.setAttribute("aria-expanded", "true");
    });
  }
});


document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

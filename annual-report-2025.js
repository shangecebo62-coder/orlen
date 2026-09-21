(() => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const drawer = document.querySelector("[data-drawer]");
  const backdrop = document.querySelector("[data-backdrop]");
  const menuButtons = [...document.querySelectorAll("[data-menu-open]")];
  const tabButtons = [...document.querySelectorAll("[data-drawer-tab]")];
  const drawerPanels = [...document.querySelectorAll("[data-drawer-panel]")];

  const setDrawerTab = (name) => {
    const target = name === "sustainability" ? "sustainability" : "management";
    tabButtons.forEach((button) => {
      const active = button.dataset.drawerTab === target;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    drawerPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.drawerPanel === target));
  };
  const openDrawer = (tab) => {
    setDrawerTab(tab);
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    body.classList.add("is-locked");
    menuButtons.forEach((button) => button.setAttribute("aria-expanded", "true"));
  };
  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    body.classList.remove("is-locked");
    menuButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
  };
  menuButtons.forEach((button) => button.addEventListener("click", () => openDrawer(button.dataset.menuOpen)));
  tabButtons.forEach((button) => button.addEventListener("click", () => setDrawerTab(button.dataset.drawerTab)));
  document.querySelector("[data-menu-close]").addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a[href^='#']").forEach((link) => link.addEventListener("click", closeDrawer));

  const video = document.querySelector(".ar-hero video");
  const videoToggle = document.querySelector("[data-video-toggle]");
  const videoIcon = document.querySelector("[data-video-icon]");
  video.play().catch(() => {});
  videoToggle.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
      videoToggle.setAttribute("aria-pressed", "false");
      videoToggle.setAttribute("aria-label", "Pause background film");
      videoIcon.textContent = "Ⅱ";
    } else {
      video.pause();
      videoToggle.setAttribute("aria-pressed", "true");
      videoToggle.setAttribute("aria-label", "Play background film");
      videoIcon.textContent = "▶";
    }
  });

  const searchItems = [
    ["CEO Letter", "A message from the President of the Management Board", "#ceo-letter"],
    ["ORLEN Group", "Integrated multi-energy operations", "#creating-value"],
    ["Value Creation Model", "From resources to customers", "#creating-value"],
    ["ORLEN Group Strategy to 2035", "Secure supply and pragmatic transition", "#strategy"],
    ["Upstream & Supply", "2025 segment performance", "#performance"],
    ["Downstream", "2025 segment performance", "#performance"],
    ["Energy", "2025 segment performance", "#performance"],
    ["Consumers & Products", "2025 segment performance", "#performance"],
    ["Financial Performance", "Key figures for 2025", "#performance"],
    ["General Disclosures ESRS 2", "Sustainability Statement", "#sustainability"],
    ["EU Taxonomy", "Sustainable economic activities", "#sustainability"],
    ["Climate Change ESRS E1", "Environment and climate", "#sustainability"],
    ["ORLEN Group Workforce ESRS S1", "People and working conditions", "#sustainability"],
    ["Business Conduct ESRS G1", "Responsible governance", "#sustainability"],
    ["Management Board’s Report PDF", "Complete downloadable report", "#report-download"]
  ];
  const searchDialog = document.querySelector("[data-search-dialog]");
  const searchInput = document.querySelector("[data-search-input]");
  const searchResults = document.querySelector("[data-search-results]");
  const renderSearch = (query = "") => {
    const needle = query.trim().toLowerCase();
    const matches = searchItems.filter((item) => `${item[0]} ${item[1]}`.toLowerCase().includes(needle));
    searchResults.innerHTML = matches.map((item) => `<li><button type="button" data-search-target="${item[2]}"><span><strong>${item[0]}</strong><br><small>${item[1]}</small></span><b>→</b></button></li>`).join("") || "<li>No matching report sections.</li>";
    searchResults.querySelectorAll("[data-search-target]").forEach((button) => button.addEventListener("click", () => {
      searchDialog.close();
      document.querySelector(button.dataset.searchTarget)?.scrollIntoView({ behavior: "smooth" });
    }));
  };
  document.querySelector("[data-search-open]").addEventListener("click", () => { renderSearch(); searchDialog.showModal(); requestAnimationFrame(() => searchInput.focus()); });
  searchInput.addEventListener("input", () => renderSearch(searchInput.value));

  const detailContent = {
    ceo: ["Our company", "CEO Letter", "<p>2025 combined record investment activity with strong operating cash generation. ORLEN strengthened energy security, developed lower-emission assets and created a stable platform for long-term growth.</p><p>The year’s achievements reflect the work of teams throughout the Group and the trust of customers, partners and shareholders.</p>"],
    "business-model": ["Creating value", "Integrated business model", "<p>The Group operates across four connected segments. Their integration allows resources, energy and products to move efficiently from supply and production to the final customer.</p><ul><li>Upstream &amp; Supply</li><li>Downstream</li><li>Energy</li><li>Consumers &amp; Products</li></ul>"],
    "value-chain": ["Creating value", "From resources to customers", "<p>ORLEN’s value chain starts with access to crude oil, gas and renewable resources. It continues through refining, petrochemicals and power generation, then reaches homes and businesses through distribution, retail and modern mobility services.</p>"],
    segments: ["Creating value", "Four business segments", "<p>A diversified portfolio balances market cycles and combines the Group’s industrial scale with its broad customer reach.</p><ul><li><strong>Upstream &amp; Supply:</strong> production, imports, trading and logistics.</li><li><strong>Downstream:</strong> refining and petrochemicals.</li><li><strong>Energy:</strong> conventional, renewable and distributed energy.</li><li><strong>Consumers &amp; Products:</strong> fuels, electricity and customer services.</li></ul>"],
    strategy: ["Development", "Strategy to 2035", "<p>The strategy builds a resilient, digitally enabled organisation. It supports energy security while scaling renewables, flexible gas generation, low-carbon fuels, hydrogen, carbon capture and modern customer solutions.</p><p>Investment decisions consider financial return, strategic importance and their effect on emissions.</p>"],
    upstream: ["Performance", "Upstream & Supply", "<p>The segment combines production in Poland and Norway with a diversified gas-supply portfolio, LNG capacity, storage, trading and logistics. Its role is to strengthen secure and competitive supplies for Central Europe.</p>"],
    downstream: ["Performance", "Downstream", "<p>Refining and petrochemical assets provide fuels, chemical feedstocks and products while transformation projects improve efficiency and prepare facilities for a lower-emission future.</p>"],
    energy: ["Performance", "Energy", "<p>The portfolio includes renewable generation, offshore wind, gas-fired plants, distribution networks and heat. Energy is designed to become the Group’s fastest-growing segment.</p>"],
    consumers: ["Performance", "Consumers & Products", "<p>A broad retail network connects fuels, charging, electricity, convenience services and digital products with millions of customers across the region.</p>"],
    general: ["Sustainability Statement", "General Disclosures [ESRS 2]", "<p>The disclosures explain governance, strategy, impact and risk management, due-diligence processes, stakeholder engagement, and the basis used to prepare the Sustainability Statement.</p>"],
    taxonomy: ["Sustainability Statement", "EU Taxonomy", "<p>The taxonomy section presents the eligibility and alignment of ORLEN activities with the European classification of environmentally sustainable economic activities.</p>"],
    climate: ["Environment and Climate", "ESRS E1–E5", "<p>The environmental chapters cover climate transition, emissions, pollution prevention, water and marine resources, biodiversity, resource use and circularity.</p>"],
    workforce: ["Social", "ESRS S1–S4", "<p>The social disclosures address the Group’s workforce, workers across the value chain, affected communities, consumers and end-users, with attention to safety, development and human rights.</p>"],
    governance: ["Governance", "Business Conduct [ESRS G1]", "<p>This chapter describes ethics, compliance, supplier relationships, anti-corruption safeguards and the governance systems supporting responsible business.</p>"],
    other: ["Sustainability Statement", "Other Information", "<p>Appendices and reference material complete the Sustainability Statement and connect disclosures with the relevant ESRS requirements.</p>"]
  };
  const detailDialog = document.querySelector("[data-detail-dialog]");
  document.querySelectorAll("[data-detail]").forEach((button) => button.addEventListener("click", () => {
    const content = detailContent[button.dataset.detail];
    if (!content) return;
    detailDialog.querySelector("[data-detail-kicker]").textContent = content[0];
    detailDialog.querySelector("[data-detail-title]").textContent = content[1];
    detailDialog.querySelector("[data-detail-copy]").innerHTML = content[2];
    detailDialog.showModal();
  }));
  document.querySelector("[data-detail-close]").addEventListener("click", () => detailDialog.close());
  detailDialog.addEventListener("click", (event) => { if (event.target === detailDialog) detailDialog.close(); });

  const years = {
    "2025": { ebitda: "PLN 41.5 bn", cashflow: "PLN 47.2 bn", revenue: "PLN 267.8 bn", capex: "PLN 33.1 bn", debt: "−0.06×", dividend: "PLN 6.00", trir: "0.24" },
    "2024": { ebitda: "PLN 37.5 bn", cashflow: "PLN 36.6 bn", revenue: "PLN 295 bn", capex: "PLN 32.4 bn", debt: "0.3×", dividend: "PLN 4.15", trir: "0.26" }
  };
  document.querySelectorAll("[data-year]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-year]").forEach((item) => item.classList.toggle("is-active", item === button));
    Object.entries(years[button.dataset.year]).forEach(([key, value]) => { document.querySelector(`[data-stat="${key}"]`).textContent = value; });
  }));

  const segments = {
    upstream: ["Upstream & Supply", "Security through diversified resources", "Domestic and international production, gas imports, trading and logistics reinforce dependable supply across the region."],
    downstream: ["Downstream", "Efficient refining and modern products", "Integrated refining, petrochemical and logistics assets provide essential products while transformation investment lowers their environmental impact."],
    energy: ["Energy", "A faster-growing power portfolio", "Renewables, offshore wind, flexible gas generation, distribution and heat support reliable supply and the Group’s transition."],
    consumers: ["Consumers & Products", "Close to millions of customers", "Retail, electricity, charging, convenience and digital services connect ORLEN’s integrated offer with people and businesses across Europe."]
  };
  const segmentPanel = document.querySelector("[data-segment-panel]");
  document.querySelectorAll("[data-segment]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-segment]").forEach((item) => item.classList.toggle("is-active", item === button));
    const content = segments[button.dataset.segment];
    segmentPanel.innerHTML = `<p>${content[0]}</p><h3>${content[1]}</h3><span>${content[2]}</span><button type="button" data-detail="${button.dataset.segment}">View segment →</button>`;
    segmentPanel.querySelector("button").addEventListener("click", () => {
      const detail = detailContent[button.dataset.segment];
      detailDialog.querySelector("[data-detail-kicker]").textContent = detail[0];
      detailDialog.querySelector("[data-detail-title]").textContent = detail[1];
      detailDialog.querySelector("[data-detail-copy]").innerHTML = detail[2];
      detailDialog.showModal();
    });
  }));

  const reveals = [...document.querySelectorAll(".ar-reveal")];
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
  reveals.forEach((item) => revealObserver.observe(item));
  const sections = [...document.querySelectorAll("[data-section]")];
  const jumpLinks = [...document.querySelectorAll(".ar-jump a")];
  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    jumpLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  }), { rootMargin: "-35% 0px -55%", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 40), { passive: true });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer(); });
})();

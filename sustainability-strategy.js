(function () {
  "use strict";
  const main = document.querySelector("main");
  if (!main) return;
  document.title = "ORLEN Group Sustainability Strategy for 2025–2035";
  document.body.classList.add("strategy-sustainability-page");
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "sustainability.html"));

  const pillars = [
    ["Climate", "assets/images/sustainability-strategy/climate.jpeg", "Management of climate-related issues, emissions reduction and adaptation of the business model.", "sustainability-climate.html"],
    ["Environment", "assets/images/sustainability-strategy/environment.jpeg", "Biodiversity protection, sustainable water management, pollution reduction and circularity.", "sustainability-environment.html"],
    ["Employees", "assets/images/sustainability-strategy/employees.jpeg", "Safe working conditions, well-being, human rights and professional development.", "sustainability-employees.html"],
    ["Communities", "assets/images/sustainability-strategy/communities.jpeg", "Responsible business, social programmes and lasting relationships with local communities.", "sustainability-communities.html"],
    ["Governance", "assets/images/sustainability-strategy/governance.jpeg", "Responsible, transparent management across the entire ORLEN value chain.", "sustainability-governance.html"]
  ];

  const principles = [
    ["Human Rights", "assets/images/sustainability-strategy/ungc-human-rights.jpeg", ["Support and respect internationally recognised human rights.", "Eliminate all instances of human-rights violations by the company."]],
    ["Labour", "assets/images/sustainability-strategy/ungc-labour.jpeg", ["Respect freedom of association.", "Eliminate forced labour and child labour.", "Combat discrimination in employment."]],
    ["Environment", "assets/images/sustainability-strategy/ungc-environment.jpeg", ["Take a preventive approach to environmental protection.", "Promote ecological responsibility.", "Disseminate environmentally friendly technologies."]],
    ["Anti-Corruption", "assets/images/sustainability-strategy/ungc-anti-corruption.jpeg", ["Prevent corruption in all forms, including extortion and bribery."]]
  ];

  main.outerHTML = `<main id="main-content">
    <section class="ss-hero"><img src="assets/images/sustainability-strategy/hero.png" alt="A driver refuelling a hydrogen vehicle"><div class="ss-hero__content page-width"><nav class="ss-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span>›</span><a href="sustainability.html">Sustainability</a><span>›</span><span aria-current="page">Sustainability Strategy</span></nav><p class="ss-kicker">Sustainability</p><h1>ORLEN Group Sustainability Strategy for 2025–2035</h1></div></section>
    <section class="ss-intro page-width reveal"><p>The ORLEN Group is committed to sustainable development in all its activities. Sustainability means minimising climate impact, protecting nature, ensuring good working conditions, cooperating with local communities and managing responsibly.</p><p>Our aim is to support the ORLEN2035 Strategy, strengthen the path to Net Zero in 2050 and build long-term value for every stakeholder.</p></section>
    <section class="ss-film"><div class="page-width"><div class="ss-film__heading reveal"><p class="ss-kicker">Our strategy</p><h2>Responsible growth in action</h2></div><div class="ss-film__stage reveal" data-film-stage><img src="assets/images/sustainability-strategy/strategy-film.jpg" alt="ORLEN Sustainability Strategy film" data-film-frame><div class="ss-film__shade"></div><div class="ss-film__caption"><span>ORLEN Group Sustainability Strategy 2025–2035</span><button type="button" data-film-toggle aria-pressed="false"><span class="ss-play-icon" aria-hidden="true">▶</span><span data-film-label>Play presentation</span></button></div></div></div></section>
    <section class="ss-summary"><div class="page-width ss-summary__grid reveal"><p class="ss-kicker">2025–2035</p><div><h2>Strategy for a secure and sustainable future</h2><p>We pursue our goals while ensuring energy security in Central Europe and caring for the natural environment, strong relationships and safe working conditions. Responsible action also supports financing for projects with a positive social and environmental impact.</p><a class="ss-solid-button" href="assets/images/sustainability-strategy/ORLEN-Sustainability-Strategy.pdf" target="_blank" rel="noopener">Presentation <span aria-hidden="true">↓</span></a></div></div></section>
    <section class="ss-pillars"><div class="page-width"><div class="ss-section-heading reveal"><div><p class="ss-kicker">Our framework</p><h2>Five pillars of the strategy</h2></div><p>The strategy responds to climate, biodiversity, social, geopolitical and economic challenges and aligns its goals with international standards.</p></div><div class="ss-pillar-grid">${pillars.map((pillar, index) => `<article class="ss-pillar reveal"><a class="ss-pillar__image" href="${pillar[3]}"><img src="${pillar[1]}" alt="${pillar[0]}" ${index > 1 ? 'loading="lazy"' : ""}></a><div class="ss-pillar__copy"><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="${pillar[3]}">${pillar[0]}</a></h3><p>${pillar[2]}</p><a class="ss-more" href="${pillar[3]}">Find out more <span aria-hidden="true">→</span></a></div></article>`).join("")}</div></div></section>
    <section class="ss-alignment"><div class="page-width"><div class="ss-section-heading reveal"><div><p class="ss-kicker">Global alignment</p><h2>Goals linked with UN guidelines and ESRS</h2></div><p>Connecting the strategy with global principles supports detailed, transparent sustainability reporting.</p></div><img class="ss-wide-image reveal" src="assets/images/sustainability-strategy/goals.jpeg" alt="Sustainability goals aligned with international guidelines" loading="lazy"></div></section>
    <section class="ss-ungc"><div class="page-width"><div class="ss-section-heading reveal"><div><p class="ss-kicker">Ten principles</p><h2>UN Global Compact</h2></div><p>Since joining the UN Global Compact in 2024, ORLEN has committed to incorporating its principles and the Sustainable Development Goals into business operations, strategy and policies.</p></div><div class="ss-principle-grid">${principles.map((principle, index) => `<article class="ss-principle reveal"><img src="${principle[1]}" alt=""><span>${String(index + 1).padStart(2, "0")}</span><h3>${principle[0]}</h3><ul>${principle[2].map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("")}</div><div class="ss-esrs reveal"><div><p class="ss-kicker">Reporting standards</p><h2>ESRS Reporting Standards</h2></div><img src="assets/images/sustainability-strategy/esrs.jpeg" alt="European Sustainability Reporting Standards alignment" loading="lazy"></div></div></section>
    <section class="ss-see-also"><div class="page-width"><p class="ss-kicker">See also</p><a class="ss-community-card reveal" href="sustainability-community-relations.html"><img src="assets/images/sustainability-strategy/community-officer.jpeg" alt="Local community collaboration" loading="lazy"><div><small>Sustainability</small><h2>Local Community Relations Officer</h2><p>Dialogue with communities based on partnership, honesty, respect and trust.</p><span>Find out more →</span></div></a></div></section>
  </main>`;

  const frames = ["strategy-film.jpg", "climate.jpeg", "environment.jpeg", "employees.jpeg", "communities.jpeg", "governance.jpeg"].map((name) => `assets/images/sustainability-strategy/${name}`);
  const frame = document.querySelector("[data-film-frame]");
  const toggle = document.querySelector("[data-film-toggle]");
  const label = document.querySelector("[data-film-label]");
  const icon = toggle.querySelector(".ss-play-icon");
  let timer = null;
  let current = 0;
  const stopFilm = () => { clearInterval(timer); timer = null; toggle.setAttribute("aria-pressed", "false"); label.textContent = "Play presentation"; icon.textContent = "▶"; };
  toggle.addEventListener("click", () => {
    if (timer) { stopFilm(); return; }
    toggle.setAttribute("aria-pressed", "true"); label.textContent = "Pause presentation"; icon.textContent = "Ⅱ";
    current = (current + 1) % frames.length; frame.src = frames[current];
    timer = setInterval(() => { current = (current + 1) % frames.length; frame.src = frames[current]; }, 3200);
  });
  document.addEventListener("visibilitychange", () => { if (document.hidden && timer) stopFilm(); });
})();

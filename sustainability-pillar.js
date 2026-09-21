(function () {
  "use strict";
  const main = document.querySelector("main");
  const key = document.body.dataset.strategyPillar;
  if (!main || !key) return;
  document.body.classList.add("strategy-pillar-page");
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "sustainability.html"));

  const configs = {
    climate: {
      title: "Climate", subtitle: "Action to minimise climate impact", image: "assets/images/sustainability-strategy/climate.jpeg",
      intro: "Reducing the climate impact of our activities has been one of the ORLEN Group’s most important priorities for years. Greenhouse-gas reduction targets are a key element of the business strategy, while adaptation is essential for resilient development.",
      reporting: ["assets/images/sustainability-strategy/climate-esrs.jpeg"],
      categories: [
        ["Decarbonisation", ["Methane measurement systems and supplier decarbonisation guidance."], ["13% reduction in absolute Scope 1 and 2 emissions in refining, petrochemicals and Upstream.", "40% reduction in energy-sector emissions intensity.", "Zero routine flaring and near-zero methane emissions."], ["25% reduction in absolute emissions and 55% lower energy-segment intensity.", "Coal phase-out by 2035 and Net Zero by 2050."]],
        ["Energy transition", ["Launch the 1.2 GW Baltic Power offshore wind project.", "Expand the public EV charging network."], ["9 GW of renewable capacity and 0.8 GW of battery storage.", "2,700 fast charging points and a 21.1% RES share in the fuel basket."], ["12.8 GW of renewable capacity, 1.4 GW of storage and 6,000 fast chargers.", "0.6 GW of installed SMR capacity." ]],
        ["Climate change adaptation", ["Develop plans addressing key threats to ORLEN Group assets."], ["Implement and systematically update adaptation plans for key assets."], ["Build a comprehensive climate-resilience system using infrastructure and innovative technologies."]]
      ]
    },
    environment: {
      title: "Environment", subtitle: "Protection of nature and resources", image: "assets/images/sustainability-strategy/environment.jpeg",
      intro: "Environmental protection is central to ORLEN’s responsibility. The pillar focuses on biodiversity, sustainable water and wastewater management, pollution prevention and development of the circular economy.",
      reporting: ["assets/images/sustainability-strategy/environment-esrs.jpeg", "assets/images/sustainability-strategy/environment-esrs-2.jpeg"],
      categories: [
        ["Biodiversity protection", ["Develop a Biodiversity Action Plan and calculate ORLEN S.A.’s biodiversity footprint."], ["Implement the plan across Group companies and avoid new infrastructure in specially protected areas."], ["Digitise environmental monitoring and pursue a net-positive biodiversity ambition for new assets by 2050."]],
        ["Water and wastewater", ["Calculate the water footprint and develop a Group Water and Wastewater Policy."], ["Improve freshwater efficiency and prepare replenishment plans in water-stressed areas."], ["Protect water resources wherever the Group operates."]],
        ["Circular economy and pollution reduction", ["Increase recycling capacity, adopt Circular Economy Policy and reduce food waste."], ["Reach 150,000 tonnes of recycling capacity and grow sales based on renewable and circular inputs."], ["Continue minimising pollution, waste generation and primary resource use."]]
      ]
    },
    employees: {
      title: "Employees", subtitle: "Occupational safety and well-being", image: "assets/images/sustainability-strategy/employees.jpeg",
      intro: "People are the ORLEN Group’s most valuable resource. We support well-being, professional development, high safety standards and human rights, building relationships through honesty, respect, dialogue and cooperation.",
      reporting: ["assets/images/sustainability-strategy/employees-esrs.jpeg", "assets/images/sustainability-strategy/employees-esrs-2.jpeg"],
      categories: [
        ["Health and safety standards", ["Stabilise and systematically reduce TRIR below 0.2.", "Improve safety systems for employees and contractors."], ["Continue reducing TRIR and implement the OHS Management Policy across the Group."], ["Use advanced hazard-prediction systems and continuously improve safety culture."]],
        ["Process safety", ["Implement the Declaration on Prevention of Major Accidents throughout the Group."], ["Enhance fire and process-safety management systems."], ["Maintain global standards and apply modern risk-monitoring tools."]],
        ["Employee healthcare", ["Include all employees in physical and mental-health programmes."], ["Develop health initiatives around changing employee needs."], ["Provide comprehensive support for well-being and work-life balance."]],
        ["Development and inclusion", ["Strengthen professional development and equal opportunity programmes."], ["Expand reskilling and leadership pathways for the transition."], ["Build an inclusive organisation prepared for future competencies."]]
      ]
    },
    communities: {
      title: "Communities", subtitle: "Relations with stakeholders and communities", image: "assets/images/sustainability-strategy/communities.jpeg",
      intro: "ORLEN aims to act as a responsible member of the community and a partner in responsible development. Social initiatives respond to local needs and seek to deliver real, widely shared benefits.",
      reporting: ["assets/images/sustainability-strategy/communities-esrs.jpeg", "assets/images/sustainability-strategy/communities-esrs-2.jpeg"],
      categories: [
        ["Local community engagement", ["Develop the Relations Officer role, feedback systems and dedicated science, culture, sport and good-neighbour programmes."], ["Standardise community communication and adapt programmes to changing social needs."], ["Operate a unified international relationship-management system with regular programme evaluation."]],
        ["Just transition", ["Identify social needs and define a programme for employees, communities, partners and customers."], ["Implement the programme in selected operating locations and support future-job skills."], ["Embed just-transition principles throughout transformation decisions."]],
        ["Social impact", ["Coordinate charitable and social initiatives with local stakeholders."], ["Measure outcomes and expand successful community partnerships."], ["Create lasting value through broad access to education, culture and sport."]]
      ]
    },
    governance: {
      title: "Governance", subtitle: "Responsible governance", image: "assets/images/sustainability-strategy/governance.jpeg",
      intro: "Sustainable development and climate and environmental management are rooted in ORLEN Group structures. Transparent communication and flexible governance help the organisation respond quickly and responsibly to current challenges.",
      reporting: ["assets/images/sustainability-strategy/governance-esrs.jpeg", "assets/images/sustainability-strategy/governance-esrs-2.jpeg"],
      categories: [
        ["Sustainable value chain", ["Develop supply-chain due diligence, verify key suppliers and deliver sustainability training."], ["Improve due diligence and implement supplier risk management."], ["Promote sustainability principles among internal and external stakeholders."]],
        ["Cybersecurity", ["Implement centralised cybersecurity management in selected strategic companies."], ["Extend the model throughout the Group value chain."], ["Continuously improve asset protection and centralised management effectiveness."]],
        ["Respect for human rights", ["Implement human-rights due diligence and Group-wide protection policy."], ["Work with partners to minimise adverse human-rights impacts."], ["Uphold human rights and ethical standards throughout operations and the value chain."]],
        ["Diversity and inclusion", ["Strengthen women’s leadership and prevent bullying and discrimination."], ["Monitor equal opportunity and expand inclusive development programmes."], ["Maintain diverse, fair and inclusive leadership and workplace practices."]]
      ]
    }
  };

  const breadcrumbs = (title) => `<nav class="ss-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span>›</span><a href="sustainability.html">Sustainability</a><span>›</span><a href="sustainability-strategy.html">Sustainability Strategy</a><span>›</span><span aria-current="page">${title}</span></nav>`;

  if (key === "community-relations") {
    document.title = "Local Community Relations Officer | ORLEN";
    main.outerHTML = `<main id="main-content"><section class="sp-hero"><img src="assets/images/sustainability-strategy/community-officer.jpeg" alt="Local communities and ORLEN"><div class="sp-hero__content page-width">${breadcrumbs("Local Community Relations Officer")}<p class="ss-kicker">Sustainability</p><h1>Local Community Relations Officer</h1><p class="sp-hero__lead">Dialogue with communities based on partnership, honesty, respect and trust.</p></div></section><section class="sp-intro page-width reveal"><p class="ss-kicker">Open dialogue</p><div class="sp-intro__copy"><h2>A clear channel for local communities</h2><p>Representatives of local communities can freely submit comments, opinions and questions about ORLEN’s activities. The Relations Officer helps maintain high-quality relationships and responds as soon as possible.</p></div></section><section class="sp-contact"><div class="sp-contact__grid page-width"><div class="sp-contact__visual reveal"><img src="assets/images/sustainability-strategy/community-contact.jpeg" alt="Local Community Relations Officer" loading="lazy"></div><div class="sp-contact__copy reveal"><p class="ss-kicker">Contact</p><h2>Write to the Relations Officer</h2><p>You can use this local form or send a traditional letter.</p><address class="sp-address"><strong>Local Community Relations Officer</strong><br>External Relations Office<br>ORLEN, ul. Bielańska 12<br>00-085 Warszawa</address><form class="sp-contact-form" id="community-form"><label>Full name<input name="name" required></label><label>Email address<input name="email" type="email" required></label><label>Your message<textarea name="message" required></textarea></label><button type="submit">Prepare message</button><p class="sp-form-status" id="community-form-status" aria-live="polite"></p></form></div></div></section><section class="sp-reporting"><div class="page-width"><div class="sp-targets__heading"><h2>What to include</h2><p>Complete information helps the team consider a submission efficiently.</p></div><div class="sp-accordion"><details open><summary><span>01</span><strong>Contact details</strong></summary><div class="sp-accordion__content"><div class="sp-horizon"><h3>Required</h3><ul><li>First and last name</li><li>Institution, if applicable</li><li>Correspondence or email address</li><li>Telephone number</li></ul></div></div></details><details><summary><span>02</span><strong>Case description</strong></summary><div class="sp-accordion__content"><div class="sp-horizon"><h3>Helpful information</h3><ul><li>A detailed explanation of the issue</li><li>Supporting documents</li><li>Suggested improvements</li><li>Information about earlier reports</li></ul></div></div></details></div><a class="sp-back" href="sustainability-strategy.html">Back to Sustainability Strategy ↑</a></div></section></main>`;
    const form = document.getElementById("community-form");
    form.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(form); document.getElementById("community-form-status").textContent = `Thank you, ${data.get("name")}. Your message is ready for review.`; form.reset(); });
    return;
  }

  const page = configs[key];
  if (!page) return;
  document.title = `${page.title} | ORLEN Sustainability Strategy`;
  const accordion = page.categories.map((category, index) => `<details ${index === 0 ? "open" : ""}><summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${category[0]}</strong></summary><div class="sp-accordion__content"><article class="sp-horizon"><h3>Targets by 2026</h3><ul>${category[1].map((item) => `<li>${item}</li>`).join("")}</ul></article><article class="sp-horizon"><h3>Targets by 2030</h3><ul>${category[2].map((item) => `<li>${item}</li>`).join("")}</ul></article><article class="sp-horizon"><h3>2035+ ambitions</h3><ul>${category[3].map((item) => `<li>${item}</li>`).join("")}</ul></article></div></details>`).join("");
  main.outerHTML = `<main id="main-content"><section class="sp-hero"><img src="${page.image}" alt="${page.title}"><div class="sp-hero__content page-width">${breadcrumbs(page.title)}<p class="ss-kicker">Sustainability</p><h1>${page.title}</h1><p class="sp-hero__lead">${page.subtitle}</p></div></section><section class="sp-intro page-width reveal"><p class="ss-kicker">Our commitment</p><div class="sp-intro__copy"><h2>${page.subtitle}</h2><p>${page.intro}</p></div></section><section class="sp-targets"><div class="page-width"><div class="sp-targets__heading reveal"><h2>Targets and ambitions</h2><p>Open each area to compare near-term actions, 2030 targets and longer-term ambitions.</p></div><div class="sp-accordion">${accordion}</div></div></section><section class="sp-reporting"><div class="page-width"><div class="sp-targets__heading reveal"><h2>ESRS alignment</h2><p>Strategy priorities are linked with transparent European sustainability reporting standards.</p></div><div class="sp-reporting__grid">${page.reporting.map((image) => `<img class="reveal" src="${image}" alt="${page.title} ESRS reporting alignment" loading="lazy">`).join("")}</div><a class="sp-back" href="sustainability-strategy.html">Back to Sustainability Strategy ↑</a></div></section></main>`;
})();

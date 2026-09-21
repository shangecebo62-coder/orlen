(function () {
  "use strict";
  const main = document.querySelector("main");
  const key = document.body.dataset.transitionDetail;
  if (!main || !key) return;

  document.body.classList.add("transition-detail-page");
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "sustainability.html"));

  const data = {
    "transition-plan": {
      title: "ORLEN Transition Plan",
      image: "assets/images/energy-transition/transition-plan-hero.jpeg",
      lead: "A strategic document outlining ORLEN’s role in the global and EU energy transition towards achieving climate neutrality.",
      introTitle: "A comprehensive transition pathway",
      paragraphs: [
        "The ORLEN Transition Plan explains how the Group responds to a dynamically changing regulatory and market environment, actively supporting the decarbonisation of its own operations and the broader economy through strategic projects.",
        "Prepared in accordance with leading international standards, the plan brings together transformation priorities, capital allocation, just-transition commitments and climate governance in one integrated framework."
      ]
    },
    decarbonisation: {
      title: "Decarbonisation strategy",
      image: "assets/images/energy-transition/decarbonisation.jpeg",
      lead: "ORLEN’s decarbonisation plans are a key part of the Group’s business strategy and its ambition to achieve carbon neutrality by 2050.",
      introTitle: "Lower emissions, resilient growth",
      paragraphs: [
        "In 2020, ORLEN became the first oil and gas company in Central Europe to declare an objective of achieving carbon neutrality by 2050. The Group has since strengthened its greenhouse-gas reduction targets for 2030.",
        "The pathway combines transformation of existing assets with investment in renewables, lower-carbon generation, sustainable mobility, hydrogen and carbon management."
      ]
    },
    circular: {
      title: "Circular economy",
      image: "assets/images/energy-transition/circular-economy.jpeg",
      lead: "Products, materials and resources remain in circulation for as long as possible, while waste is minimised and transformed into new resources.",
      introTitle: "Keeping resources in circulation",
      paragraphs: [
        "The circular economy promotes efficient use of resources, including energy and water, reducing consumption and the environmental impact of industrial activity.",
        "Across the ORLEN Group, circular solutions support lower-emission products, eco-design, more efficient processes and new business areas while strengthening resilience and competitiveness."
      ]
    },
    projects: {
      title: "Transition projects",
      image: "assets/images/energy-transition/transition-projects.jpeg",
      lead: "Practical projects implemented across the ORLEN Group to support energy security, lower emissions and modernise the region’s energy system.",
      introTitle: "Investment that moves the transition forward",
      paragraphs: [
        "The Group develops complementary technologies rather than relying on a single solution. Renewable generation, grid modernisation, natural gas, hydrogen, CCUS and new mobility services each play a defined role.",
        "Select a project below to reveal its purpose and place in the transformation programme."
      ]
    }
  };

  const page = data[key];
  if (!page) return;
  document.title = `${page.title} | ORLEN`;

  const hero = `<section class="transition-detail-hero"><img src="${page.image}" alt="${page.title}"><div class="transition-detail-hero__content page-width"><nav class="transition-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><a href="sustainability.html">Sustainability</a><span aria-hidden="true">›</span><a href="energy-transition.html">Energy transition</a><span aria-hidden="true">›</span><span aria-current="page">${page.title}</span></nav><p class="transition-kicker">Sustainability</p><h1>${page.title}</h1><p>${page.lead}</p></div></section>`;
  const intro = `<section class="transition-article"><div class="transition-article__lead page-width reveal"><p class="transition-kicker">Energy transition</p><div class="transition-article__body"><h2>${page.introTitle}</h2>${page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}${key === "transition-plan" ? '<a class="transition-download" href="assets/images/energy-transition/ORLEN-Transition-Plan.pdf" target="_blank" rel="noopener">Download document</a>' : ""}</div></div></section>`;

  const planSection = () => {
    const areas = [
      ["Approach to transformation", "ORLEN’s strategic approach to transition and the specific challenges facing Central Europe."],
      ["Decarbonisation strategy", "Goals and investments that reduce emissions while creating new growth areas."],
      ["Capital allocation", "A long-term approach to funding and financing the transformation."],
      ["Just transition", "Commitments designed to ensure that social considerations remain central to change."],
      ["Climate governance", "A management framework for climate challenges, advocacy and stakeholder engagement."]
    ];
    return `<section class="transition-feature-band"><div class="page-width"><div class="transition-content-heading reveal"><h2>Five key areas</h2><p>The plan presents the transformation as one connected business, financial and social programme.</p></div><div class="transition-point-grid">${areas.map((area, index) => `<article class="transition-point reveal"><span>${String(index + 1).padStart(2, "0")}</span><h3>${area[0]}</h3><p>${area[1]}</p></article>`).join("")}</div></div></section><section class="transition-see-also"><div class="page-width"><p class="transition-kicker">See also</p><div class="transition-see-grid"><a class="transition-see-card" href="sustainability.html#reports-policies"><img src="assets/images/energy-transition/transition-plan-environment.jpeg" alt="Environment and sustainable development"><div><small>Sustainability</small><strong>Environment</strong></div></a><a class="transition-see-card" href="decarbonisation-strategy.html"><img src="assets/images/energy-transition/transition-plan-climate.jpeg" alt="Climate and energy transition"><div><small>Sustainability</small><strong>Climate</strong></div></a></div></div></section>`;
  };

  const decarbonisationSection = () => {
    const stages = [
      ["Transformation of operations", "Improve efficiency and lower emissions intensity across refining, petrochemicals, upstream and power generation."],
      ["Low- and zero-emission energy", "Expand renewable generation and complementary technologies that deliver reliable power."],
      ["New growth areas", "Develop hydrogen, sustainable mobility and carbon-management services for customers and industry."],
      ["Transparent measurement", "Monitor greenhouse-gas emissions and report progress against segment targets."]
    ];
    return `<section class="transition-feature-band"><div class="page-width"><div class="transition-content-heading reveal"><h2>Decarbonisation pathway</h2><p>A balanced plan protects energy security while progressively reducing climate impact.</p></div><div class="transition-accordion">${stages.map((stage, index) => `<details ${index === 0 ? "open" : ""}><summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${stage[0]}</strong></summary><div>${stage[1]}</div></details>`).join("")}</div></div></section><section class="transition-target"><div class="page-width"><p class="transition-kicker">Long-term ambition</p><div><strong>2050</strong><h2>Carbon neutrality</h2><p>ORLEN’s investment programme connects lower emissions with energy security and competitive, resilient growth.</p></div></div></section>`;
  };

  const circularSection = () => {
    const pillars = [
      ["assets/images/energy-transition/eco-design.png", "Eco-design", "Circularity from the design stage", "Circular principles inform products, services, technological processes and asset decommissioning."],
      ["assets/images/energy-transition/circular-processes.png", "Circular processes", "Greater process efficiency", "Operations are optimised to improve material, energy and water efficiency and minimise waste."],
      ["assets/images/energy-transition/circular-resources.png", "Circular resources", "Products based on circular feedstocks", "Recycled, renewable and alternative materials progressively replace virgin raw materials."],
      ["assets/images/energy-transition/new-business.png", "New business streams", "Innovation and growth", "New circular models respond to customer needs and create long-term value."]
    ];
    const benefits = [
      ["assets/images/energy-transition/local-economy.jpeg", "Strengthening the local economy", "Regional waste streams and materials can become useful local production inputs."],
      ["assets/images/energy-transition/modern-industry.jpeg", "Modern industry and employment", "Circularity supports competitive industrial models, new jobs and future skills."],
      ["assets/images/energy-transition/resource-independence.jpeg", "Greater resource independence", "Reuse reduces dependence on imported primary materials and improves system stability."],
      ["assets/images/energy-transition/sustainable-development.jpeg", "Sustainable development", "Circular initiatives influence emissions, raw-material consumption and waste volumes."]
    ];
    const policy = [
      ["Operating principles", "Extend the time resources remain in the economic cycle, manage materials, water and energy efficiently, and treat waste as a potential resource."],
      ["Areas of development", "Seek circular solutions throughout product and asset life cycles, support partnerships and industrial symbiosis, and build new circular services."],
      ["Supporting factors", "Set targets, promote research and innovation, strengthen responsible supply chains, and build capability through education and collaboration."]
    ];
    return `<section class="transition-media-section"><div class="page-width reveal"><img src="assets/images/energy-transition/circular-diagram.jpeg" alt="Diagram comparing a linear economy with a circular economy"><div class="transition-media-caption"><span>Linear economy</span><span>Circular economy</span></div></div></section><section class="transition-feature-band"><div class="page-width"><div class="transition-content-heading reveal"><h2>Circular economy pillars</h2><p>Four pillars integrate circular use of resources into products, processes and services.</p></div><div class="transition-pillars">${pillars.map((pillar) => `<article class="transition-pillar reveal"><img src="${pillar[0]}" alt=""><h3>${pillar[1]}</h3><strong>${pillar[2]}</strong><p>${pillar[3]}</p></article>`).join("")}</div></div></section><section class="transition-media-section"><div class="page-width"><div class="transition-content-heading reveal"><h2>Benefits of circularity</h2><p>Efficient resource use lowers environmental impact while strengthening innovation and competitiveness.</p></div><div class="transition-benefits">${benefits.map((benefit) => `<article class="transition-benefit reveal"><img src="${benefit[0]}" alt="${benefit[1]}" loading="lazy"><div class="transition-benefit__copy"><h3>${benefit[1]}</h3><p>${benefit[2]}</p></div></article>`).join("")}</div></div></section><section class="transition-feature-band"><div class="page-width"><div class="transition-content-heading reveal"><h2>ORLEN Group Circular Economy Policy</h2><p>Adopted in 2025, the policy sets development directions and operating principles across the Group.</p></div><div class="transition-accordion">${policy.map((item, index) => `<details ${index === 0 ? "open" : ""}><summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${item[0]}</strong></summary><div>${item[1]}</div></details>`).join("")}</div></div></section>`;
  };

  const projectsSection = () => {
    const projects = [
      ["assets/images/energy-transition/sustainable-mobility.jpeg", "Sustainable mobility", "Production and distribution infrastructure supports e-mobility, hydrogen and alternative fuels.", "The Group develops charging, hydrogen-refuelling and alternative-fuel solutions as part of an integrated mobility offer."],
      ["assets/images/energy-transition/smr.jpeg", "SMR", "Stable, innovative and low-carbon power-generation capacity.", "Small modular reactors can complement renewable generation with reliable low-emission power as technologies mature."],
      ["assets/images/energy-transition/hydrogen.jpeg", "Hydrogen", "A key part of decarbonisation with significant energy potential.", "The hydrogen programme supports industry and transport through production, distribution and refuelling infrastructure."],
      ["assets/images/energy-transition/renewables.jpeg", "Renewable energy sources", "A key growth area in the ORLEN2035 Strategy.", "Offshore and onshore wind, solar generation and storage modernise the Energy segment and increase low-carbon capacity."],
      ["assets/images/energy-transition/ccus.jpeg", "CCUS", "A complete value chain for carbon capture, utilisation and storage.", "Carbon management can lower direct emissions and support customers in industrial sectors that are difficult to decarbonise."],
      ["assets/images/energy-transition/power-grid.jpeg", "Power grid modernisation", "A smarter, more flexible distribution system.", "Modernisation, expansion and digitalisation help grids integrate new generation and provide a foundation for a fair transition."],
      ["assets/images/energy-transition/natural-gas.png", "Natural gas", "A transitional source supporting security and system stability.", "Diversified supply and domestic production complement renewables while helping maintain reliable energy at the lowest practical cost."]
    ];
    return `<section class="transition-feature-band"><div class="page-width"><div class="transition-content-heading reveal"><h2>Transition portfolio</h2><p>Open any project to learn how it contributes to the wider transformation.</p></div><div class="transition-project-grid">${projects.map((project, index) => `<article class="transition-project reveal"><img src="${project[0]}" alt="${project[1]}" ${index > 1 ? 'loading="lazy"' : ""}><div class="transition-project__copy"><h3>${project[1]}</h3><p>${project[2]}</p><details><summary>More</summary><p>${project[3]}</p></details></div></article>`).join("")}</div></div></section>`;
  };

  let body = "";
  if (key === "transition-plan") body = planSection();
  if (key === "decarbonisation") body = decarbonisationSection();
  if (key === "circular") body = circularSection();
  if (key === "projects") body = projectsSection();

  main.outerHTML = `<main id="main-content">${hero}${intro}${body}<section class="transition-see-also"><div class="page-width"><a class="transition-back" href="energy-transition.html">Back to Energy transition <span aria-hidden="true">↑</span></a></div></section></main>`;
})();

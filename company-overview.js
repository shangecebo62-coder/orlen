(() => {
  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Company Overview | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.textContent.trim() === "Investor relations"));
  document.querySelectorAll(".mobile-menu nav a").forEach((link) => link.classList.toggle("active", link.textContent.trim() === "Investor relations"));

  const areas = [
    {
      id: "upstream", title: "Upstream & Supply", icon: "upstream.png", stat: "73.6 mmboe", label: "hydrocarbon production in 2025",
      copy: "Gas-focused exploration and production in Poland and Norway, supported by onshore and offshore operations and geographically diversified imports.",
      points: ["Key gas producer on the Norwegian Continental Shelf", "Supply sources include Norway, the United States and Qatar", "Production, trading, storage and logistics managed as one value chain"]
    },
    {
      id: "downstream", title: "Downstream", icon: "refining.png", stat: "39.6 mt", label: "crude oil processed in 2025",
      copy: "Refining and petrochemical assets in Poland, Lithuania and Czechia supply fuels and approximately 40 petrochemical product groups to more than 60 countries.",
      points: ["93% refinery utilisation in 2025", "Long-term contracts strengthen throughput security", "Integrated production of polymers, fertilisers, monomers, PTA, plastics and aromatics"]
    },
    {
      id: "energy", title: "Energy", icon: "energy.png", stat: "1.7 GW", label: "installed renewable capacity",
      copy: "Electricity, gas and heat production is integrated with regulated distribution networks and growing renewable-energy capacity.",
      points: ["Wind, solar and hydro generation portfolio", "More than 200 thousand kilometres of electricity grid", "Coal-based power and heat generation scheduled to be phased out over the coming decade"]
    },
    {
      id: "consumers", title: "Consumers & Products", icon: "retail.png", stat: "3,546", label: "fuel stations in seven countries",
      copy: "The region’s largest modern fuel-station network combines mobility, convenience, electricity and gas services for households and businesses.",
      points: ["Around 80% of stations include a non-fuel concept", "More than 1,000 alternative-fuel stations", "Electricity and gas supplied to household and business customers"]
    },
    {
      id: "petrochemicals", title: "Petrochemicals", icon: "petrochemicals.png", stat: "60+", label: "countries receiving products",
      copy: "Petrochemical operations are closely integrated with the refining system and form a strategic supply base for industry across Central Europe.",
      points: ["Largest petrochemical player in Central and Eastern Europe", "Approximately 40 product groups", "Growth projects support higher-value and lower-emission products"]
    },
    {
      id: "gas", title: "Gas", icon: "gas.png", stat: "18.9 bcm", label: "natural gas sales in 2025",
      copy: "Own production, Norwegian supply contracts, LNG, storage and an extensive distribution system support regional energy security.",
      points: ["Largest supplier of gas to households in Poland", "Long-term LNG supply portfolio", "Diversified supply infrastructure includes Baltic Pipe and the Świnoujście LNG terminal"]
    }
  ];
  const figures = [
    ["73.6", "mmboe", "Hydrocarbon production"], ["39.6", "mt", "Crude oil throughput"], ["89.6", "PJ", "Heat production"], ["7.5+", "million", "Utility clients"], ["3,546", "", "Fuel stations"], ["18.9", "bcm", "Natural gas sales"], ["18.4", "TWh", "Electricity production"], ["1.7", "GW", "Renewable capacity"], ["923", "", "EV charging stations"], ["200k", "km", "Electricity grid operated"]
  ];
  const financials = {
    "2025": [["PLN 267.3 bn", "Revenue"], ["PLN 41.9 bn", "EBITDA LIFO"], ["PLN 47.4 bn", "Operating cash flow"], ["PLN 32.6 bn", "CAPEX"], ["−0.07×", "Net debt / EBITDA"]],
    "2024": [["PLN 296.9 bn", "Revenue"], ["PLN 35.8 bn", "EBITDA LIFO"], ["PLN 36.6 bn", "Operating cash flow"], ["PLN 32.4 bn", "CAPEX"], ["0.30×", "Net debt / EBITDA"]]
  };

  main.outerHTML = `<main id="main-content">
    <section class="co-hero" id="overview"><img src="assets/images/company-overview/hero.jpeg" alt="ORLEN industrial facility"><div class="co-hero__shade"></div><div class="page-width co-hero__content"><nav class="co-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span>›</span><a href="investor-relations.html">Investor relations</a><span>›</span><span>Company Overview</span></nav><p class="co-kicker">Investor relations</p><h1>Company<br>Overview</h1><p>Powering the future. Sustainably.</p></div></section>
    <nav class="co-jump" aria-label="Page sections"><div class="page-width"><span>Explore:</span><a href="#profile">Business profile</a><a href="#footprint">Our footprint</a><a href="#segments">Segments</a><a href="#financial-profile">Financial profile</a><a href="#growth">Strategic growth</a></div></nav>

    <section class="co-intro" id="profile"><div class="page-width co-intro__grid"><div class="co-intro__copy reveal"><p class="co-kicker">Presentation of ORLEN Group</p><h2>Poland’s premier integrated energy company</h2><p>ORLEN is a leading multi-energy group in Central and Eastern Europe. Four complementary segments connect hydrocarbon supply, processing, energy production and customer services in one resilient operating model.</p><div class="co-presentation"><div><strong>Company Overview</strong><span>August 2026 · PDF · 35 pages</span></div><a href="assets/documents/ORLEN-Group-Company-Overview-Aug-2026.pdf" target="_blank" rel="noopener">View PDF <b>↗</b></a><a href="assets/documents/ORLEN-Group-Company-Overview-Aug-2026.pdf" download>Download <b>↓</b></a></div></div><figure class="co-intro__image reveal"><img src="assets/images/company-overview/production.jpeg" alt="ORLEN production facility"><figcaption>An integrated business serving Central and Eastern Europe</figcaption></figure></div></section>

    <section class="co-footprint" id="footprint"><div class="page-width"><div class="co-heading reveal"><div><p class="co-kicker">Business profile</p><h2>Powering Central and Eastern Europe</h2></div><p>ORLEN’s scale links regional leadership with infrastructure that reaches customers every day. The figures below reflect the Group’s 2025 operating footprint.</p></div><div class="co-figure-grid">${figures.map((figure, index) => `<article class="co-figure reveal"><span>${String(index + 1).padStart(2,"0")}</span><strong>${figure[0]} <small>${figure[1]}</small></strong><p>${figure[2]}</p></article>`).join("")}</div></div></section>

    <section class="co-segments" id="segments"><div class="page-width"><div class="co-heading reveal"><div><p class="co-kicker">Operating model</p><h2>Integrated business areas</h2></div><p>Select an area to explore its role, scale and competitive strengths.</p></div><div class="co-segment-layout"><div class="co-segment-tabs" role="tablist" aria-label="Business areas">${areas.map((area,index)=>`<button class="${index===0?"is-active":""}" type="button" role="tab" aria-selected="${index===0}" data-area="${area.id}"><img src="assets/images/company-overview/${area.icon}" alt=""><span>${area.title}</span><b>→</b></button>`).join("")}</div><article class="co-segment-panel" data-area-panel>${renderArea(areas[0])}</article></div></div></section>

    <section class="co-financial" id="financial-profile"><div class="page-width"><div class="co-heading co-heading--light reveal"><div><p class="co-kicker">Capital markets</p><h2>Strong and diversified financial profile</h2></div><p>Integrated operations generated solid cash flow in 2025 while the Group continued its investment programme and maintained conservative leverage.</p></div><div class="co-year-switch" role="group" aria-label="Select reporting year"><button class="is-active" type="button" data-financial-year="2025">2025</button><button type="button" data-financial-year="2024">2024</button></div><div class="co-financial-grid" data-financial-grid>${financials["2025"].map((item,index)=>financialCard(item,index)).join("")}</div><div class="co-market-grid"><article class="co-shareholders reveal"><p class="co-kicker">Shareholder structure</p><div class="co-shareholder-layout"><div class="co-donut" role="img" aria-label="Shareholder structure: State Treasury 49.90 percent, pension funds 18.57 percent, free float 31.53 percent"><span>ORLEN<br>shares</span></div><ul><li><i></i><span>State Treasury</span><strong>49.90%</strong></li><li><i></i><span>Nationale-Nederlanden OFE</span><strong>5.26%</strong></li><li><i></i><span>Other Polish pension funds</span><strong>13.31%</strong></li><li><i></i><span>Other – free float</span><strong>31.53%</strong></li></ul></div></article><article class="co-ratings reveal"><p class="co-kicker">Investment profile</p><h3>Leading presence on the Warsaw Stock Exchange</h3><dl><div><dt>Market capitalisation</dt><dd>PLN 176 bn</dd></div><div><dt>Fitch</dt><dd>BBB+ / stable</dd></div><div><dt>Moody’s</dt><dd>A3 / stable</dd></div><div><dt>MSCI ESG rating</dt><dd>A</dd></div></dl></article></div></div></section>

    <section class="co-growth" id="growth"><img src="assets/images/company-overview/overview-hero.jpeg" alt="ORLEN energy infrastructure"><div class="co-growth__shade"></div><div class="page-width co-growth__content reveal"><p class="co-kicker">ORLEN 2035</p><h2>Secure energy.<br>Sustainable growth.</h2><p>The Group’s strategy combines value from today’s operations with a disciplined transformation of assets and expansion of innovative, lower-emission products.</p><div class="co-pillars"><button type="button" data-principle="value"><span>01</span><strong>Value maximisation</strong><small>Bringing the cash home</small></button><button type="button" data-principle="portfolio"><span>02</span><strong>Innovative portfolio</strong><small>Transforming the future</small></button><button type="button" data-principle="assets"><span>03</span><strong>Asset optimisation</strong><small>Derisking the model</small></button><button type="button" data-principle="capital"><span>04</span><strong>Capital stewardship</strong><small>Finding the right structure</small></button></div><a href="strategy-2035.html">Explore Strategy 2035 <span>→</span></a></div></section>

    <section class="co-related"><div class="page-width"><p class="co-kicker">Continue exploring</p><div class="co-related__grid"><a href="annual-report-2025.html"><span>Investor relations</span><h2>Annual Report 2025</h2><b>View report →</b></a><a href="financial-results-q2-2026.html"><span>Investor relations</span><h2>Latest financial results</h2><b>View results →</b></a></div></div></section>

    <section class="co-contact"><div class="page-width co-contact__grid"><div><p class="co-kicker">Contact</p><h2>Investor Relations Office</h2><p>phone: +44 7378347853<br>e-mail: ir@orlen.pl</p></div><form id="company-contact"><label>Name<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Message<textarea name="message" required></textarea></label><button type="submit">Prepare message <span>→</span></button><p class="co-form-status" aria-live="polite"></p></form></div></section>
  </main>`;

  function renderArea(area) {
    return `<div class="co-segment-panel__top"><img src="assets/images/company-overview/${area.icon}" alt=""><p>${area.title}</p></div><strong>${area.stat}</strong><span>${area.label}</span><h3>${area.title}</h3><p>${area.copy}</p><ul>${area.points.map(point=>`<li>${point}</li>`).join("")}</ul>`;
  }
  function financialCard(item,index) {
    return `<article class="co-financial-card"><span>${String(index+1).padStart(2,"0")}</span><strong>${item[0]}</strong><p>${item[1]}</p><i style="--bar:${[84,100,93,68,22][index]}%"></i></article>`;
  }

  const areaPanel = document.querySelector("[data-area-panel]");
  document.querySelectorAll("[data-area]").forEach(button => button.addEventListener("click", () => {
    const area = areas.find(item => item.id === button.dataset.area);
    document.querySelectorAll("[data-area]").forEach(item => { const active=item===button; item.classList.toggle("is-active",active); item.setAttribute("aria-selected",String(active)); });
    areaPanel.classList.add("is-changing");
    setTimeout(() => { areaPanel.innerHTML=renderArea(area); areaPanel.classList.remove("is-changing"); },160);
  }));
  document.querySelectorAll("[data-financial-year]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-financial-year]").forEach(item=>item.classList.toggle("is-active",item===button));
    const grid=document.querySelector("[data-financial-grid]");
    grid.classList.add("is-changing");
    setTimeout(()=>{grid.innerHTML=financials[button.dataset.financialYear].map((item,index)=>financialCard(item,index)).join("");grid.classList.remove("is-changing");},160);
  }));
  const principleCopy = {
    value: "Investment in efficiency and higher-value products strengthens established core businesses.",
    portfolio: "New products and business lines respond to the pace of the energy transition.",
    assets: "The portfolio is aligned for strategic fit, resilience and long-term financial performance.",
    capital: "Disciplined costs, partnerships and a balanced funding structure protect returns."
  };
  document.querySelectorAll("[data-principle]").forEach(button=>button.addEventListener("click",()=>{
    const open=button.classList.toggle("is-open");
    document.querySelectorAll("[data-principle]").forEach(item=>{if(item!==button){item.classList.remove("is-open");item.querySelector("em")?.remove();}});
    button.querySelector("em")?.remove();
    if(open)button.insertAdjacentHTML("beforeend",`<em>${principleCopy[button.dataset.principle]}</em>`);
  }));
  const form=document.getElementById("company-contact");
  form.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(form);form.querySelector(".co-form-status").textContent=`Thank you, ${data.get("name")}. Your message is ready for review.`;form.reset();});
  const reveals=[...document.querySelectorAll(".reveal")];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.1});
  reveals.forEach(item=>observer.observe(item));
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll(".co-jump a").forEach(link=>link.classList.toggle("is-active",link.hash===`#${entry.target.id}`));}}),{rootMargin:"-25% 0px -65%",threshold:0});
  document.querySelectorAll("main section[id]").forEach(section=>sectionObserver.observe(section));
})();

document.body.classList.add("strategy-page");

const strategyMain = document.querySelector("#main-content");
const strategyPdf = "assets/documents/ORLEN-Group-Strategy-2035.pdf";
const strategyPress = "#";

strategyMain.innerHTML = `
  <section class="strategy-hero" aria-labelledby="strategy-hero-title">
    <video autoplay muted loop playsinline poster="assets/images/strategy/strategy-hero.jpg" aria-hidden="true">
      <source src="assets/media/strategy-hero.mp4" type="video/mp4">
    </video>
    <div class="strategy-hero__shade"></div>
    <div class="strategy-hero__content page-width">
      <p>About us</p>
      <h1 id="strategy-hero-title">The energy of tomorrow starts today</h1>
    </div>
  </section>

  <section class="strategy-intro page-width reveal">
    <h2>The energy of tomorrow starts today</h2>
    <div class="strategy-intro__body">
      <p>We are dedicated to ensuring secure energy supplies, underpinning the growth of CEE economies. We form part of an integrated energy system that will propel the region’s decarbonisation efforts through expansion of zero- and low-carbon energy solutions. We responsibly transform our assets and products, while delivering an integrated offering to meet the evolving needs of our customers and markets.</p>
      <p>Simultaneously, we work to reduce our carbon footprint by phasing out coal-based energy production and steadily pursuing carbon neutrality. For ORLEN, the journey towards energy of the future begins today.</p>
      <div class="strategy-downloads">
        <a href="${strategyPdf}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg><span><b>Presentation</b><small>PDF · ORLEN Group Strategy 2035</small></span></a>
        <a href="${strategyPress}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14H7V3Zm8 0v5h4M10 12h6m-6 4h6"/></svg><span><b>Press release</b><small>9 January 2025</small></span></a>
      </div>
    </div>
  </section>

  <section class="strategy-driving"><div class="page-width reveal">
    <h2>Driving force of Europe</h2>
    <p>Our energy is the driving force of change for the region. Central and Eastern Europe is experiencing dynamic growth, yet sustaining this momentum will require a careful balance between the robust demand for traditional energy sources and the accelerating shift towards decarbonisation. The answer to this challenge lies in a pragmatic energy transition – a strategy firmly embraced by the ORLEN Group.</p>
    <p>By maximising value in our traditional business areas while adopting a methodical approach to decarbonising our assets and scaling renewable energy solutions, ORLEN is positioned to spearhead this transition.</p>
  </div></section>

  <section class="strategy-ecosystem page-width reveal">
    <div class="strategy-ecosystem__copy">
      <h2>ORLEN ecosystem</h2>
      <p>We are building an integrated, cohesive and digital organisation in which each business line complements the others, enabling us to deliver products and services aligned with customer expectations. The transformation of our traditional operations will fuel the ORLEN Group’s expansion into new growth areas, establishing a diversified business model more resilient to market volatility.</p>
      <p>Our commitment to be pursued across this ecosystem is to reduce CO<sub>2</sub> emissions through a number of measures, such as developing expertise in sustainable raw materials, hydrogen, biofuels, and small-scale nuclear generation (SMRs). By 2030 we will have fully phased out coal-based energy production, and by 2050 we aim for net zero carbon.</p>
    </div>
    <div class="strategy-ecosystem__video">
      <video controls autoplay muted loop playsinline preload="metadata">
        <source src="assets/media/strategy-ecosystem.mp4" type="video/mp4">
      </video>
    </div>
  </section>

  <section class="strategy-areas page-width">
    <div class="strategy-areas__intro reveal"><h2>Four strong areas of activity</h2><p>In response to key market trends, we have outlined the main directions and objectives to transform the ORLEN Group, focusing on four key segments:</p></div>
    <article class="strategy-area reveal"><h3>Upstream &amp; Supply</h3><div class="strategy-area__grid"><div class="strategy-area__copy"><p>Natural gas will play a pivotal role as a transitional fuel in the region’s energy transition – it will be requisite for ensuring system stability as the share of renewable energy in the generation mix grows. To support this transition, we will deliver to the market up to 27 billion cubic metres (bcm) of natural gas annually from diversified sources, while building new carbon storage capabilities.</p><p>Key strategic objectives for the segment by 2035 are to step up natural gas production from 9.1 to 12 bcm per year, maintain a flexible gas contract portfolio, and increase contracted gas volumes from 5 to 15 bcm per year. Another objective is to establish capabilities to capture, transport and store 4 million tonnes of CO<sub>2</sub>.</p><p>In addition to ensuring reliable energy supplies for the region, the Upstream &amp; Supply segment will also generate funding to drive our transformation projects through 2030.</p></div><div class="strategy-area__metric"><strong>27 bcm</strong><span>of natural gas delivered to the market</span></div></div></article>
    <article class="strategy-area reveal"><h3>Downstream</h3><div class="strategy-area__grid strategy-area__grid--metric-first"><div class="strategy-area__metric"><strong>Over 25%</strong><span>share of renewable energy in ORLEN fuels</span></div><div class="strategy-area__copy"><p>Addressing the growing need for decarbonisation and accelerating electrification of transport, we will remain steadfast in expanding the share of renewable energy in that sector. We will optimise our petrochemical product and feedstock portfolio, increasing the use of renewable and circular economy-based inputs.</p><p>Key strategic objectives for the segment by 2035 are to increase the share of renewable energy in the ORLEN fuel portfolio to more than 25%, and use approximately 210,000 tonnes of renewable hydrogen annually in refinery operations. We will also look to boost the share of petrochemical products derived from renewable and circular feedstocks and the share of polymers and other derivatives in total sales by 9pp and 7pp, respectively.</p><p>Steps taken to advance this objective will include expansion of the recycling capacity from 40,000 to 250,000 tonnes annually. The strategic transformation of the Downstream segment will sustain its long-term profitability.</p></div></div></article>
    <article class="strategy-area reveal"><h3>Energy</h3><div class="strategy-area__grid"><div class="strategy-area__copy"><p>To meet the rising electricity demand, we will invest in renewable energy sources, energy storage systems, small modular reactors (SMRs), and gas-fired units. The transition pursued by ORLEN is set to enhance the competitiveness of Polish economy. Key strategic objectives for the segment by 2035 are to increase installed renewable energy capacity to 12.8 GW with a focus on wind and solar power, and to expand energy storage capacity to 1.4 GW.</p><p>We will expand gas-fired power and combined heat and power (CCGT) capacities from 1.8 GW to 4.3 GW. We also plan to market and deploy the Small Modular Reactor technology with a total installed capacity of 0.6 GW by 2035.</p><p>In addition, we will invest over PLN 40 billion in electricity distribution networks and PLN 20 billion in gas distribution networks. Driven by low- and zero-carbon sources, the Energy segment will help us decarbonise production and keep expanding our range of sustainable products.</p></div><div class="strategy-area__metric strategy-area__metric--double"><strong>12.8 GW</strong><strong>0.6 GW</strong><span>of offshore and onshore renewable capacity and SMRs</span></div></div></article>
    <article class="strategy-area reveal"><h3>Consumers &amp; Products</h3><div class="strategy-area__grid strategy-area__grid--metric-first"><div class="strategy-area__metric"><strong>10 million</strong><span>of loyal VITAY users</span></div><div class="strategy-area__copy"><p>Evolving consumer preferences are prompting us to accelerate the integration and digitalisation of our services for the millions of customers we serve. By fully leveraging the VITAY platform, we aim to create a single point of contact for all user interactions. In addition, we will expand the availability of ultra-fast charging infrastructure to support Poland’s growing electric mobility market.</p><p>Key strategic objectives for the segment by 2035 are to increase ORLEN’s share in the domestic EV charging market to 33% and expand the country-wide network of ultra-fast DC chargers through the addition of 5,800 new points. Looking ahead to 2035, we expect to double the number of active VITAY users to 10 million and complete the integration of retail fuel and energy sales into a single entity.</p><p>With the integrated Consumers &amp; Products segment, we will be able to provide a comprehensive multi-utility service, accessible via the VITAY platform.</p></div></div></article>
  </section>

  <section class="strategy-finance">
    <div class="page-width">
      <article class="strategy-finance__section reveal"><h2>Stable growth and attractive dividends</h2><p>Our ambition is to achieve stable EBITDA growth at an average annual rate of 5.5% over the time horizon covered by the Strategy. By 2035, we target consolidated EBITDA of about PLN 53–58 billion, with the cumulative result for 2025–2035 reaching PLN 500–550 billion.</p><div class="strategy-chart" data-chart="ebitda"><div class="strategy-chart__head"><h3>EBITDA</h3><span>B PLN</span></div><div class="strategy-chart__plot" role="img" aria-label="ORLEN EBITDA stacked bar chart"></div><div class="strategy-chart__legend"></div></div><small>Indicative data, detailed data can be found in the presentation</small><p>We remain committed to sharing profits with our shareholders on an annual basis. The guaranteed dividend for 2025 will be raised from PLN 4.30 to PLN 4.50 per share, with an additional PLN 0.15 increase per share in each subsequent year. Additionally, the Management Board may recommend a higher dividend – up to 25% of operational cash flow for a given year, net of financing costs.</p></article>
      <article class="strategy-finance__section reveal"><h2>Responsible investment</h2><p>To deliver on our 2035 Strategy, we will make appropriate investment choices, adhering to a disciplined approach in expenditure control. Our cumulative CAPEX in 2025–2035 is projected to range from PLN 350 to 380 billion. Out of this total, three-fourths (PLN 270–290 billion) are allocated on a non-committed basis, affording us flexibility in making investment decisions based on actual needs.</p><div class="strategy-chart" data-chart="capex"><div class="strategy-chart__head"><h3>CAPEX &amp; M&amp;A</h3><span>B PLN</span></div><div class="strategy-chart__plot" role="img" aria-label="ORLEN CAPEX and M&A stacked bar chart"></div><div class="strategy-chart__legend"></div></div><small>Indicative data, detailed data can be found in the presentation</small><p>Our focus will be on investments that meet the required return thresholds, depending on the nature of a particular project and associated financing costs. Furthermore, we are open to forming partnerships with leading market players in various sectors, leveraging shared expertise and organisational support to execute the most ambitious projects.</p></article>
    </div>
  </section>

  <section class="strategy-see page-width"><h2>See also:</h2><div class="strategy-see__grid">
    <a class="strategy-see__card reveal" href="#" data-local-only="true" target="_blank" rel="noreferrer"><img src="assets/images/strategy/strategy-2030.jpg" alt="Strategy 2030"><div><p>About us</p><h3>Strategy 2030</h3><span>More →</span></div></a>
    <a class="strategy-see__card reveal" href="#" data-local-only="true" target="_blank" rel="noreferrer"><img src="assets/images/strategy/strategy-before-update.jpg" alt="ORLEN 2030 strategy before update"><div><p>About us</p><h3>ORLEN2030 strategy before update</h3><span>More →</span></div></a>
  </div></section>`;

const chartData = {
  ebitda: {
    years: ["2024", "2027", "2030", "2035"],
    values: [[18,7,7,3,2],[22,7,14,5,2],[13,11,19,6,2],[19,12,23,7,3]]
  },
  capex: {
    years: ["2024", "2027", "2030", "2035"],
    values: [[12,12,7,2,1],[12,16,14,2,1],[6,5,13,2,0],[4,3,8,2,0]]
  }
};
const chartSeries = ["Upstream & Supply", "Downstream", "Energy", "Consumers & Products", "Corporate functions"];
const chartColors = ["#d81e04", "#f06445", "#f2a98f", "#6f747a", "#c8cacc"];

document.querySelectorAll(".strategy-chart").forEach((chart) => {
  const data = chartData[chart.dataset.chart];
  const maxTotal = Math.max(...data.values.map(row => row.reduce((sum, value) => sum + value, 0)));
  const plot = chart.querySelector(".strategy-chart__plot");
  plot.innerHTML = data.values.map((row, yearIndex) => {
    const total = row.reduce((sum, value) => sum + value, 0);
    const segments = row.map((value, seriesIndex) => `<button class="strategy-chart__segment" style="height:${(value / maxTotal) * 100}%;background:${chartColors[seriesIndex]}" data-series="${seriesIndex}" data-value="${value}" aria-label="${chartSeries[seriesIndex]}: ${value} billion PLN"><span>${value || ""}</span></button>`).join("");
    return `<div class="strategy-chart__bar" style="--bar-height:${(total / maxTotal) * 100}%"><strong>${total}</strong><div class="strategy-chart__stack">${segments}</div><span>${data.years[yearIndex]}</span></div>`;
  }).join("");
  const legend = chart.querySelector(".strategy-chart__legend");
  legend.innerHTML = chartSeries.map((name, index) => `<button type="button" data-series="${index}"><i style="background:${chartColors[index]}"></i>${name}</button>`).join("");
  legend.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    button.classList.toggle("is-muted");
    chart.querySelectorAll(`.strategy-chart__segment[data-series="${button.dataset.series}"]`).forEach(segment => segment.classList.toggle("is-muted"));
  }));
});

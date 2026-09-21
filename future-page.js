(() => {
  const main = document.querySelector("main");
  if (!main) return;
  document.title = "ORLEN Future | CEE Energy Outlook";

  main.innerHTML = `
    <section class="future-hero" id="top">
      <img src="assets/images/cee-outlook.jpg" alt="Central and Eastern Europe seen from space">
      <div class="future-hero__shade"></div>
      <div class="future-hero__content page-width"><p class="future-kicker">Future at ORLEN</p><h1>ORLEN Future</h1><p>A comprehensive source of insight into Central and Eastern Europe’s energy transition.</p></div>
    </section>
    <section class="future-intro page-width">
      <div><p class="future-kicker">CEE Energy Outlook</p></div>
      <div><h2>Security, affordability and a sustainable transition</h2><p>The shift towards sustainable energy is both a major challenge and an opportunity to create durable new paths for prosperity across Central and Eastern Europe.</p><p>The region needs an approach that protects security of supply, keeps energy accessible and steadily expands zero- and low-carbon solutions. ORLEN Future brings together analysis of the technologies, investments and partnerships shaping that journey.</p></div>
    </section>
    <section class="future-reports">
      <div class="page-width">
        <div class="future-section-title"><p class="future-kicker">Reports and events</p><h2>Explore the energy transition</h2></div>
        <div class="future-report-grid">
          <article class="future-report"><img src="assets/images/strategy-2035.png" alt="Energy infrastructure and ORLEN Strategy 2035"><div class="future-report__copy"><p>Conference</p><h3>Powering Europe’s Future</h3><button type="button" data-future-detail="europe">See more <span>→</span></button></div></article>
          <article class="future-report"><img src="assets/images/baltic-power.jpg" alt="Offshore wind turbines in the Baltic Sea"><div class="future-report__copy"><p>Special report</p><h3>Baltic Cooperation</h3><button type="button" data-future-detail="baltic">See more <span>→</span></button></div></article>
          <article class="future-report"><img src="assets/images/cee-outlook.jpg" alt="CEE region viewed from space"><div class="future-report__copy"><p>Special report</p><h3>CEE Energy Outlook</h3><button type="button" data-future-detail="outlook">See more <span>→</span></button></div></article>
        </div>
        <article class="future-detail" id="europe"><h3>Powering Europe’s Future</h3><div><p>Europe’s energy system must combine decarbonisation with industrial competitiveness and dependable supply. The conference theme examines how infrastructure, regional cooperation and pragmatic investment can keep all three goals in balance.</p><p>Key areas include renewable generation, flexible gas capacity, modern electricity networks, energy storage and solutions that help customers manage demand.</p></div></article>
        <article class="future-detail" id="baltic"><h3>Baltic Cooperation</h3><div><p>The Baltic Sea can become a major engine of the regional transition. Offshore wind, ports, interconnectors and coordinated supply chains can strengthen energy security while accelerating low-carbon growth.</p><p>Baltic Power demonstrates how international partnership and Polish industrial participation can convert this potential into operating infrastructure.</p></div></article>
        <article class="future-detail" id="outlook"><h3>CEE Energy Outlook</h3><div><p>Central and Eastern European countries begin the transition from different energy mixes, infrastructure conditions and levels of economic development. Durable policy must account for those differences while building shared regional resilience.</p><p>The outlook focuses on affordability, security, network modernisation, renewable generation, sustainable mobility, hydrogen, biofuels and the responsible transformation of existing assets.</p></div></article>
      </div>
    </section>
    <section class="future-pillars page-width">
      <p class="future-kicker">Transition projects</p><h2>Technologies shaping tomorrow</h2>
      <div class="future-pillar-grid">
        <article class="future-pillar"><span>01</span><h3>Renewable energy</h3><p>Offshore wind, onshore wind and solar generation expand the supply of zero-emission electricity.</p></article>
        <article class="future-pillar"><span>02</span><h3>Modern networks</h3><p>Stronger grids, storage and digital control connect new generation and improve resilience.</p></article>
        <article class="future-pillar"><span>03</span><h3>Sustainable mobility</h3><p>Charging, alternative fuels and connected services reduce the impact of transport.</p></article>
        <article class="future-pillar"><span>04</span><h3>Hydrogen</h3><p>Low-carbon hydrogen supports industrial transformation and new mobility applications.</p></article>
        <article class="future-pillar"><span>05</span><h3>Biofuels and biogas</h3><p>Renewable molecules complement electrification in sectors that are harder to decarbonise.</p></article>
        <article class="future-pillar"><span>06</span><h3>Small modular reactors</h3><p>Stable low-carbon generation may complement renewables and strengthen system security.</p></article>
        <article class="future-pillar"><span>07</span><h3>Circular economy</h3><p>Resources stay in productive use longer, lowering waste and pressure on raw materials.</p></article>
        <article class="future-pillar"><span>08</span><h3>Digital transformation</h3><p>Data and automation improve efficiency, reliability and the customer experience.</p></article>
      </div>
    </section>
    <section class="future-cta"><div class="page-width"><h2>See how ORLEN is turning regional insight into real projects.</h2><div class="future-cta__links"><a href="baltic-power.html">Explore Baltic Power</a><a href="strategy-2035.html">Strategy 2035</a></div></div></section>`;

  const details = [...main.querySelectorAll(".future-detail")];
  main.querySelectorAll("[data-future-detail]").forEach((button) => button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.futureDetail);
    const willOpen = !target.classList.contains("is-open");
    details.forEach((detail) => detail.classList.remove("is-open"));
    if (willOpen) {
      target.classList.add("is-open");
      target.scrollIntoView({behavior:"smooth", block:"center"});
    }
  }));
})();

(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Baltic Power | ORLEN";

  main.innerHTML = `
    <section class="bp-hero">
      <div class="bp-hero__content">
        <p class="bp-kicker">Baltic Power</p>
        <h1>The largest green energy project in Central Europe</h1>
        <p>Offshore wind energy built in the Baltic Sea to power Poland's transition.</p>
      </div>
    </section>

    <section class="bp-section">
      <div class="bp-container bp-intro">
        <div>
          <p class="bp-eyebrow">About the project</p>
          <h2 class="bp-heading">Clean energy from the Baltic Sea</h2>
        </div>
        <div class="bp-intro__copy">
          <p>Baltic Power is a joint project by ORLEN and Northland Power. It is being developed approximately 23 kilometres north of the Polish coast, near Choczewo and Łeba, across an area of about 130 square kilometres.</p>
          <p>The wind farm combines offshore turbines, offshore substations, export cables and new onshore infrastructure. Once operational, it is planned to supply electricity equivalent to the needs of more than 1.5 million households.</p>
        </div>
      </div>
    </section>

    <section class="bp-section bp-stats" aria-label="Baltic Power facts">
      <div class="bp-container bp-stats__grid">
        <div class="bp-stat"><strong>1,140 MW</strong><span>planned generating capacity</span></div>
        <div class="bp-stat"><strong>76</strong><span>offshore wind turbines</span></div>
        <div class="bp-stat"><strong>15 MW</strong><span>capacity of each turbine</span></div>
        <div class="bp-stat"><strong>1.5m+</strong><span>households supplied with clean energy</span></div>
      </div>
    </section>

    <section class="bp-story">
      <div class="bp-story__image" role="img" aria-label="Baltic Power wind farm construction in the Baltic Sea"></div>
      <div class="bp-story__copy">
        <p class="bp-eyebrow">A new scale of offshore wind</p>
        <h2 class="bp-heading">Power made at sea, delivered on land</h2>
        <p>Each turbine has a capacity of 15 MW and stands more than 200 metres high. Electricity generated offshore is collected by substations and carried to the coast through undersea cables before joining Poland's power system.</p>
        <p>Offshore installation work began in 2025, with full commissioning planned for 2026.</p>
      </div>
    </section>

    <section class="bp-section bp-phases">
      <div class="bp-container">
        <p class="bp-eyebrow">How it works</p>
        <h2 class="bp-heading">One integrated energy system</h2>
        <div class="bp-phases__grid">
          <article class="bp-phase"><span class="bp-phase__number">01</span><h3>Wind turbines</h3><p>Large offshore turbines convert strong, steady Baltic winds into electricity.</p></article>
          <article class="bp-phase"><span class="bp-phase__number">02</span><h3>Offshore substations</h3><p>Power from the turbines is collected and prepared for transmission to shore.</p></article>
          <article class="bp-phase"><span class="bp-phase__number">03</span><h3>Subsea cables</h3><p>Export cables carry electricity below the seabed from the wind farm to the coast.</p></article>
          <article class="bp-phase"><span class="bp-phase__number">04</span><h3>Onshore connection</h3><p>New infrastructure delivers the renewable electricity into the national grid.</p></article>
        </div>
      </div>
    </section>

    <section class="bp-section bp-timeline">
      <div class="bp-container">
        <p class="bp-eyebrow">Project progress</p>
        <h2 class="bp-heading">From construction to clean electricity</h2>
        <div class="bp-timeline__items">
          <div class="bp-milestone"><strong>2024</strong><p>Onshore infrastructure and key components move into the construction phase.</p></div>
          <div class="bp-milestone"><strong>2025</strong><p>Offshore installation starts in the Baltic Sea and the first power reaches the Polish grid.</p></div>
          <div class="bp-milestone"><strong>2026</strong><p>Full commissioning is planned, creating a new source of low-emission electricity for Poland.</p></div>
        </div>
      </div>
    </section>

    <section class="bp-section bp-calculator" id="power-calculator">
      <div class="bp-container bp-calculator__layout">
        <div class="bp-calculator__copy">
          <p class="bp-eyebrow">Power calculator</p>
          <h2 class="bp-heading">See what Baltic Power's scale means</h2>
          <p>Choose a number of households to compare it with the wind farm's planned annual household-equivalent capacity.</p>
        </div>
        <div class="bp-calculator__panel">
          <label for="bp-households">Number of households</label>
          <div class="bp-input-row">
            <input class="bp-range" id="bp-households" type="range" min="1000" max="1500000" step="1000" value="100000">
            <input class="bp-number" id="bp-households-number" type="number" min="1000" max="1500000" step="1000" value="100000" aria-label="Number of households">
          </div>
          <div class="bp-progress" aria-hidden="true"><span id="bp-progress-bar"></span></div>
          <div class="bp-results" aria-live="polite">
            <div class="bp-result"><strong id="bp-share">6.7%</strong><span>of Baltic Power's household-equivalent capacity</span></div>
            <div class="bp-result"><strong id="bp-turbines">6</strong><span>turbines of equivalent proportional capacity</span></div>
          </div>
          <p class="bp-note">Illustrative comparison based on the project's stated capacity to supply electricity equivalent to more than 1.5 million households. Actual output varies with operating conditions.</p>
        </div>
      </div>
    </section>

    <section class="bp-section bp-cta">
      <div class="bp-container bp-cta__inner">
        <h2>Discover how ORLEN is shaping the energy system of tomorrow.</h2>
        <div class="bp-cta__links">
          <a class="bp-link-button" href="cee-energy-outlook.html">ORLEN Future</a>
          <a class="bp-link-button" href="strategy-2035.html">Strategy 2035</a>
        </div>
      </div>
    </section>`;

  const slider = document.getElementById("bp-households");
  const number = document.getElementById("bp-households-number");
  const share = document.getElementById("bp-share");
  const turbines = document.getElementById("bp-turbines");
  const progress = document.getElementById("bp-progress-bar");
  const maximum = 1500000;

  function clamp(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return 1000;
    return Math.min(maximum, Math.max(1000, Math.round(parsed / 1000) * 1000));
  }

  function update(value) {
    const households = clamp(value);
    slider.value = households;
    number.value = households;
    const percentage = households / maximum * 100;
    share.textContent = `${percentage.toFixed(percentage < 10 ? 1 : 0)}%`;
    turbines.textContent = Math.min(76, Math.max(1, Math.ceil(households / maximum * 76))).toLocaleString("en-US");
    progress.style.width = `${percentage}%`;
  }

  slider.addEventListener("input", () => update(slider.value));
  number.addEventListener("input", () => update(number.value));
  number.addEventListener("blur", () => update(number.value));
  update(slider.value);

  function scrollToLocalSection() {
    if (window.location.hash !== "#power-calculator") return;
    document.getElementById("power-calculator")?.scrollIntoView({ block: "start" });
  }

  window.addEventListener("hashchange", scrollToLocalSection);
  window.addEventListener("load", () => {
    scrollToLocalSection();
    window.setTimeout(scrollToLocalSection, 150);
    window.setTimeout(scrollToLocalSection, 500);
  }, { once: true });
  scrollToLocalSection();
  window.requestAnimationFrame(scrollToLocalSection);
})();
(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "E-mobility | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "retail-offer.html");
  });

  const chargingSteps = [
    { title: "Open the app and find a charger", text: "Open ORLEN VITAY, choose ORLEN Charge and locate a suitable available charging point. You can also use our local EV-charger map before setting off." },
    { title: "Add your payment card", text: "Before your first session, open the payment area in the app and add a valid card. Your ORLEN ID keeps charging and payment details connected to one account." },
    { title: "Connect the charging cable", text: "Park safely, select the cable that matches your vehicle and connect it firmly to the car's charging socket." },
    { title: "Choose the connector and start", text: "Confirm the charger and connector shown in the app, then select Start charging. Check that the vehicle and charger both indicate an active session." },
    { title: "Monitor the charging session", text: "Follow the session in ORLEN VITAY. The app can show status and charging information while your vehicle is connected." },
    { title: "End charging and review the cost", text: "Select End charging in the app first. Wait for the connector to unlock, disconnect safely and review the completed session summary." },
    { title: "Move the car from the charging bay", text: "Once charging is complete, free the dedicated space promptly so the next electric-vehicle driver can use the charger." }
  ];
  const stepButtons = chargingSteps.map((step, index) => `<button class="emobility-step-button${index === 0 ? " is-active" : ""}" type="button" data-charge-step="${index}" aria-pressed="${index === 0}"><span>${String(index + 1).padStart(2, "0")}</span><span>${step.title}</span><span aria-hidden="true">+</span></button>`).join("");

  main.outerHTML = `
    <main id="main-content">
      <section class="emobility-hero">
        <div class="emobility-hero__content page-width">
          <p class="emobility-kicker">E-mobility</p>
          <h1>Energy for every journey. ORLEN Charge</h1>
          <p>Charge your electric car quickly and conveniently with a modern network designed for daily travel and longer routes.</p>
          <div class="emobility-hero__actions">
            <a class="emobility-button" href="fuel-stations.html#electric-car-chargers"><span>Find an EV-charger</span><span aria-hidden="true">→</span></a>
            <a class="emobility-button emobility-button--outline" href="#charging-guide"><span>How charging works</span><span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <nav class="emobility-subnav" aria-label="E-mobility page sections">
        <div class="page-width">
          <a href="#network">Network</a>
          <a href="#chargers">Chargers</a>
          <a href="#charging-guide">Charging guide</a>
          <a href="#app">ORLEN VITAY app</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section class="emobility-section" id="network">
        <div class="page-width">
          <div class="emobility-intro">
            <div>
              <p class="emobility-kicker">ORLEN Charge</p>
              <h2 class="emobility-heading">Charge conveniently wherever the road takes you</h2>
            </div>
            <div class="emobility-intro__copy">
              <p>ORLEN is developing public charging infrastructure across Poland for drivers travelling through cities, along main roads and between regions.</p>
              <p>The network combines AC and DC chargers with multi-position hubs and intelligent power sharing. At selected new locations, charging power reaches up to 600 kW.</p>
            </div>
          </div>
          <div class="emobility-stats">
            <div class="emobility-stat"><strong>1,300+</strong><span>charging points across Poland</span></div>
            <div class="emobility-stat"><strong>600 kW</strong><span>maximum power at selected new locations</span></div>
            <div class="emobility-stat"><strong>24/7</strong><span>customer helpline and charging support</span></div>
          </div>
        </div>
      </section>

      <section class="emobility-section emobility-tools">
        <div class="page-width">
          <p class="emobility-kicker">Charging information</p>
          <h2 class="emobility-heading">Everything you need for an electric journey</h2>
          <div class="emobility-card-grid">
            <article class="emobility-card"><span class="emobility-card__icon">⌖</span><h3>Charging stations</h3><p>Find charging locations and check which services are available nearby.</p><a href="fuel-stations.html#electric-car-chargers">Open charger map →</a></article>
            <article class="emobility-card"><span class="emobility-card__icon">▣</span><h3>ORLEN VITAY app</h3><p>Find points, start sessions and monitor charging through one connected account.</p><a href="#app">Explore app features →</a></article>
            <article class="emobility-card"><span class="emobility-card__icon">V</span><h3>VITAY points</h3><p>Connect charging with the wider VITAY ecosystem and your everyday benefits.</p><a href="#app">See the benefits →</a></article>
            <article class="emobility-card"><span class="emobility-card__icon">i</span><h3>Charging guide</h3><p>Follow four simple steps from locating a charger to safely ending a session.</p><a href="#charging-guide">View instructions →</a></article>
            <article class="emobility-card"><span class="emobility-card__icon">?</span><h3>Help and support</h3><p>Get clear technical information and round-the-clock telephone assistance.</p><a href="#faq">Read FAQs →</a></article>
          </div>
        </div>
      </section>

      <section class="emobility-chargers" id="chargers">
        <div class="emobility-chargers__image" role="img" aria-label="Electric car at an ORLEN charging point"></div>
        <div class="emobility-chargers__copy">
          <p class="emobility-kicker">Charging technology</p>
          <h2 class="emobility-heading">The right connection for your electric car</h2>
          <p>ORLEN Charge locations include direct-current rapid chargers and alternating-current points. Availability and charging speed depend on the charger, vehicle and battery conditions.</p>
          <div class="emobility-connectors">
            <div class="emobility-connector"><strong>CCS Combo</strong><span>DC rapid charging</span></div>
            <div class="emobility-connector"><strong>CHAdeMO</strong><span>DC charging</span></div>
            <div class="emobility-connector"><strong>Type 2</strong><span>AC charging</span></div>
          </div>
          <a class="emobility-button" href="fuel-stations.html#electric-car-chargers"><span>Find a charger</span><span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section class="emobility-section" id="charging-guide">
        <div class="page-width">
          <p class="emobility-kicker">Charging instructions</p>
          <h2 class="emobility-heading">Seven steps to charge and get back on the road</h2>
          <div class="emobility-steps__layout">
            <div class="emobility-step-list" role="list">${stepButtons}</div>
            <article class="emobility-step-panel" id="charge-step-panel" aria-live="polite">
              <span>Step 01</span>
              <h3>${chargingSteps[0].title}</h3>
              <p>${chargingSteps[0].text}</p>
            </article>
          </div>

          <section class="emobility-estimator" aria-labelledby="charging-estimator-title">
            <div class="emobility-estimator__intro">
              <p class="emobility-kicker">Charging time estimator</p>
              <h3 id="charging-estimator-title">Estimate the time needed for your next charge</h3>
              <p>Adjust the battery, charging-power and charge-level values. The result is an illustrative estimate because each vehicle controls its actual charging rate.</p>
            </div>
            <div class="emobility-estimator__tool">
              <div class="emobility-estimator__fields">
                <label>Battery capacity <span><output id="battery-capacity-value">60</output> kWh</span><input id="battery-capacity" type="range" min="20" max="150" step="1" value="60"></label>
                <label>Charger power <span><output id="charger-power-value">150</output> kW</span><input id="charger-power" type="range" min="11" max="600" step="1" value="150"></label>
                <label>Starting level <span><output id="start-level-value">20</output>%</span><input id="start-level" type="range" min="0" max="90" step="1" value="20"></label>
                <label>Target level <span><output id="target-level-value">80</output>%</span><input id="target-level" type="range" min="10" max="100" step="1" value="80"></label>
              </div>
              <div class="emobility-estimator__progress" id="charging-progress" aria-hidden="true"><span></span></div>
              <div class="emobility-estimator__results" aria-live="polite">
                <div><strong id="charging-time-result">18 min</strong><span>estimated charging time</span></div>
                <div><strong id="charging-energy-result">36 kWh</strong><span>energy added to the battery</span></div>
              </div>
              <p class="emobility-estimator__note">Actual time can be longer and depends on the vehicle's maximum charging rate, battery temperature, state of charge, power sharing and the charger's available output.</p>
            </div>
          </section>
         </div>
       </section>
 
       <section class="emobility-section emobility-app" id="app">
        <div class="page-width emobility-app__layout">
          <div class="emobility-app__image" role="img" aria-label="ORLEN Charge mobile application"></div>
          <div class="emobility-app__copy">
            <p class="emobility-kicker">ORLEN VITAY</p>
            <h2 class="emobility-heading">Your charging session in one app</h2>
            <p>ORLEN Charge is available through the ORLEN VITAY app. An ORLEN ID connects charging, payments and other digital ORLEN services through one account.</p>
            <ul class="emobility-benefits">
              <li>Find the nearest charging point</li>
              <li>Check connector availability</li>
              <li>Start and stop charging</li>
              <li>Monitor session parameters</li>
              <li>Review charging history</li>
              <li>Access invoices and payments</li>
            </ul>
            <a class="emobility-button" href="fuel-stations.html#electric-car-chargers"><span>Explore locations</span><span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="emobility-section emobility-faq" id="faq">
        <div class="page-width emobility-faq__layout">
          <div>
            <p class="emobility-kicker">Frequently asked questions</p>
            <h2 class="emobility-heading">Useful charging information</h2>
          </div>
          <div class="emobility-faq-list">
            <div class="emobility-faq-item"><button class="emobility-faq-question" type="button" aria-expanded="true"><span>What can I do with ORLEN Charge?</span><span aria-hidden="true">+</span></button><div class="emobility-faq-answer"><div><p>You can find nearby chargers, review availability, start and stop a session, monitor progress and access previous charging information through ORLEN VITAY.</p></div></div></div>
            <div class="emobility-faq-item"><button class="emobility-faq-question" type="button" aria-expanded="false"><span>How long does charging take?</span><span aria-hidden="true">+</span></button><div class="emobility-faq-answer"><div><p>Charging time depends on battery capacity, vehicle limits, the charger’s available power, battery temperature and its current charge level.</p></div></div></div>
            <div class="emobility-faq-item"><button class="emobility-faq-question" type="button" aria-expanded="false"><span>Which connector types are available?</span><span aria-hidden="true">+</span></button><div class="emobility-faq-answer"><div><p>The network includes CCS Combo and CHAdeMO connections for DC charging and Type 2 connections for AC charging. Check each station before travelling.</p></div></div></div>
            <div class="emobility-faq-item"><button class="emobility-faq-question" type="button" aria-expanded="false"><span>Can I disconnect while charging?</span><span aria-hidden="true">+</span></button><div class="emobility-faq-answer"><div><p>End the charging session first. The vehicle normally locks the connector while a session is active to prevent accidental or unauthorised removal.</p></div></div></div>
            <div class="emobility-faq-item"><button class="emobility-faq-question" type="button" aria-expanded="false"><span>What should I do if a charger is unavailable?</span><span aria-hidden="true">+</span></button><div class="emobility-faq-answer"><div><p>Try another connector or nearby location in the charger map. For technical help, contact the ORLEN customer helpline available around the clock.</p></div></div></div>
          </div>
        </div>
      </section>

      <section class="emobility-section emobility-contact" id="contact">
        <div class="page-width emobility-contact__layout">
          <div>
            <p class="emobility-kicker">24/7 helpline</p>
            <h2 class="emobility-heading">Need assistance with a charging session?</h2>
          </div>
          <div class="emobility-contact__phones">
            <a href="tel:+447378347853">+44 7378347853</a>
            <a href="tel:+447378347853">+44 7378347853</a>
            <span>Telephone support available 24 hours a day</span>
          </div>
        </div>
      </section>
    </main>`;

  const stepPanel = document.getElementById("charge-step-panel");
  document.querySelector(".emobility-step-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-charge-step]");
    if (!button) return;
    const index = Number(button.dataset.chargeStep);
    const step = chargingSteps[index];
    document.querySelectorAll("[data-charge-step]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    stepPanel.innerHTML = `<span>Step ${String(index + 1).padStart(2, "0")}</span><h3>${step.title}</h3><p>${step.text}</p>`;
  });

  document.querySelector(".emobility-faq-list").addEventListener("click", (event) => {
    const button = event.target.closest(".emobility-faq-question");
    if (!button) return;
    const opening = button.getAttribute("aria-expanded") !== "true";
    document.querySelectorAll(".emobility-faq-question").forEach((item) => item.setAttribute("aria-expanded", "false"));
    button.setAttribute("aria-expanded", String(opening));
  });

  const estimatorInputs = ["battery-capacity", "charger-power", "start-level", "target-level"].map((id) => document.getElementById(id));

  function formatChargingTime(totalMinutes) {
    const minutes = Math.max(1, Math.round(totalMinutes));
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return `${hours} h${remainder ? ` ${remainder} min` : ""}`;
  }

  function updateChargingEstimator(changedInput) {
    const capacityInput = document.getElementById("battery-capacity");
    const powerInput = document.getElementById("charger-power");
    const startInput = document.getElementById("start-level");
    const targetInput = document.getElementById("target-level");
    let startLevel = Number(startInput.value);
    let targetLevel = Number(targetInput.value);

    if (targetLevel <= startLevel) {
      if (changedInput === startInput) targetLevel = Math.min(100, startLevel + 10);
      else startLevel = Math.max(0, targetLevel - 10);
      startInput.value = String(startLevel);
      targetInput.value = String(targetLevel);
    }

    const capacity = Number(capacityInput.value);
    const chargerPower = Number(powerInput.value);
    const energyNeeded = capacity * (targetLevel - startLevel) / 100;
    const taperFactor = targetLevel > 80 ? 1 + (targetLevel - 80) / 65 : 1;
    const estimatedMinutes = energyNeeded / Math.max(1, chargerPower * .9) * 60 * taperFactor;

    document.getElementById("battery-capacity-value").textContent = String(capacity);
    document.getElementById("charger-power-value").textContent = String(chargerPower);
    document.getElementById("start-level-value").textContent = String(startLevel);
    document.getElementById("target-level-value").textContent = String(targetLevel);
    document.getElementById("charging-time-result").textContent = formatChargingTime(estimatedMinutes);
    document.getElementById("charging-energy-result").textContent = `${energyNeeded.toFixed(energyNeeded < 10 ? 1 : 0)} kWh`;
    document.getElementById("charging-progress").style.setProperty("--charge-start", `${startLevel}%`);
    document.getElementById("charging-progress").style.setProperty("--charge-target", `${targetLevel}%`);
  }

  estimatorInputs.forEach((input) => input.addEventListener("input", () => updateChargingEstimator(input)));
  updateChargingEstimator();

  function restoreLocalSection() {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }

  window.addEventListener("load", () => {
    restoreLocalSection();
    window.setTimeout(restoreLocalSection, 250);
    window.setTimeout(restoreLocalSection, 800);
  }, { once: true });
  window.requestAnimationFrame(restoreLocalSection);

})();
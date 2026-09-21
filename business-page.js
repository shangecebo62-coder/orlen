(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "For business | ORLEN";
  document.body.classList.add("business-page");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "business-offer.html");
  });

  const productDetails = {
    petrochemicals: ["Petrochemical products", "ORLEN is a leading petrochemicals manufacturer in Central Europe. Its broad portfolio supports packaging, construction, automotive, electronics and many other industries, with products supplied to more than 60 countries."],
    energy: ["Energy", "Low-carbon and renewable generation, extensive distribution capabilities and long-standing market experience provide strong foundations for secure business contracts and specialist energy services."],
    aviation: ["Aviation fuels", "Jet A-1 and AVGAS 100 LL make it possible to supply aircraft using jet, turboprop and spark-ignition piston engines, including ad-hoc refuelling and customised deliveries."],
    remit: ["REMIT", "Information on planned and unplanned shutdowns of manufacturing units, along with planned and unplanned reductions in energy and gas consumption, is presented through ORLEN's regulatory reporting process."]
  };

  main.outerHTML = `
    <main id="main-content">
      <section class="business-hero">
        <div class="business-hero__content page-width">
          <nav class="business-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><span aria-current="page">For business</span></nav>
          <p class="business-kicker">For business</p>
          <h1>For business</h1>
          <p class="business-hero__lead">Competitive delivery terms and a wide range of products and services</p>
        </div>
      </section>

      <section class="business-intro page-width reveal">
        <p>Our offer consists of high-quality refinery products, a wide variety of advanced petrochemicals, and electrical energy produced primarily with gas assets and renewable resources. We invest consistently in modern and sustainable technologies and provide comprehensive supply-chain services for transport and logistics, agriculture, industry, construction and the service sector.</p>
      </section>

      <section class="business-products" id="products">
        <div class="page-width">
          <p class="business-kicker">Our portfolio</p>
          <h2 class="business-heading">Popular products</h2>
          <div class="business-products__grid">
            <article class="business-product-card reveal">
              <a class="business-product-card__image" href="fuels.html"><img src="assets/images/business/fuels.jpeg" alt="ORLEN refinery producing high-quality fuels"></a>
              <div class="business-product-card__copy"><h3>Fuels</h3><p>Our unleaded gasolines, diesel oils and LPG meet exacting quality and reliability requirements and satisfy or exceed European standards.</p><a class="business-link" href="fuels.html">Find out more <span aria-hidden="true">→</span></a></div>
            </article>
            <article class="business-product-card reveal">
              <div class="business-product-card__image"><img src="assets/images/business/petrochemicals.jpeg" alt="ORLEN petrochemical production facility"></div>
              <div class="business-product-card__copy"><h3>Petrochemical products</h3><p>A broad range of modern materials made by a leading Central European producer and supplied to customers in more than 60 countries.</p><button class="business-text-button" type="button" data-product="petrochemicals">Find out more <span aria-hidden="true">→</span></button></div>
            </article>
            <article class="business-product-card reveal">
              <div class="business-product-card__image"><img src="assets/images/business/energy.jpeg" alt="ORLEN energy infrastructure"></div>
              <div class="business-product-card__copy"><h3>Energy</h3><p>Low-carbon and renewable generation combined with experience in Polish and international markets supports secure business contracts.</p><button class="business-text-button" type="button" data-product="energy">Find out more <span aria-hidden="true">→</span></button></div>
            </article>
            <article class="business-product-card reveal">
              <div class="business-product-card__image"><img src="assets/images/business/aviation.jpeg" alt="Aircraft supplied with ORLEN aviation fuel"></div>
              <div class="business-product-card__copy"><h3>Aviation fuels</h3><p>Jet A-1 and AVGAS 100 LL products serve aircraft with jet, turboprop and spark-ignition piston engines.</p><button class="business-text-button" type="button" data-product="aviation">Find out more <span aria-hidden="true">→</span></button></div>
            </article>
          </div>
        </div>
      </section>

      <section class="business-fleet reveal" id="fleet">
        <div class="business-fleet__image"><img src="assets/images/business/fleet.jpeg" alt="ORLEN fleet services for companies"></div>
        <div class="business-fleet__copy"><p class="business-kicker">For business</p><h2 class="business-heading">Fleet cards and services</h2><p>We meet the needs of comprehensive and convenient fleet maintenance. Explore an offer created for small, medium and large businesses.</p><a class="business-solid-button" href="fleet-cards.html">Find out more <span aria-hidden="true">→</span></a></div>
      </section>

      <section class="business-services" id="services">
        <div class="page-width">
          <p class="business-kicker">Digital tools</p>
          <h2 class="business-heading">Services</h2>
          <div class="business-services__grid">
            <article class="business-service-card reveal"><div class="business-service-card__image"><img src="assets/images/business/e-hurt.jpeg" alt="Business customer using ORLEN services"></div><div class="business-service-card__copy"><h3>e-Hurt</h3><p>A secure application integrated with ORLEN systems for placing fuel-delivery orders.</p><button class="business-text-button" type="button" aria-expanded="false">Find out more <span aria-hidden="true">+</span></button><div class="business-service-card__detail" hidden>Customers can organise fuel orders digitally and follow an efficient wholesale purchasing process.</div></div></article>
            <article class="business-service-card reveal"><div class="business-service-card__image"><img src="assets/images/business/e-faktura.png" alt="Electronic invoicing on a laptop"></div><div class="business-service-card__copy"><h3>e-Faktura</h3><p>A fast and convenient electronic invoicing system for business customers.</p><button class="business-text-button" type="button" aria-expanded="false">Find out more <span aria-hidden="true">+</span></button><div class="business-service-card__detail" hidden>Electronic documents simplify access, organisation and day-to-day invoice handling.</div></div></article>
            <article class="business-service-card reveal"><div class="business-service-card__image"><img src="assets/images/business/e-kolej.jpeg" alt="Rail logistics supported by e-Kolej"></div><div class="business-service-card__copy"><h3>e-Kolej</h3><p>An online rail service supporting information exchange during shipment planning and execution.</p><button class="business-text-button" type="button" aria-expanded="false">Find out more <span aria-hidden="true">+</span></button><div class="business-service-card__detail" hidden>The service connects participants involved in organising and carrying out rail shipments.</div></div></article>
            <article class="business-service-card reveal"><div class="business-service-card__image"><img src="assets/images/business/self-service.jpeg" alt="ORLEN self-service collection terminal"></div><div class="business-service-card__copy"><h3>Self-service</h3><p>A system for scheduling and completing self-service product collections at terminals.</p><button class="business-text-button" type="button" aria-expanded="false">Find out more <span aria-hidden="true">+</span></button><div class="business-service-card__detail" hidden>Customers schedule collections while authorised carriers use magnetic cards at supported terminals.</div></div></article>
          </div>
        </div>
      </section>

      <section class="business-statement page-width">
        <p class="business-kicker">Important information</p>
        <h2 class="business-heading">Urgent statements</h2>
        <article class="business-statement__card reveal">
          <div class="business-statement__copy"><p class="business-kicker">For business</p><h3 class="business-heading">REMIT</h3><p>Information on manufacturing-unit shutdowns and reductions in energy and gas consumption.</p><button class="business-solid-button" type="button" data-product="remit">Find out more <span aria-hidden="true">→</span></button></div>
        </article>
      </section>

      <dialog class="business-dialog" id="business-dialog" aria-labelledby="business-dialog-title"><div class="business-dialog__inner"><button class="business-dialog__close" type="button" data-dialog-close aria-label="Close details">×</button><p class="business-kicker">For business</p><h2 id="business-dialog-title"></h2><p id="business-dialog-copy"></p><a class="business-solid-button" href="#products" data-dialog-close-link>Back to products <span aria-hidden="true">↑</span></a></div></dialog>
    </main>`;

  document.querySelectorAll(".business-service-card .business-text-button").forEach((button) => {
    button.addEventListener("click", () => {
      const detail = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      detail.hidden = expanded;
      button.querySelector("span").textContent = expanded ? "+" : "−";
    });
  });

  const dialog = document.getElementById("business-dialog");
  const title = document.getElementById("business-dialog-title");
  const copy = document.getElementById("business-dialog-copy");
  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const content = productDetails[button.dataset.product];
      title.textContent = content[0];
      copy.textContent = content[1];
      dialog.showModal();
    });
  });
  document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
  document.querySelector("[data-dialog-close-link]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
})();

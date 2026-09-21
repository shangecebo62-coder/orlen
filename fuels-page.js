(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Fuels | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "business-offer.html");
  });

  const information = {
    remit: ["REMIT", "Information concerning planned and unplanned shutdowns of manufacturing units and reductions in energy and gas consumption."],
    wholesale: ["Fuel wholesale prices", "A dedicated business information area for customers purchasing fuels through wholesale channels."],
    company: ["ORLEN Paliwa", "ORLEN Paliwa supplies fuel products and related solutions to business customers. Dedicated company contact information can be connected locally when it is provided."]
  };

  main.outerHTML = `
    <main id="main-content">
      <section class="fuels-hero">
        <div class="fuels-hero__content page-width">
          <nav class="fuels-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><a href="business-offer.html">For business</a><span aria-hidden="true">›</span><span aria-current="page">Fuels</span></nav>
          <p class="fuels-kicker">For business</p><h1>Fuels</h1>
        </div>
      </section>

      <section class="fuels-intro page-width reveal">
        <p>Customers can rest assured that fuels supplied by ORLEN meet exacting standards in quality and reliability. Our unleaded gasolines and diesel oils fully satisfy and often exceed European standards. The chemical components of gasolines, diesel oils and LPG are selected through advanced technological research and long-term testing.</p>
      </section>

      <section class="fuels-products" id="fuel-products">
        <div class="page-width"><p class="fuels-kicker">Our portfolio</p><h2 class="fuels-heading">Fuels</h2>
          <div class="fuels-products__grid">
            <article class="fuel-card reveal"><div class="fuel-card__image"><img src="assets/images/fuels/petrol.jpeg" alt="Petrol production and distribution"></div><div class="fuel-card__copy"><p class="fuels-kicker">Fuels</p><h3>Petrol</h3><p>Suitable for spark-ignition engines, including vehicles using LPG systems and hybrid drive technologies.</p><button class="fuel-card__toggle" type="button" aria-expanded="false">More <span aria-hidden="true">+</span></button><div class="fuel-card__detail" hidden>Our offer includes advanced petrol grades such as EuroSuper 95 and Super Plus 98, produced for reliable everyday engine performance.</div></div></article>
            <article class="fuel-card reveal"><div class="fuel-card__image"><img src="assets/images/fuels/diesel.jpeg" alt="ORLEN diesel fuel production facility"></div><div class="fuel-card__copy"><p class="fuels-kicker">Fuels</p><h3>Diesel fuels</h3><p>Designed for diesel engines regardless of vehicle design solutions or mileage.</p><button class="fuel-card__toggle" type="button" aria-expanded="false">More <span aria-hidden="true">+</span></button><div class="fuel-card__detail" hidden>The ORLEN portfolio includes Ekodiesel ULTRA and Ekodiesel ULTRA Class 2 for demanding operating requirements.</div></div></article>
            <article class="fuel-card reveal"><div class="fuel-card__image"><img src="assets/images/fuels/lpg.jpeg" alt="ORLEN LPG fuel infrastructure"></div><div class="fuel-card__copy"><p class="fuels-kicker">Fuels</p><h3>LPG</h3><p>A cost-conscious fuel option that helps maintain engine performance and component life.</p><button class="fuel-card__toggle" type="button" aria-expanded="false">More <span aria-hidden="true">+</span></button><div class="fuel-card__detail" hidden>Quality LPG is suitable for private motorists, taxi drivers and customers focused on lowering vehicle operating costs.</div></div></article>
            <article class="fuel-card reveal"><div class="fuel-card__image"><img src="assets/images/fuels/biofuels.jpeg" alt="ORLEN biofuel and biocomponent production"></div><div class="fuel-card__copy"><p class="fuels-kicker">Fuels</p><h3>Biofuels</h3><p>Biocomponents that can be blended with traditional diesel oil or used as stand-alone fuels.</p><button class="fuel-card__toggle" type="button" aria-expanded="false">More <span aria-hidden="true">+</span></button><div class="fuel-card__detail" hidden>ORLEN Południe develops biofuel solutions that support lower-emission transport and a more diversified fuel portfolio.</div></div></article>
          </div>
        </div>
      </section>

      <section class="fuels-information">
        <div class="page-width"><p class="fuels-kicker">For business</p><h2 class="fuels-heading">Additional information</h2>
          <div class="fuels-information__grid">
            <article class="fuel-info-card reveal"><div class="fuel-info-card__copy"><p class="fuels-kicker">For business</p><h3>REMIT</h3><button type="button" data-info="remit">More <span aria-hidden="true">→</span></button></div></article>
            <article class="fuel-info-card reveal"><div class="fuel-info-card__copy"><p class="fuels-kicker">For business</p><h3>Fuel wholesale prices</h3><button type="button" data-info="wholesale">More <span aria-hidden="true">→</span></button></div></article>
            <article class="fuel-info-card reveal"><div class="fuel-info-card__copy"><p class="fuels-kicker">ORLEN</p><h3>ORLEN Paliwa</h3><button type="button" data-info="company">Company information <span aria-hidden="true">→</span></button></div></article>
          </div>
        </div>
      </section>

      <section class="fuels-back"><div class="fuels-back__inner page-width"><p>Explore the complete range of products and services available to business customers.</p><a class="fuels-button" href="business-offer.html#products">Back to For business <span aria-hidden="true">→</span></a></div></section>

      <dialog class="fuels-dialog" id="fuels-dialog" aria-labelledby="fuels-dialog-title"><div class="fuels-dialog__inner"><button class="fuels-dialog__close" type="button" data-dialog-close aria-label="Close information">×</button><p class="fuels-kicker">For business</p><h2 id="fuels-dialog-title"></h2><p id="fuels-dialog-copy"></p><a class="fuels-button" href="#fuel-products" data-dialog-return>Return to fuels <span aria-hidden="true">↑</span></a></div></dialog>
    </main>`;

  document.querySelectorAll(".fuel-card__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const detail = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      detail.hidden = expanded;
      button.querySelector("span").textContent = expanded ? "+" : "−";
    });
  });

  const dialog = document.getElementById("fuels-dialog");
  const title = document.getElementById("fuels-dialog-title");
  const copy = document.getElementById("fuels-dialog-copy");
  document.querySelectorAll("[data-info]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = information[button.dataset.info];
      title.textContent = item[0];
      copy.textContent = item[1];
      dialog.showModal();
    });
  });
  document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
  document.querySelector("[data-dialog-return]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
})();

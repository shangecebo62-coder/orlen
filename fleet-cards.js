(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Fleet cards and services | ORLEN";
  document.querySelector(".site-header")?.classList.add("force-solid");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "business-offer.html");
  });

  const cards = [
    { id: "flota", sizes: "large", payment: "Postpaid", name: "FLOTA card", audience: "for large enterprises", image: "assets/images/fleet/flota.jpeg", alt: "ORLEN FLOTA card", description: "Cashless purchases of fuel, goods and services at more than 1,800 locations nationwide, with online tools and the mFLOTA mobile app.", detail: "Paperless invoicing, deferred payment dates and expense control support efficient fleet management. Optional OPEN DRIVE or DKV/ORLEN cards extend cashless purchasing beyond Poland.", benefits: ["More than 1,800 ORLEN locations in Poland", "Online account and mFLOTA app", "Deferred payments and paperless invoicing"] },
    { id: "mikro", sizes: "small", payment: "Postpaid", name: "MIKROFLOTA card", audience: "for small enterprises", image: "assets/images/fleet/mikroflota.jpeg", alt: "ORLEN MIKROFLOTA card", description: "A solution for smaller companies, accepted across ORLEN stations in Poland, Germany, Czechia and Lithuania.", detail: "Pay cashlessly with a physical card or an e-card in mFLOTA and use simplified invoicing, online expense control and selected additional services.", benefits: ["Designed for smaller companies", "Physical and mobile e-card payments", "Online expenditure control"] },
    { id: "dkv", sizes: "large", payment: "Postpaid", name: "DKV/ORLEN card", audience: "for large enterprises", image: "", alt: "", description: "International fleet support at ORLEN locations and an extensive European DKV acceptance network.", detail: "Transparent invoicing, configurable limits, toll-fee allocation and an online fleet portal simplify international operations. DKV ASSIST supports drivers during breakdowns and repairs.", benefits: ["International acceptance", "Configurable limits and toll services", "DKV ASSIST support"] },
    { id: "purchase", sizes: "all", payment: "Prepaid", name: "Purchase card", audience: "for everyone", image: "assets/images/fleet/purchase.jpeg", alt: "ORLEN Purchase card", description: "A prepaid card that can be loaded with a selected amount and used across ORLEN stations.", detail: "A practical way to reward employees or strengthen customer relationships. The available balance can be used during one or several station visits.", benefits: ["Flexible prepaid value", "Use across ORLEN stations", "Suitable for rewards and benefits"] },
    { id: "biznestank", sizes: "small medium", payment: "Discount", name: "BIZNESTANK card", audience: "for small and medium enterprises", image: "assets/images/fleet/biznestank.jpeg", alt: "ORLEN BIZNESTANK card", description: "Discounts on fuel, car washing and vacuum cleaning for small and medium-sized companies.", detail: "The card also supports ORLEN Pay discounts at the pump. Registration is simple and a physical or VITAY-compatible e-card can be used.", benefits: ["Fuel and car-care discounts", "ORLEN Pay support", "Physical card or VITAY e-card"] },
    { id: "open", sizes: "medium large", payment: "Postpaid", name: "OPEN DRIVE card", audience: "for medium and large enterprises", image: "assets/images/fleet/open-drive.jpeg", alt: "ORLEN OPEN DRIVE card", description: "Cashless fleet purchases in Poland, Germany, Czechia and Lithuania with clear country-level invoicing.", detail: "A personalised online platform shows current expenditure, supports new-card orders and blocking, and makes cross-border fleet management easier.", benefits: ["Cross-border cashless purchases", "One invoice per country", "Personalised fleet platform"] }
  ];

  const cardMarkup = cards.map((card) => `
    <article class="fleet-card${card.id === "dkv" ? " fleet-card--dkv" : ""} reveal" data-sizes="${card.sizes}" data-card-id="${card.id}">
      <div class="fleet-card__image">${card.image ? `<img src="${card.image}" alt="${card.alt}">` : ""}</div>
      <div class="fleet-card__copy"><div class="fleet-card__meta"><span>${card.payment}</span><span>${card.audience}</span></div><h3>${card.name}</h3><p>${card.description}</p><button class="fleet-card__button" type="button" data-card-open="${card.id}">Program details <span aria-hidden="true">→</span></button></div>
    </article>`).join("");

  main.outerHTML = `
    <main id="main-content">
      <section class="fleet-intro page-width">
        <nav class="fleet-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><a href="business-offer.html">For business</a><span aria-hidden="true">›</span><span aria-current="page">Fleet cards and services</span></nav>
        <p class="fleet-kicker">For business</p><h1>Fleet cards and services</h1>
        <div class="fleet-intro__copy"><p>ORLEN is a modern and dynamically developing company that treats customer care and service development as priorities. We consistently expand our portfolio of fuel cards and fleet services for companies of every size.</p><p>Our solutions are tailored to each company's needs, including its size, number and type of fleet vehicles, business profile and fuel purchasing volume.</p></div>
      </section>

      <section class="fleet-catalogue" id="fleet-cards">
        <div class="page-width"><p class="fleet-kicker">Choose your solution</p><h2 class="fleet-heading">Fleet cards</h2>
          <div class="fleet-filterbar" role="group" aria-label="Filter fleet cards by company size"><button class="fleet-filter" type="button" data-filter="all" aria-pressed="true">All cards</button><button class="fleet-filter" type="button" data-filter="small" aria-pressed="false">Small business</button><button class="fleet-filter" type="button" data-filter="medium" aria-pressed="false">Medium business</button><button class="fleet-filter" type="button" data-filter="large" aria-pressed="false">Large business</button></div>
          <div class="fleet-results"><span id="fleet-status" aria-live="polite">Showing all fleet cards</span><span id="fleet-count">${cards.length} cards</span></div>
          <div class="fleet-grid">${cardMarkup}</div>
        </div>
      </section>

      <section class="fleet-guide"><div class="fleet-guide__layout page-width"><div><p class="fleet-kicker">Simple fleet management</p><h2 class="fleet-heading">Choose, control and travel</h2></div><div class="fleet-guide__steps"><article class="fleet-guide__step"><strong>01</strong><div><h3>Choose the right programme</h3><p>Filter the offer by company size and compare payment models and everyday benefits.</p></div></article><article class="fleet-guide__step"><strong>02</strong><div><h3>Manage cards digitally</h3><p>Use the available online tools and mFLOTA services to control cards and expenditure.</p></div></article><article class="fleet-guide__step"><strong>03</strong><div><h3>Keep your fleet moving</h3><p>Pay conveniently for fuel, services and selected travel costs in Poland and abroad.</p></div></article></div></div></section>

      <dialog class="fleet-dialog" id="fleet-dialog" aria-labelledby="fleet-dialog-title"><div class="fleet-dialog__inner"><button class="fleet-dialog__close" type="button" data-dialog-close aria-label="Close card details">×</button><p class="fleet-kicker" id="fleet-dialog-meta"></p><h2 id="fleet-dialog-title"></h2><p id="fleet-dialog-copy"></p><ul id="fleet-dialog-benefits"></ul><a class="fleet-return" href="#fleet-cards" data-dialog-return>Back to fleet cards <span aria-hidden="true">↑</span></a></div></dialog>
    </main>`;

  const status = document.getElementById("fleet-status");
  const count = document.getElementById("fleet-count");
  document.querySelector(".fleet-filterbar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const filter = button.dataset.filter;
    document.querySelectorAll(".fleet-filter").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    let visible = 0;
    document.querySelectorAll(".fleet-card").forEach((card) => {
      const show = filter === "all" || card.dataset.sizes.split(" ").includes(filter) || card.dataset.sizes === "all";
      card.hidden = !show;
      if (show) visible += 1;
    });
    status.textContent = filter === "all" ? "Showing all fleet cards" : `Showing cards for ${button.textContent.toLowerCase()}`;
    count.textContent = `${visible} ${visible === 1 ? "card" : "cards"}`;
  });

  const dialog = document.getElementById("fleet-dialog");
  document.querySelectorAll("[data-card-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = cards.find((item) => item.id === button.dataset.cardOpen);
      document.getElementById("fleet-dialog-meta").textContent = `${card.payment} · ${card.audience}`;
      document.getElementById("fleet-dialog-title").textContent = card.name;
      document.getElementById("fleet-dialog-copy").textContent = card.detail;
      document.getElementById("fleet-dialog-benefits").innerHTML = card.benefits.map((benefit) => `<li>${benefit}</li>`).join("");
      dialog.showModal();
    });
  });
  document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
  document.querySelector("[data-dialog-return]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
})();

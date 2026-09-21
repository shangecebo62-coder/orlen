(function () {
  "use strict";
  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Energy transition | ORLEN";
  document.body.classList.add("transition-landing");
  document.querySelector(".site-header")?.classList.add("force-solid");
  document.querySelectorAll(".primary-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "sustainability.html"));

  const cards = [
    { title: "ORLEN Transition Plan", image: "assets/images/energy-transition/transition-plan.jpeg", alt: "ORLEN employees discussing the transition plan", href: "orlen-transition-plan.html", text: "A strategic document outlining ORLEN’s role in the global and EU energy transition towards climate neutrality." },
    { title: "Decarbonisation strategy", image: "assets/images/energy-transition/decarbonisation.jpeg", alt: "A green landscape representing ORLEN's decarbonisation strategy", href: "decarbonisation-strategy.html", text: "ORLEN was the first oil and gas company in Central Europe to declare a carbon-neutrality objective for 2050." },
    { title: "Circular economy", image: "assets/images/energy-transition/circular-economy.jpeg", alt: "Modern digital technology supporting circular-economy processes", href: "circular-economy.html", text: "Four pillars integrate circular principles into processes, products and services while creating new value chains." },
    { title: "Transition projects", image: "assets/images/energy-transition/transition-projects.jpeg", alt: "ORLEN renewable energy infrastructure", href: "transition-projects.html", text: "Explore the practical projects implemented across the ORLEN Group to move the energy transition forward." }
  ];

  main.outerHTML = `<main id="main-content">
    <section class="transition-intro page-width">
      <nav class="transition-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><a href="sustainability.html">Sustainability</a><span aria-hidden="true">›</span><span aria-current="page">Energy transition</span></nav>
      <p class="transition-kicker">Sustainability</p><h1>Energy transition</h1>
      <p class="transition-lead">Key directions and projects related to the ORLEN Group’s energy transition.</p>
    </section>
    <section class="transition-cards"><div class="page-width">
      <div class="transition-section-heading reveal"><p class="transition-kicker">Energy transition</p><h2>Our direction</h2></div>
      <div class="transition-card-grid">${cards.map((card, index) => `<article class="transition-card reveal"><a class="transition-card__image" href="${card.href}"><img src="${card.image}" alt="${card.alt}" ${index > 1 ? 'loading="lazy"' : ""}></a><div class="transition-card__copy"><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="${card.href}">${card.title}</a></h3><p>${card.text}</p><a class="transition-more" href="${card.href}">More <span aria-hidden="true">→</span></a></div></article>`).join("")}</div>
    </div></section>
    <section class="transition-target"><div class="page-width reveal"><p class="transition-kicker">A responsible pathway</p><div><strong>2050</strong><h2>Climate neutrality</h2><p>Transformation of our own operations and support for decarbonisation of the wider economy are advanced together through investment, innovation and responsible capital allocation.</p></div></div></section>
  </main>`;
})();

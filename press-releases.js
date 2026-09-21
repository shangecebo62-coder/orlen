(() => {
  const main = document.querySelector("main");
  if (!main) return;
  document.title = "Press releases | ORLEN";

  const releases = [
    {
      id:"norwegian-fields", date:"26.08.2026", iso:"2026-08-26", category:"Upstream",
      title:"ORLEN brings three new Norwegian Sea fields on stream",
      image:"assets/investors/news-skarv-fpso.jpeg",
      summary:"Production has started from Idun Nord, with Alve Nord and Ørn scheduled to follow in the Skarv production area.",
      paragraphs:[
        "ORLEN Upstream Norway and its licence partners have begun producing gas from Idun Nord. Alve Nord and Ørn are being connected during the same development programme.",
        "Together, the three fields are expected to add around 30 million barrels of oil equivalent to the ORLEN portfolio, with natural gas representing most of the resources.",
        "The new subsea installations connect to existing infrastructure around the Skarv hub, making use of established processing and transport systems while supporting secure deliveries to European customers."
      ]
    },
    {
      id:"crude-supply", date:"20.08.2026", iso:"2026-08-20", category:"Upstream",
      title:"ORLEN secures up to one-quarter of its crude oil needs",
      image:"assets/investors/news-johan-sverdrup.jpeg",
      summary:"A three-year Equinor agreement may provide more than 9 million tonnes of Johan Sverdrup crude annually.",
      paragraphs:[
        "Deliveries under the three-year contract are planned from September. At the maximum contracted volume, supplies can cover as much as one-quarter of annual crude demand across the ORLEN Group.",
        "The oil will serve refineries in Poland, Czechia and Lithuania. The agreement broadens the supply portfolio and strengthens the resilience of fuel production across the region.",
        "Johan Sverdrup is one of the largest producing fields on the Norwegian Continental Shelf and offers stable, predictable volumes suited to ORLEN refinery operations."
      ]
    },
    {
      id:"solar-mazeikiai", date:"11.08.2026", iso:"2026-08-11", category:"Energy",
      title:"ORLEN Group advances regional energy transition as solar PV farm at Mažeikiai refinery comes online",
      image:"assets/investors/news-solar-mazeikiai.jpeg",
      summary:"A 42.2 MW solar facility will supply renewable electricity to ORLEN Lietuva and improve the refinery energy mix.",
      paragraphs:[
        "The solar farm at the Mažeikiai refinery has entered operation with 42.2 MW of installed capacity. Expected annual generation is approximately 45 GWh.",
        "Electricity produced on site will lower operating costs and raise the renewable share of the refinery energy portfolio.",
        "Białystok-based Electrum delivered the project, combining Polish engineering experience with an investment that improves the energy security of the Lithuanian facility."
      ]
    },
    {
      id:"q2-results", date:"06.08.2026", iso:"2026-08-06", category:"Investor relations",
      title:"ORLEN Group reports record profits in international markets",
      image:"assets/images/results-q2-2026.jpg",
      summary:"Second-quarter revenue reached PLN 76.5 billion, with PLN 13.9 billion in LIFO-based EBITDA.",
      paragraphs:[
        "ORLEN generated PLN 76.5 billion in revenue, PLN 13.9 billion in LIFO-based EBITDA and PLN 7.7 billion in net profit for the second quarter of 2026.",
        "International service stations achieved record profitability, while a diversified operating model supported strong performance across Upstream & Supply, Downstream, Energy and Consumers & Products.",
        "Operating cash flow reached PLN 15.2 billion and capital expenditure for the first half of the year totalled PLN 14.7 billion."
      ],
      localPage:"financial-results-q2-2026.html"
    },
    {
      id:"marine-terminal", date:"05.08.2026", iso:"2026-08-05", category:"Downstream",
      title:"ORLEN opens strategic marine terminal on the Martwa Wisła River in Gdańsk",
      image:"assets/investors/news-marine-terminal.jpeg",
      summary:"The new refinery terminal can handle more than 1.8 million tonnes of cargo per year.",
      paragraphs:[
        "A new marine transshipment terminal has opened at the Gdańsk refinery, completing an important logistics investment for the Group.",
        "Refinery feedstocks and products can now move directly between the plant and tankers, reducing intermediate transport and improving operational flexibility.",
        "The facility is designed for more than 1.8 million tonnes of annual cargo and was delivered with a strong contribution from Polish contractors."
      ]
    },
    {
      id:"ccgt-grudziadz", date:"13.07.2026", iso:"2026-07-13", category:"Energy",
      title:"First electricity from CCGT Grudziądz delivered to the national grid",
      image:"assets/investors/news-ccgt-grudziadz.jpeg",
      summary:"The combined-cycle gas turbine plant has reached a major commissioning milestone.",
      paragraphs:[
        "CCGT Grudziądz has delivered its first electricity to Poland's national power grid, marking a key stage of commissioning.",
        "Once fully operational, the flexible gas-fired unit will be capable of supplying electricity corresponding to the needs of around one million households.",
        "The project strengthens the security of the national power system and supports the integration of growing renewable generation."
      ]
    },
    {
      id:"baltic-first-power", date:"10.07.2026", iso:"2026-07-10", category:"Energy",
      title:"A historic milestone: Baltic Power delivers first electricity to the Polish grid",
      image:"assets/investors/news-baltic-first-power.jpeg",
      summary:"Electricity from Poland's first Baltic Sea wind farm has entered the national power system.",
      paragraphs:[
        "The first electricity generated by Baltic Power has been delivered to Poland's national grid, marking one of the final stages of the offshore wind project.",
        "At the milestone date, 54 of 76 turbines had been installed and the first machines were already producing renewable power.",
        "The 1.2 GW development will be able to meet roughly three percent of Polish electricity demand when fully operational."
      ]
    }
  ];

  main.innerHTML = `
    <section class="press-hero" id="top"><div class="page-width"><p class="press-kicker">Media</p><h1>Press releases</h1><p>Follow the latest information about ORLEN investments, operations, financial performance and the energy transition.</p></div></section>
    <section class="press-main page-width" aria-labelledby="current-releases">
      <div class="press-main__heading"><div><p class="press-kicker">Media centre</p><h2 id="current-releases">Current press releases</h2></div><p class="press-count" aria-live="polite"></p></div>
      <div class="press-tools">
        <form class="press-search" role="search"><label for="press-query">Search press releases</label><div class="press-search__row"><input id="press-query" type="search" placeholder="Enter a title or topic"><button type="submit" aria-label="Search">⌕</button></div></form>
        <div class="press-filters" aria-label="Filter by category">
          <button class="press-filter is-active" type="button" data-category="All">All</button>
          <button class="press-filter" type="button" data-category="Upstream">Upstream</button>
          <button class="press-filter" type="button" data-category="Energy">Energy</button>
          <button class="press-filter" type="button" data-category="Downstream">Downstream</button>
          <button class="press-filter" type="button" data-category="Investor relations">Investor relations</button>
        </div>
      </div>
      <div class="press-grid"></div>
      <button class="press-load" type="button">Load more</button>
    </section>
    <div class="press-modal" aria-hidden="true">
      <div class="press-modal__backdrop" data-modal-close></div>
      <article class="press-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="press-modal-title">
        <button class="press-modal__close" type="button" aria-label="Close press release" data-modal-close>×</button>
        <div class="press-modal__content"></div>
      </article>
    </div>`;

  const grid = main.querySelector(".press-grid");
  const count = main.querySelector(".press-count");
  const loadButton = main.querySelector(".press-load");
  const queryInput = main.querySelector("#press-query");
  const modal = main.querySelector(".press-modal");
  const modalContent = main.querySelector(".press-modal__content");
  let category = "All";
  const pageSize = 4;
  let visibleCount = pageSize;
  let lastTrigger = null;

  const cardMarkup = (release) => `
    <article class="press-card" id="${release.id}" data-category="${release.category}">
      <div class="press-card__image"><img src="${release.image}" alt=""></div>
      <div class="press-card__copy">
        <div class="press-card__meta"><span>Press releases</span><time datetime="${release.iso}">${release.date}</time></div>
        <h3>${release.title}</h3><p>${release.summary}</p>
        <button type="button" data-release="${release.id}">Find out more <span aria-hidden="true">→</span></button>
      </div>
    </article>`;

  function render() {
    const term = queryInput.value.trim().toLowerCase();
    const filtered = releases.filter((release) => {
      const categoryMatch = category === "All" || release.category === category;
      const termMatch = !term || (release.title + " " + release.summary + " " + release.category).toLowerCase().includes(term);
      return categoryMatch && termMatch;
    });
    const isFiltered = Boolean(term) || category !== "All";
    const visible = isFiltered ? filtered : filtered.slice(0, visibleCount);
    grid.innerHTML = visible.length ? visible.map(cardMarkup).join("") : '<p class="press-empty">No press releases match your search.</p>';
    count.textContent = `Showing ${visible.length} of ${filtered.length} release${filtered.length === 1 ? "" : "s"}`;
    const allVisible = visibleCount >= filtered.length;
    loadButton.hidden = isFiltered || filtered.length <= pageSize;
    loadButton.innerHTML = allVisible ? 'Show fewer <span aria-hidden="true">↑</span>' : `Load more <span aria-hidden="true">(${Math.min(pageSize, filtered.length - visibleCount)}) ↓</span>`;
    bindCards();
  }

  function openRelease(id, updateHash = true) {
    const release = releases.find((item) => item.id === id);
    if (!release) return;
    const paragraphs = release.paragraphs.map((text) => `<p>${text}</p>`).join("");
    const primary = release.localPage ? `<a href="${release.localPage}">Open complete results page</a>` : "";
    modalContent.innerHTML = `<img class="press-modal__image" src="${release.image}" alt=""><div class="press-modal__body"><time datetime="${release.iso}">${release.date} · ${release.category}</time><h2 id="press-modal-title">${release.title}</h2>${paragraphs}<div class="press-modal__footer">${primary}<button type="button" data-modal-close>Back to all releases</button></div></div>`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("press-modal-open");
    if (updateHash) history.replaceState(null, "", "#" + release.id);
    modal.querySelector(".press-modal__close").focus();
    modalContent.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("press-modal-open");
    history.replaceState(null, "", location.pathname + location.search);
    lastTrigger?.focus();
  }

  function bindCards() {
    grid.querySelectorAll("[data-release]").forEach((button) => button.addEventListener("click", () => {
      lastTrigger = button;
      openRelease(button.dataset.release);
    }));
  }

  main.querySelector(".press-search").addEventListener("submit", (event) => { event.preventDefault(); render(); });
  queryInput.addEventListener("input", render);
  main.querySelectorAll(".press-filter").forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.category;
    visibleCount = pageSize;
    main.querySelectorAll(".press-filter").forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  }));
  loadButton.addEventListener("click", () => {
    visibleCount = visibleCount >= releases.length ? pageSize : Math.min(visibleCount + pageSize, releases.length);
    render();
  });
  modal.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal(); });

  render();
  if (location.hash) openRelease(location.hash.slice(1), false);
})();

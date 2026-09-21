(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "ORLEN Stop.Cafe | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "retail-offer.html");
  });

  const menuItems = [
    { category: "coffee", label: "Coffee", name: "Freshly brewed coffee", description: "The signature Stop.Cafe blend prepared for a smooth, balanced cup on the road." },
    { category: "coffee", label: "Coffee", name: "Cappuccino and latte", description: "Espresso-based favourites finished with creamy milk foam." },
    { category: "breakfast", label: "Breakfast", name: "Breakfast sandwiches", description: "Convenient freshly prepared options for an early start or a quick morning stop." },
    { category: "breakfast", label: "Breakfast", name: "Pastries and snacks", description: "Sweet and savoury bakery choices designed for an easy break." },
    { category: "hot", label: "Hot snacks", name: "Stop.Cafe hot dog", description: "A well-known road-trip classic served hot with a choice of additions." },
    { category: "hot", label: "Hot snacks", name: "Burgers and warm snacks", description: "Satisfying hot food prepared at the station when your journey needs more energy." },
    { category: "meals", label: "Meals", name: "Breakfast and lunch dishes", description: "Selected restaurant-format stations offer a broader menu for a longer break." },
    { category: "meals", label: "Meals", name: "Fresh on-site preparation", description: "Meals and snacks are assembled by trained station teams using selected ingredients." },
    { category: "vege", label: "Vege", name: "Plant-based hot snacks", description: "Vegetarian and vegan choices created to make the Stop.Cafe menu welcoming to more drivers." },
    { category: "vege", label: "Vege", name: "Fresh local ingredients", description: "Handy plant-focused snacks made with ingredients sourced from Polish producers." }
  ];

  main.outerHTML = `
    <main id="main-content">
      <section class="stop-hero">
        <div class="stop-hero__content page-width">
          <nav class="stop-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Homepage</a><span aria-hidden="true">›</span><a href="retail-offer.html">For You</a><span aria-hidden="true">›</span><span aria-current="page">ORLEN Stop.Cafe</span></nav>
          <p class="stop-kicker">For you</p>
          <h1>ORLEN<br>Stop.Cafe</h1>
          <p class="stop-hero__lead">Stop, it’s time for a break!</p>
          <div class="stop-hero__actions">
            <a class="stop-button" href="fuel-stations.html#stop-cafe"><span>Find ORLEN Stop.Cafe</span><span aria-hidden="true">→</span></a>
            <a class="stop-button stop-button--outline" href="#menu"><span>Explore the offer</span><span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <nav class="stop-subnav" aria-label="Stop.Cafe page sections"><div class="page-width"><a href="#always">Always on the way</a><a href="#menu">Our offer</a><a href="#coffee">Coffee</a><a href="#vege">Vege power</a><a href="#vitay">ORLEN VITAY</a></div></nav>

      <section class="stop-feature" id="always">
        <div class="stop-feature__image"><img src="assets/images/stop-cafe/always-on-the-way.jpeg" alt="ORLEN Stop.Cafe station surrounded by the landscape of Krynica"></div>
        <div class="stop-feature__copy">
          <p class="stop-kicker">ORLEN Stop.Cafe</p>
          <h2 class="stop-heading">Always on the way</h2>
          <p>ORLEN Stop.Cafe is recognised by drivers across Poland, Czechia, Lithuania and Slovakia. Fresh meals and convenient snacks are available at more than 2,000 points in cities, small towns and beside busy routes.</p>
          <a class="stop-button" href="fuel-stations.html#stop-cafe"><span>Find ORLEN Stop.Cafe</span><span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section class="stop-feature stop-feature--reverse">
        <div class="stop-feature__image"><img src="assets/images/stop-cafe/wide-selection.jpeg" alt="Wide selection of food at ORLEN Stop.Cafe"></div>
        <div class="stop-feature__copy">
          <p class="stop-kicker">Fresh and convenient</p>
          <h2 class="stop-heading">A wide selection of products</h2>
          <p>Local culinary traditions meet international inspiration in an offer made for different moments of the day. Food is prepared at the station by trained teams using fresh ingredients and new flavour combinations.</p>
          <a class="stop-button" href="#menu"><span>Explore the offer</span><span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section class="stop-section stop-menu" id="menu">
        <div class="page-width">
          <div class="stop-menu__heading"><div><p class="stop-kicker">Stop.Cafe menu</p><h2 class="stop-heading">Choose something for your break</h2></div><p>Browse the main parts of the Stop.Cafe offer. Availability varies by station and restaurant format, so use the local map to find a convenient point.</p></div>
          <div class="stop-menu__filters" role="group" aria-label="Filter Stop.Cafe menu">
            <button class="stop-menu__filter" type="button" data-menu-filter="all" aria-pressed="true">All</button>
            <button class="stop-menu__filter" type="button" data-menu-filter="coffee" aria-pressed="false">Coffee</button>
            <button class="stop-menu__filter" type="button" data-menu-filter="breakfast" aria-pressed="false">Breakfast</button>
            <button class="stop-menu__filter" type="button" data-menu-filter="hot" aria-pressed="false">Hot snacks</button>
            <button class="stop-menu__filter" type="button" data-menu-filter="meals" aria-pressed="false">Meals</button>
            <button class="stop-menu__filter" type="button" data-menu-filter="vege" aria-pressed="false">Vege</button>
          </div>
          <div class="stop-menu__meta"><span id="stop-menu-status" aria-live="polite">Showing the complete offer</span><span id="stop-menu-count">${menuItems.length} items</span></div>
          <div class="stop-menu__grid" id="stop-menu-grid"></div>
        </div>
      </section>

      <section class="stop-section stop-coffee" id="coffee">
        <div class="page-width stop-coffee__layout">
          <div class="stop-coffee__image" role="img" aria-label="Coffee served at ORLEN Stop.Cafe"></div>
          <div class="stop-coffee__copy">
            <p class="stop-kicker">Our coffee</p>
            <h2 class="stop-heading">A distinctive blend made for Stop.Cafe</h2>
            <p>The Stop.Cafe coffee blend combines carefully selected Fairtrade-certified Arabica beans from Central America and Africa with a small amount of Robusta. It was created exclusively for ORLEN with specialist roasting expertise.</p>
            <div class="stop-coffee__facts"><div class="stop-coffee__fact"><strong>Arabica</strong><span>Central American and African origins</span></div><div class="stop-coffee__fact"><strong>Robusta</strong><span>A measured addition for character</span></div><div class="stop-coffee__fact"><strong>Fairtrade</strong><span>Certified coffee beans</span></div></div>
          </div>
        </div>
      </section>

      <section class="stop-section" id="vege">
        <div class="stop-vege__layout">
          <div class="stop-vege__copy">
            <p class="stop-kicker">Vege power</p>
            <h2 class="stop-heading">Plant-based energy for the road</h2>
            <p>Stop.Cafe continues to develop vegetarian and vegan options so more travellers can find something that suits them. Handy snacks use fresh ingredients from Polish producers, while selected restaurant-format stations also serve breakfast and lunch dishes.</p>
            <a class="stop-button" href="#menu" data-menu-jump="vege"><span>View vege choices</span><span aria-hidden="true">↑</span></a>
          </div>
          <div class="stop-vege__image" role="img" aria-label="Plant-based Stop.Cafe food"></div>
        </div>
      </section>

      <section class="stop-vitay" id="vitay">
        <div class="stop-vitay__content page-width">
          <p class="stop-kicker">Applications</p>
          <h2 class="stop-heading">ORLEN VITAY makes every Stop.Cafe visit more rewarding</h2>
          <p>Use ORLEN VITAY for selected discounts, convenient payments and current menus at participating stations.</p>
          <a class="stop-button" href="retail-offer.html"><span>Explore the For You offer</span><span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section class="stop-section stop-related">
        <div class="page-width">
          <p class="stop-kicker">See more</p>
          <h2 class="stop-heading">More services for every journey</h2>
          <div class="stop-related__grid">
            <a class="stop-related-card" href="retail-offer.html"><small>For drivers</small><strong>Our offer for drivers</strong><span>More →</span></a>
            <a class="stop-related-card" href="retail-offer.html"><small>For you</small><strong>ORLEN Paczka</strong><span>More →</span></a>
            <a class="stop-related-card" href="retail-offer.html"><small>For you</small><strong>ORLEN w ruchu</strong><span>More →</span></a>
          </div>
        </div>
      </section>
    </main>`;

  const grid = document.getElementById("stop-menu-grid");
  const count = document.getElementById("stop-menu-count");
  const status = document.getElementById("stop-menu-status");

  function renderMenu(filter) {
    const items = filter === "all" ? menuItems : menuItems.filter((item) => item.category === filter);
    grid.innerHTML = items.map((item) => `<article class="stop-menu-card"><small>${item.label}</small><h3>${item.name}</h3><p>${item.description}</p></article>`).join("");
    count.textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;
    status.textContent = filter === "all" ? "Showing the complete offer" : `Showing ${document.querySelector(`[data-menu-filter="${filter}"]`).textContent.toLowerCase()} choices`;
  }

  document.querySelector(".stop-menu__filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-menu-filter]");
    if (!button) return;
    document.querySelectorAll("[data-menu-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderMenu(button.dataset.menuFilter);
  });

  document.querySelector('[data-menu-jump="vege"]').addEventListener("click", () => {
    const vegeButton = document.querySelector('[data-menu-filter="vege"]');
    document.querySelectorAll("[data-menu-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === vegeButton)));
    renderMenu("vege");
  });

  renderMenu("all");
})();

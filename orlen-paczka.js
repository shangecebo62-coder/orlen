(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "ORLEN Paczka | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "retail-offer.html");
  });

  main.outerHTML = `
    <main id="main-content">
      <section class="paczka-hero">
        <div class="paczka-hero__content page-width">
          <nav class="paczka-breadcrumbs" aria-label="Breadcrumb">
            <a href="index.html">Homepage</a><span aria-hidden="true">›</span>
            <a href="retail-offer.html">For You</a><span aria-hidden="true">›</span>
            <span aria-current="page">ORLEN Paczka</span>
          </nav>
          <p class="paczka-kicker">For you</p>
          <h1>ORLEN Paczka</h1>
          <p class="paczka-hero__lead">Easy handling of parcels thanks to the mobile app</p>
          <a class="paczka-button" href="#about"><span>Find out more</span><span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section class="paczka-intro page-width reveal" id="about">
        <p>Online shopping? Unwanted gift return? Your own online shop? We offer a solution to all users and customers of e-commerce services, thanks to convenient and quick deliveries with ORLEN Paczka (ORLEN Parcel).</p>
        <p>ORLEN Paczka service is available in multiple online shops, including the most commonly used Polish e-commerce platforms.</p>
      </section>

      <section class="paczka-stats">
        <div class="paczka-stats__inner page-width">
          <h2>ORLEN Paczka today</h2>
          <div class="paczka-stats__grid">
            <article class="paczka-stat reveal"><strong data-count="11000">11 000</strong><h3>collect-send points</h3><p>Located at Ruch kiosks and partner facilities countrywide.</p></article>
            <article class="paczka-stat reveal"><strong data-count="5000">5 000</strong><h3>automated parcel lockers</h3><p>Located primarily at ORLEN petrol stations.</p></article>
          </div>
        </div>
      </section>

      <section class="paczka-finder reveal" aria-labelledby="paczka-finder-title">
        <div class="paczka-finder__copy page-width">
          <p class="paczka-kicker">For you</p>
          <h2 id="paczka-finder-title">ORLEN Paczka<br>(ORLEN Parcel)</h2>
          <p class="paczka-finder__note">Convenient parcel collection and sending through an extensive network of points and automated lockers.</p>
          <span class="paczka-button paczka-button--inert" role="link" aria-disabled="true"><span>Find a parcel locker</span><span aria-hidden="true">→</span></span>
        </div>
      </section>

      <section class="paczka-related">
        <div class="page-width">
          <p class="paczka-kicker">For you</p>
          <h2>See also</h2>
          <div class="paczka-related__grid">
            <a class="paczka-related-card reveal" href="retail-offer.html#offers-for-drivers">
              <div class="paczka-related-card__image"><img src="assets/images/orlen-paczka/related-drivers.jpeg" alt="Interior of a modern car"></div>
              <div class="paczka-related-card__copy"><small>For you</small><h3>Offers for drivers</h3><p>Products and services that provide comfort throughout your journey.</p><span>More →</span></div>
            </a>
            <a class="paczka-related-card reveal" href="retail-offer.html#mobile-apps">
              <div class="paczka-related-card__image"><img src="assets/images/orlen-paczka/related-vitay.jpeg" alt="ORLEN VITAY loyalty programme"></div>
              <div class="paczka-related-card__copy"><small>For you</small><h3>VITAY Program</h3><p>One of Poland's largest loyalty programmes, operating for more than 20 years.</p><span>More →</span></div>
            </a>
            <a class="paczka-related-card reveal" href="orlen-w-ruchu.html">
              <div class="paczka-related-card__image"><img src="assets/images/orlen-paczka/related-ruchu.jpeg" alt="ORLEN w ruchu retail point"></div>
              <div class="paczka-related-card__copy"><small>For you</small><h3>ORLEN w ruchu</h3><p>Quick grocery shopping and fresh snacks in convenient city locations.</p><span>More →</span></div>
            </a>
          </div>
        </div>
      </section>
    </main>`;

})();

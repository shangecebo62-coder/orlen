(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "ORLEN w ruchu | ORLEN";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "retail-offer.html");
  });

  main.outerHTML = `
    <main id="main-content">
      <section class="ruchu-hero">
        <div class="ruchu-hero__content page-width">
          <nav class="ruchu-breadcrumbs" aria-label="Breadcrumb">
            <a href="index.html">Homepage</a><span aria-hidden="true">›</span>
            <a href="retail-offer.html">For You</a><span aria-hidden="true">›</span>
            <span aria-current="page">ORLEN w ruchu</span>
          </nav>
          <p class="ruchu-kicker">For you</p>
          <h1>ORLEN w<br>ruchu</h1>
        </div>
      </section>

      <section class="ruchu-intro page-width reveal">
        <p class="ruchu-intro__lead">ORLEN w ruchu is a place to do some quick grocery shopping and taste our delicious snacks. ORLEN w ruchu points are at your service at the busiest city spots, airports, railway and bus stations. No matter if you commute by public transport, ride a bike or walk, you will find ORLEN w ruchu nearby.</p>
        <p class="ruchu-intro__detail">ORLEN w ruchu offers delicious Fairtrade® coffee, our legendary hot dogs and a variety of meals prepared with fresh ingredients from local producers. You can collect VITAY loyalty programme points, as well as collect or send a parcel via the ORLEN Paczka service.</p>
      </section>

      <section class="ruchu-vitay reveal" aria-labelledby="ruchu-vitay-title">
        <div class="ruchu-vitay__copy page-width">
          <p class="ruchu-kicker">For you</p>
          <h2 id="ruchu-vitay-title">Get even more VITAY points</h2>
          <p>Enjoy convenient everyday shopping and collect VITAY points while you are on the move.</p>
          <button class="ruchu-button" type="button" data-vitay-open><span>See our offer</span><span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section class="ruchu-contact page-width" id="contact">
        <div class="ruchu-contact__head reveal">
          <div><p class="ruchu-kicker">ORLEN w ruchu</p><h2>Contact</h2></div>
          <p>Do you have questions, suggestions or concerns? Send your message together with a short note explaining what it relates to, or contact our service team by phone.</p>
        </div>
        <div class="ruchu-contact__grid">
          <article class="ruchu-contact-card reveal">
            <img src="assets/images/orlen-w-ruchu/contact-mobile.png" alt="" aria-hidden="true">
            <div><small>Email</small><a href="mailto:bok@orlenwruchu.pl">bok@orlenwruchu.pl</a><br><button class="ruchu-copy" type="button" data-copy-email>Copy email</button></div>
          </article>
          <article class="ruchu-contact-card reveal">
            <img src="assets/images/orlen-w-ruchu/contact-mobile.png" alt="" aria-hidden="true">
            <div><small>Customer service</small><a href="tel:+447378347853">+44 7378347853</a><br><strong>Call us</strong></div>
          </article>
        </div>
      </section>

      <section class="ruchu-related">
        <div class="page-width">
          <p class="ruchu-kicker">For you</p>
          <h2>See also</h2>
          <div class="ruchu-related__grid">
            <a class="ruchu-related-card reveal" href="retail-offer.html#offers-for-drivers">
              <div class="ruchu-related-card__image"><img src="assets/images/orlen-w-ruchu/related-drivers.jpeg" alt="Interior of a modern car"></div>
              <div class="ruchu-related-card__copy"><small>For you</small><h3>Offers for drivers</h3><p>Products and services that provide comfort throughout your journey.</p><span>More →</span></div>
            </a>
            <a class="ruchu-related-card reveal" href="retail-offer.html#mobile-apps">
              <div class="ruchu-related-card__image"><img src="assets/images/orlen-w-ruchu/related-apps.jpeg" alt="ORLEN mobile applications"></div>
              <div class="ruchu-related-card__copy"><small>For you</small><h3>Mobile apps</h3><p>Digital services that improve your experience at ORLEN points and stations.</p><span>More →</span></div>
            </a>
            <a class="ruchu-related-card reveal" href="stop-cafe.html">
              <div class="ruchu-related-card__image"><img src="assets/images/orlen-w-ruchu/related-stop-cafe.jpeg" alt="ORLEN Stop.Cafe food offer"></div>
              <div class="ruchu-related-card__copy"><small>For you</small><h3>ORLEN Stop.Cafe offer</h3><p>Fresh and tasty meals that are always available along the way.</p><span>More →</span></div>
            </a>
          </div>
        </div>
      </section>

      <dialog class="ruchu-dialog" id="vitay-dialog" aria-labelledby="vitay-dialog-title">
        <div class="ruchu-dialog__inner">
          <button class="ruchu-dialog__close" type="button" data-vitay-close aria-label="Close VITAY offer">×</button>
          <p class="ruchu-kicker">ORLEN VITAY</p>
          <h2 id="vitay-dialog-title">More value in motion</h2>
          <p>Use your VITAY account while shopping at ORLEN w ruchu. Present it before payment to collect points on eligible purchases.</p>
          <ul><li>Collect VITAY points during everyday shopping</li><li>Choose coffee, hot snacks and fresh meals</li><li>Send or collect parcels with ORLEN Paczka</li></ul>
          <a class="ruchu-button" href="retail-offer.html"><span>Explore the For You offer</span><span aria-hidden="true">→</span></a>
        </div>
      </dialog>
    </main>`;

  const dialog = document.getElementById("vitay-dialog");
  const openButton = document.querySelector("[data-vitay-open]");
  const closeButton = document.querySelector("[data-vitay-close]");

  openButton.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const copyButton = document.querySelector("[data-copy-email]");
  copyButton.addEventListener("click", async () => {
    const email = "bok@orlenwruchu.pl";
    try {
      await navigator.clipboard.writeText(email);
    } catch (_error) {
      const field = document.createElement("textarea");
      field.value = email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    copyButton.textContent = "Copied";
    copyButton.setAttribute("aria-label", "Email copied");
    window.setTimeout(() => {
      copyButton.textContent = "Copy email";
      copyButton.removeAttribute("aria-label");
    }, 1800);
  });
})();

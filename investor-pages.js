(() => {
  const view = document.body.dataset.investorView || "landing";
  const main = document.querySelector("main");
  if (!main) return;

  document.querySelectorAll(".primary-nav a, .mobile-menu a").forEach((link) => {
    if (link.textContent.includes("Investor relations")) {
      link.href = "investor-relations.html";
      link.removeAttribute("data-local-only");
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.textContent.trim() === "Investor relations");
  });

  const downloadIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14"/></svg>';
  const arrow = '<span aria-hidden="true">→</span>';

  const landingMarkup = `
    <section class="ir-hero" id="top" aria-labelledby="ir-title">
      <img src="assets/investors/investor-hero.jpeg" alt="ORLEN industrial facilities and energy infrastructure">
      <div class="ir-hero__shade"></div>
      <div class="ir-hero__content page-width">
        <p class="ir-kicker">ORLEN Group</p>
        <h1 id="ir-title">Investor relations</h1>
        <p>Discover ORLEN’s dynamic business model and financial performance. Explore reports and presentations that demonstrate how we are delivering on our Strategy.</p>
      </div>
    </section>

    <section class="ir-overview page-width" aria-labelledby="ir-overview-title">
      <div class="ir-section-heading"><p class="ir-kicker">Investor relations</p><h2 id="ir-overview-title">Information for investors</h2></div>
      <div class="ir-card-grid">
        <article class="ir-card ir-card--wide reveal">
          <img src="assets/investors/annual-report.jpeg" alt="Wind turbines featured in the ORLEN Annual Report">
          <div class="ir-card__shade"></div>
          <div class="ir-card__content"><p>Investor relations</p><h3>Annual Report 2025</h3><a href="annual-report-2025.html">More ${arrow}</a></div>
        </article>
        <article class="ir-card reveal">
          <img src="assets/investors/press-release.jpeg" alt="Modern ORLEN service station">
          <div class="ir-card__shade"></div>
          <div class="ir-card__content"><p>Investor relations</p><h3>Press release</h3><span>ORLEN Group reports record profits in international markets</span><a href="financial-results-q2-2026.html">More ${arrow}</a></div>
        </article>
        <article class="ir-card reveal">
          <img src="assets/investors/company-overview.jpeg" alt="ORLEN Group business overview">
          <div class="ir-card__shade"></div>
          <div class="ir-card__content"><p>Investor relations</p><h3>Company Overview</h3><span>ORLEN Group in summary.</span><a href="company-overview.html">More ${arrow}</a></div>
        </article>
        <article class="ir-card reveal">
          <img src="assets/investors/financial-presentation.jpeg" alt="ORLEN financial presentation">
          <div class="ir-card__shade"></div>
          <div class="ir-card__content"><p>Investor relations</p><h3>Financial presentation</h3><span>Presentation of results for the first half of 2026.</span><a href="assets/documents/ORLEN-2Q26-Financial-Results.pdf" download>Download PDF ${downloadIcon}</a></div>
        </article>
        <article class="ir-card ir-card--report reveal">
          <div class="ir-card__content"><p>Investor relations</p><h3>Current report</h3><span>Estimated selected operating data and one-off items impacting results of the ORLEN Group for the second quarter of 2026.</span><a href="financial-results-q2-2026.html">More ${arrow}</a></div>
        </article>
      </div>
    </section>

    <section class="ir-strategy page-width reveal">
      <div class="ir-strategy__copy">
        <p class="ir-kicker">About us</p><h2>ORLEN Strategy 2035</h2>
        <p>We are dedicated to ensuring secure energy supplies, underpinning the growth of Central and Eastern European economies. We form part of an integrated energy system that will propel the region’s decarbonisation efforts through expansion of zero- and low-carbon energy solutions.</p>
        <p>We responsibly transform our assets and products, while delivering an integrated offering to meet the evolving needs of our customers and markets. For ORLEN, the journey towards energy of the future begins today.</p>
        <a class="ir-text-link" href="strategy-2035.html">More ${arrow}</a>
      </div>
      <a class="ir-strategy__media" href="strategy-2035.html" aria-label="Explore ORLEN Strategy 2035"><img src="assets/investors/strategy-cover.png" alt="The Energy of Tomorrow Starts Today, ORLEN Strategy 2035"></a>
    </section>

    <section class="ir-split-section">
      <div class="page-width ir-feature-grid">
        <article class="ir-feature reveal" id="annual-report">
          <img src="assets/investors/dividend.jpeg" alt="ORLEN investor materials">
          <div><p class="ir-kicker">Investor relations</p><h2>Dividend</h2><p>ORLEN’s progressive dividend policy provides for an annual increase in the guaranteed dividend of PLN 0.15 per share. The guaranteed dividend for 2025 rises from PLN 4.30 to PLN 4.50 per share.</p><p>The Management Board may recommend a higher dividend of up to 25% of operating cash flow for the year, less financing costs.</p></div>
        </article>
        <article class="ir-feature ir-feature--reverse reveal" id="business-model">
          <img src="assets/investors/dynamic-business-model.jpeg" alt="ORLEN integrated and dynamic business model">
          <div><p class="ir-kicker">Investor relations</p><h2>Dynamic business model</h2><p>A diversified portfolio across Upstream &amp; Supply, Downstream, Energy and Consumers &amp; Products balances market cycles and supports stable cash generation.</p><a class="ir-text-link" href="financial-results-q2-2026.html">See the latest results ${arrow}</a></div>
        </article>
      </div>
    </section>

    <section class="ir-contact page-width" id="ir-contact">
      <div><p class="ir-kicker">Contact</p><h2>Contact to Investor Relations Office</h2></div>
      <div class="ir-contact__details"><p><span>Phone</span><a href="tel:+447378347853">+44 7378347853</a></p><p><span>E-mail</span><a href="mailto:ir@orlen.pl">ir@orlen.pl</a></p></div>
    </section>

    <section class="ir-newsletter">
      <div class="page-width ir-newsletter__grid">
        <div><p class="ir-kicker">Stay informed</p><h2>Sign up for the newsletter</h2><p>Receive current financial information and the latest investor updates.</p></div>
        <form id="ir-newsletter-form" class="ir-newsletter__form" novalidate>
          <label for="ir-email">Enter e-mail</label>
          <div class="ir-input-row"><input id="ir-email" type="email" required placeholder="E-mail"><button type="submit">Subscribe ${arrow}</button></div>
          <label class="ir-check"><input type="checkbox" required><span>I consent to the processing of the data entered above for delivery of the newsletter.</span></label>
          <p class="ir-form-message" aria-live="polite"></p>
        </form>
      </div>
    </section>`;

  const resultsMarkup = `
    <section class="results-heading" id="top">
      <div class="page-width">
        <a class="results-back" href="investor-relations.html">← Investor relations</a>
        <time datetime="2026-08-06">06.08.2026</time>
        <p class="ir-kicker">Press releases</p>
        <h1>ORLEN Group reports record profits in international markets</h1>
        <p class="results-lead">For the second quarter of 2026, ORLEN posted PLN 76.5 billion in revenue, PLN 13.9 billion in LIFO-based EBITDA and PLN 7.7 billion in net profit.</p>
        <div class="results-actions"><a class="ir-button ir-button--red" href="assets/documents/ORLEN-2Q26-Financial-Results.pdf" download>Presentation of financial results ${downloadIcon}</a><a class="ir-button" href="#article">Read the press release ${arrow}</a></div>
      </div>
    </section>

    <section class="results-visual page-width"><img src="assets/images/results-q2-2026.jpg" alt="ORLEN Group second-quarter 2026 financial results presentation"></section>

    <section class="results-stats" aria-label="Second-quarter highlights"><div class="page-width results-stats__grid">
      <div><span>Revenue</span><strong>PLN 76.5bn</strong></div><div><span>LIFO-based EBITDA</span><strong>PLN 13.9bn</strong></div><div><span>Net profit</span><strong>PLN 7.7bn</strong></div><div><span>Operating cash flow</span><strong>PLN 15.2bn</strong></div>
    </div></section>

    <article class="results-article page-width" id="article">
      <aside class="results-share"><span>Press releases</span><time datetime="2026-08-06">August 6, 2026</time><a href="assets/documents/ORLEN-2Q26-Financial-Results.pdf" download>PDF ${downloadIcon}</a></aside>
      <div class="results-copy">
        <p class="results-intro">Foreign service stations delivered record profit during the quarter, while fuel prices for motorists in Poland were the lowest in the European Union.</p>
        <blockquote>Ireneusz Fąfara explained that restrained domestic retail margins, promotions and public measures lowered prices for Polish drivers, while the international station network increased its contribution to fuel-segment earnings by 18 percentage points year on year.<cite>Ireneusz Fąfara, CEO and President of the Management Board of ORLEN</cite></blockquote>
        <p>Responsible and professional management allows the Group to navigate even a severe global crisis in the liquid-fuels market while delivering benefits to shareholders and customers. The results provide resources to fund the largest investment programme in the history of the Polish energy sector and pay a record dividend.</p>
        <h2>Performance by segment</h2>
        <div class="segment-list">
          <div><span>01</span><h3>Upstream &amp; Supply</h3><strong>PLN 3.9bn EBITDA</strong><p>Average daily hydrocarbon production in the second quarter was 196,000 barrels of oil equivalent. Macroeconomic conditions were a key driver of performance.</p></div>
          <div><span>02</span><h3>Downstream</h3><strong>PLN 5.9bn EBITDA</strong><p>The segment benefited from favourable macroeconomic conditions arising from the geopolitical situation. Petrochemicals also delivered positive EBITDA.</p></div>
          <div><span>03</span><h3>Energy</h3><strong>PLN 3.4bn EBITDA</strong><p>Performance was supported by higher electricity generation and sales, and increased electricity and gas distribution volumes.</p></div>
          <div><span>04</span><h3>Consumers &amp; Products</h3><strong>PLN 1.5bn EBITDA</strong><p>Higher sales volumes offset lower fuel margins in Poland. Foreign markets accounted for a record 43% of service-station profits.</p></div>
        </div>
        <blockquote>Sławomir Jędrzejczyk highlighted the resilience of the diversified business model and the focus on operational efficiency, cost control, working capital and disciplined allocation of investment capital.<cite>Sławomir Jędrzejczyk, Chief Financial Officer and Vice President of the Management Board of ORLEN</cite></blockquote>
        <p>The Group generated PLN 15.2 billion in operating cash flow, while net debt to EBITDA stood at 0.10x. At the end of April 2026, Moody’s affirmed ORLEN’s A3 credit rating with a stable outlook, highlighting the company’s business resilience and strong balance sheet.</p>
        <h2>Record investment in growth</h2>
        <p>Capital expenditure reached a record PLN 14.7 billion in the first half of 2026. These investments are strengthening energy security and supporting modern infrastructure.</p>
        <p>In Upstream &amp; Supply, ORLEN continued expanding its resource base on the Norwegian Continental Shelf. The Goliat acquisition and the decision to develop Cerisa added nearly 70 million barrels of oil equivalent to Group resources.</p>
        <p>The Group is expanding LNG trading and logistics and developing the Baltic Eagle Gas Hub. It has secured nearly 16 billion cubic metres of annual regasification capacity at Polish LNG terminals and signed a framework for further strategic cooperation with Ukraine’s Naftogaz. In the first half of the year, ORLEN received 40 LNG deliveries in Poland, including shipments carried by vessels from its own fleet.</p>
        <p>In refining and petrochemicals, the latest scope and schedule for New Chemicals were incorporated into contractor arrangements. The Grupa Azoty Polyolefins transaction advanced after three antitrust clearances and court approval of its restructuring plan. HVO availability expanded across Germany, Czechia, Austria and Slovakia, and a new Gdynia hydrogen hub began operating with supplies from Trzebinia and Włocławek.</p>
        <p>In Energy, Baltic Power and the CCGT plant in Grudziądz began supplying electricity to the grid. Work continued on CCGT Gdańsk and Grudziądz 2, while Baltic East entered procurement and surveys began for Baltic West.</p>
        <p>The first half of 2026 also brought construction and upgrades of 1,750 kilometres of power lines, connections for 30,000 customers, 380 MW of renewable and storage capacity connected to the grid, and permits for another 1 GW. The Ostrów Wschód substation was completed to improve supply for 50,000 customers. ORLEN VITAY exceeded 5.6 million active users, up 11% year on year, alongside continued fuel and EV-charging promotions and expansion of modern retail formats.</p>
      </div>
    </article>

    <section class="press-materials"><div class="page-width">
      <div class="ir-section-heading"><p class="ir-kicker">Downloads</p><h2>Press materials</h2></div>
      <div class="press-materials__grid">
        <a href="assets/documents/ORLEN-2Q26-Financial-Results.pdf" download><img src="assets/investors/financial-presentation.jpeg" alt=""><div><strong>ORLEN Group 2Q 2026 financial presentation</strong><span>PDF · 6.3 MB ${downloadIcon}</span></div></a>
        <a href="assets/images/results-q2-2026.jpg" download><img src="assets/images/results-q2-2026.jpg" alt=""><div><strong>Financial results press image</strong><span>JPG ${downloadIcon}</span></div></a>
      </div>
    </div></section>

    <section class="latest-news page-width" aria-labelledby="latest-news-title">
      <div class="ir-section-heading"><p class="ir-kicker">Press releases</p><h2 id="latest-news-title">Latest news</h2></div>
      <div class="latest-news__grid">
        <a class="latest-news__card" href="#news-skarv"><img src="assets/investors/news-skarv-fpso.jpeg" alt="Skarv FPSO in the Norwegian Sea"><div><time datetime="2026-08-26">26.08.2026</time><h3>ORLEN brings three new Norwegian Sea fields on stream</h3><p>Idun Nord, Alve Nord and Ørn are expected to add approximately 30 million barrels of oil equivalent to ORLEN’s production portfolio.</p><span>More →</span></div></a>
        <a class="latest-news__card" href="#news-johan"><img src="assets/investors/news-johan-sverdrup.jpeg" alt="Johan Sverdrup oil field"><div><time datetime="2026-08-20">20.08.2026</time><h3>ORLEN secures up to one-quarter of its crude oil needs</h3><p>A three-year agreement with Equinor may supply more than 9 million tonnes of crude oil per year.</p><span>More →</span></div></a>
        <a class="latest-news__card latest-news__card--text" href="#news-biofuel"><div><time datetime="2026-08-13">13.08.2026</time><h3>ORLEN certified for biofuel component production at Płock refinery</h3><p>Certification supports expanded production of renewable transport-fuel components.</p><span>More →</span></div></a>
      </div>
      <div class="news-details">
        <article id="news-skarv"><p class="ir-kicker">26.08.2026</p><h3>Three Norwegian Sea fields</h3><p>ORLEN Upstream Norway and its licence partners started gas production from Idun Nord, with Alve Nord and Ørn following. The fields are tied into the Skarv production hub and most of the expected 30 million boe is natural gas.</p></article>
        <article id="news-johan"><p class="ir-kicker">20.08.2026</p><h3>Long-term crude supply</h3><p>Deliveries from the Johan Sverdrup field begin in September. The contracted crude will be supplied to refineries in Poland, Czechia and Lithuania, strengthening regional security of supply.</p></article>
        <article id="news-biofuel"><p class="ir-kicker">13.08.2026</p><h3>Certified biofuel production</h3><p>Certification under the KZR INiG sustainability scheme confirms that renewable feedstocks and their processing meet European Union requirements. Current capacity is approximately 100,000 tonnes annually, with upgrades planned to reach around 150,000 tonnes.</p></article>
      </div>
    </section>`;

  if (view === "results") {
    document.title = "ORLEN Group reports record profits in international markets | ORLEN";
    main.innerHTML = resultsMarkup;
  } else {
    document.title = "Investor relations | ORLEN";
    main.innerHTML = landingMarkup;
  }

  const newsletter = document.querySelector("#ir-newsletter-form");
  if (newsletter) {
    newsletter.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = newsletter.querySelector('input[type="email"]');
      const consent = newsletter.querySelector('input[type="checkbox"]');
      const message = newsletter.querySelector(".ir-form-message");
      if (!email.checkValidity() || !consent.checked) {
        message.textContent = "Enter a valid e-mail address and confirm your consent.";
        message.classList.remove("is-success");
        return;
      }
      message.textContent = "Thank you. Your local newsletter request has been recorded.";
      message.classList.add("is-success");
      newsletter.reset();
    });
  }
})();

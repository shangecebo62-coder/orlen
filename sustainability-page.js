(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Sustainability | ORLEN";
  document.body.classList.add("sustainability-page");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "sustainability.html");
  });

  const topics = [
    {
      id: "energy-transition",
      title: "Energy Transition",
      copy: "Key directions and projects related to the ORLEN Group’s energy transition.",
      image: "assets/images/sustainability/energy-transition.jpeg",
      alt: "Offshore wind turbines forming part of ORLEN's energy transition",
      ratio: "landscape",
      detail: "The transition combines lower-emission conventional assets with rapid development of renewable power and modern energy technologies.",
      points: ["ORLEN Transition Plan", "Decarbonisation strategy", "Circular economy", "Renewables, hydrogen, CCUS and sustainable mobility"]
    },
    {
      id: "sustainability-strategy",
      title: "Sustainability Strategy",
      copy: "Sustainability is the driving force behind the ORLEN2035 strategy. The ORLEN Group Sustainable Development Strategy 2025–2035 has been integrated with the ORLEN2035 business strategy and our decarbonisation strategy until 2050.",
      image: "assets/images/sustainability/strategy.png",
      alt: "A driver refuelling a hydrogen-powered car",
      ratio: "square",
      detail: "Together, the three documents support an ambitious business agenda for the next decade, strengthen financial performance and build long-term value for stakeholders.",
      points: ["Integrated business and sustainability priorities", "A clear 2025–2035 implementation horizon", "A long-term decarbonisation pathway to 2050"]
    },
    {
      id: "emissions",
      title: "Carbon Footprint and Emissions Reduction",
      copy: "Key data on greenhouse gas emissions and their reduction, including emissions intensity across individual segments.",
      image: "assets/images/sustainability/emissions.jpeg",
      alt: "A broad forest landscape representing emissions reduction",
      ratio: "landscape",
      detail: "ORLEN measures operational and value-chain emissions and uses segment-specific targets to track progress toward lower-carbon energy and products.",
      points: ["Greenhouse-gas emissions data", "Segment emissions intensity", "Progress against reduction targets"]
    },
    {
      id: "climate-governance",
      title: "Climate Governance",
      copy: "Reducing our environmental footprint and climate impact has long been one of the ORLEN Group’s top priorities. Our management approach is based on corporate social responsibility and takes environmental criteria into account.",
      image: "assets/images/sustainability/climate-governance.jpeg",
      alt: "Volunteers working together in a local community",
      ratio: "square",
      detail: "Clear responsibilities and oversight connect climate risks, environmental performance and sustainable development with business decisions across the Group.",
      points: ["Board and management oversight", "Climate-risk assessment", "Environmental performance reporting"]
    },
    {
      id: "reports-policies",
      title: "Reports and Policies",
      copy: "Documents, reports and policies presenting the ORLEN Group’s activities and standards around sustainability.",
      image: "assets/images/sustainability/reports.jpeg",
      alt: "ORLEN sustainability communications and reporting",
      ratio: "landscape",
      detail: "The reporting library brings together current policies, sustainability disclosures and archived documents in one transparent information set.",
      points: ["Sustainability reports", "Group policies and standards", "Document archive"]
    },
    {
      id: "community",
      title: "Local Community Relations Officer",
      copy: "It is important that local communities can freely submit comments, opinions and questions about our activities. The Local Community Relations Officer maintains dialogue based on partnership, honesty, respect and trust.",
      image: "assets/images/sustainability/community.jpeg",
      alt: "Wind turbines operating beneath a clear blue sky",
      ratio: "landscape",
      detail: "The officer supports open communication, responds to community concerns and helps maintain high-quality relationships around ORLEN operations and investments.",
      points: ["A clear channel for comments and questions", "Open dialogue with local stakeholders", "Respectful, long-term relationships"]
    },
    {
      id: "green-finance",
      title: "Green Financing",
      copy: "Information on financing that supports the achievement of the ORLEN Group’s climate goals and energy transition.",
      image: "assets/images/sustainability/green-finance.jpeg",
      alt: "A protected forest and mountain landscape",
      ratio: "landscape",
      detail: "Green financing helps direct capital toward eligible investments that advance lower-emission energy, environmental goals and the wider transformation programme.",
      points: ["Financing aligned with climate goals", "Transparent allocation principles", "Support for transition investments"]
    }
  ];

  const rows = topics.map((topic, index) => `
    <article class="sustain-row${index % 2 ? " sustain-row--reverse" : ""} reveal" id="${topic.id}">
      <div class="sustain-row__media sustain-row__media--${topic.ratio}">
        <img src="${topic.image}" alt="${topic.alt}" loading="${index < 2 ? "eager" : "lazy"}">
      </div>
      <div class="sustain-row__copy">
        <span class="sustain-row__number">${String(index + 1).padStart(2, "0")}</span>
        <h2>${topic.title}</h2>
        <p>${topic.copy}</p>
        ${topic.id === "energy-transition" ? `<a class="sustain-more" href="energy-transition.html">More <span aria-hidden="true">&rarr;</span></a>` : topic.id === "sustainability-strategy" ? `<a class="sustain-more" href="sustainability-strategy.html">More <span aria-hidden="true">&rarr;</span></a>` : `<button class="sustain-more" type="button" data-topic-open="${topic.id}">More <span aria-hidden="true">&rarr;</span></button>`}
      </div>
    </article>
  `).join("");

  main.outerHTML = `
    <main id="main-content">
      <section class="sustain-hero" aria-labelledby="sustain-title">
        <img src="assets/images/sustainability/hero.jpg" alt="ORLEN employee working safely at an energy installation">
        <div class="sustain-hero__shade"></div>
        <div class="sustain-hero__content page-width">
          <h1 id="sustain-title">Sustainability</h1>
          <a class="sustain-scroll" href="#sustain-intro"><span>Discover our approach</span><span aria-hidden="true">&darr;</span></a>
        </div>
      </section>

      <section class="sustain-intro page-width reveal" id="sustain-intro">
        <p>We are implementing an energy transformation in Central Europe. We are developing in accordance with the principles of sustainable development, reducing our impact on the climate and the environment. We are implementing more environmentally friendly technologies and energy based on low- and zero-emission generation sources. Our actions are aligned with the strategy to achieve emission neutrality by 2050.</p>
      </section>

      <section class="sustain-topics" aria-label="Sustainability topics">
        <div class="page-width">
          <div class="sustain-topics__heading reveal">
            <p class="sustain-kicker">Our commitments</p>
            <h2>Responsible transformation</h2>
          </div>
          ${rows}
        </div>
      </section>

      <section class="sustain-goal">
        <div class="sustain-goal__inner page-width reveal">
          <p class="sustain-kicker">Our direction</p>
          <div class="sustain-goal__statement"><strong>2050</strong><div><h2>Emission neutrality</h2><p>A long-term ambition supported by transition investments, transparent reporting and responsible cooperation with our stakeholders.</p></div></div>
        </div>
      </section>

      <dialog class="sustain-dialog" id="sustain-dialog" aria-labelledby="sustain-dialog-title">
        <div class="sustain-dialog__inner">
          <button class="sustain-dialog__close" type="button" data-dialog-close aria-label="Close details">&times;</button>
          <p class="sustain-kicker" id="sustain-dialog-kicker">Sustainability</p>
          <h2 id="sustain-dialog-title"></h2>
          <p id="sustain-dialog-copy"></p>
          <ul id="sustain-dialog-points"></ul>
          <a class="sustain-dialog__return" href="#sustain-intro" data-dialog-return>Back to sustainability <span aria-hidden="true">&uarr;</span></a>
        </div>
      </dialog>
    </main>`;

  const dialog = document.getElementById("sustain-dialog");
  document.querySelectorAll("[data-topic-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const topic = topics.find((item) => item.id === button.dataset.topicOpen);
      if (!topic) return;
      document.getElementById("sustain-dialog-title").textContent = topic.title;
      document.getElementById("sustain-dialog-copy").textContent = topic.detail;
      document.getElementById("sustain-dialog-points").innerHTML = topic.points.map((point) => `<li>${point}</li>`).join("");
      dialog.showModal();
    });
  });

  const closeDialog = () => dialog.close();
  document.querySelector("[data-dialog-close]").addEventListener("click", closeDialog);
  document.querySelector("[data-dialog-return]").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
})();

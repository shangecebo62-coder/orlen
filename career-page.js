(() => {
  const main = document.getElementById("main-content");
  if (!main) return;

  main.innerHTML = `
    <section class="career-hero" aria-labelledby="career-hero-title">
      <video class="career-hero__image" autoplay muted loop playsinline preload="metadata" poster="assets/images/career/career_video_lp.jpg" aria-hidden="true"><source src="assets/media/career-hero.mp4" type="video/mp4"></video>
      <div class="career-hero__shade"></div>
      <div class="career-hero__copy page-width">
        <p class="career-hero__label">Career</p>
        <h1 id="career-hero-title">We fuel your future</h1>
        <p>Our development starts with you</p>
      </div>
      <a class="career-scroll" href="#career-intro" aria-label="Explore the Career page"><span aria-hidden="true">&darr;</span></a>
    </section>

    <section class="career-intro page-width" id="career-intro">
      <p>At ORLEN, your career can grow alongside a business shaping the future of energy. We welcome people with ambition, curiosity and the drive to make a positive difference.</p>
      <p>Work with people who bring enthusiasm to their craft, and find room to develop professionally and personally. Your next step could begin here.</p>
    </section>

    <section class="career-feature page-width" id="possibilities" aria-labelledby="career-possibilities-title">
      <div class="career-feature__media">
        <img src="assets/images/career/employees.jpg" alt="ORLEN employees working together" loading="lazy">
      </div>
      <div class="career-feature__copy">
        <p class="career-kicker">Why ORLEN</p>
        <h2 id="career-possibilities-title">Endless possibilities</h2>
        <p>Specialists from many fields take on meaningful projects at ORLEN. From offices to production sites, teams work on challenges that can span countries and open new paths for growth.</p>
        <button class="career-link" type="button" data-career-detail="possibilities">More <span aria-hidden="true">&nearr;</span></button>
      </div>
    </section>

    <section class="career-feature career-feature--reverse page-width" id="development" aria-labelledby="career-development-title">
      <div class="career-feature__media">
        <img src="assets/images/career/ORLEN_employees_in_protective_suits.jpg" alt="ORLEN employees in protective clothing" loading="lazy">
      </div>
      <div class="career-feature__copy">
        <p class="career-kicker">Growth</p>
        <h2 id="career-development-title">Development starts with you</h2>
        <p>New technologies, renewable energy and innovation are changing our industry. We invest in our people through training, workshops, conferences and opportunities to build language and specialist skills.</p>
        <p>As you learn, you help shape our shared future.</p>
        <button class="career-link" type="button" data-career-detail="development">More <span aria-hidden="true">&nearr;</span></button>
      </div>
    </section>

    <section class="career-feature page-width" id="people" aria-labelledby="career-people-title">
      <div class="career-feature__media">
        <img src="assets/images/career/group_of_orlen_employees.jpg" alt="A group of ORLEN employees" loading="lazy">
      </div>
      <div class="career-feature__copy">
        <p class="career-kicker">Our people</p>
        <h2 id="career-people-title">ORLEN means people</h2>
        <p>Our people bring expertise, energy and care to everything they do. We focus on safety, an atmosphere of respect, and the satisfaction that comes from doing valuable work together.</p>
      </div>
    </section>

    <section class="career-feature career-feature--reverse page-width" id="benefits" aria-labelledby="career-benefits-title">
      <div class="career-feature__media">
        <img src="assets/images/career/employee_with_a_statuette_700.jpg" alt="An ORLEN employee celebrating an achievement" loading="lazy">
      </div>
      <div class="career-feature__copy">
        <p class="career-kicker">Benefits</p>
        <h2 id="career-benefits-title">Let us take care of you</h2>
        <p>Alongside pay and bonuses, ORLEN supports well-being and offers benefits designed around health, family, comfort and the future. We make room for the passions that matter beyond work.</p>
        <button class="career-link" type="button" data-career-detail="benefits">More <span aria-hidden="true">&nearr;</span></button>
      </div>
    </section>

    <section class="career-banner" id="responsibility" aria-labelledby="career-responsibility-title">
      <img src="assets/images/career/ORLEN_Nowotna_farms_wind.jpg" alt="Wind turbines at the Nowotna wind farm" loading="lazy">
      <div class="career-banner__shade"></div>
      <div class="career-banner__copy page-width">
        <p class="career-kicker">Responsibility</p>
        <h2 id="career-responsibility-title">Responsibility is a part of our business strategy</h2>
        <p>Responsible business practices are part of our strategy. We work to be a considerate employer while helping transform the energy sector.</p>
        <a class="career-link career-link--light" href="sustainability.html">More <span aria-hidden="true">&nearr;</span></a>
      </div>
    </section>

    <section class="career-offers page-width" id="opportunities" aria-labelledby="career-offers-title">
      <div class="career-offers__heading"><p class="career-kicker">Explore opportunities</p><h2 id="career-offers-title">Offers for You</h2></div>
      <article class="career-offer">
        <div class="career-offer__media"><img src="assets/images/career/People_on_red_sofas.jpg" alt="People talking on red sofas" loading="lazy"></div>
        <div class="career-offer__copy">
          <p class="career-kicker">Offers</p>
          <h3>Internships and work placements</h3>
          <p>Put your knowledge into practice, learn from experienced colleagues and explore where your skills could take you.</p>
          <button class="career-link" type="button" data-career-detail="internships">More <span aria-hidden="true">&nearr;</span></button>
        </div>
      </article>
    </section>

    <dialog class="career-dialog" id="career-detail-dialog" aria-labelledby="career-dialog-title">
      <button class="career-dialog__close" type="button" aria-label="Close details">&times;</button>
      <p class="career-kicker" id="career-dialog-kicker"></p>
      <h2 id="career-dialog-title"></h2>
      <div id="career-dialog-copy"></div>
      <a class="career-dialog__contact" href="report-question-or-complaint.html">Contact us <span aria-hidden="true">&rarr;</span></a>
    </dialog>
  `;

  document.querySelectorAll(".primary-nav a, .mobile-menu nav a").forEach((link) => {
    const isCareer = link.getAttribute("href") === "career.html";
    link.classList.toggle("active", isCareer);
    if (isCareer) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const details = {
    possibilities: {
      kicker: "Why ORLEN",
      title: "Endless possibilities",
      copy: [
        "ORLEN brings together professionals from many specialisations. Business, engineering, technology and operations teams all contribute to projects that matter.",
        "The scale of the Group creates opportunities to work across disciplines, locations and stages of your career."
      ]
    },
    development: {
      kicker: "Growth",
      title: "Development starts with you",
      copy: [
        "We support learning through training, workshops, conferences, professional projects and collaboration with experienced colleagues.",
        "A changing energy sector brings new challenges. We want every employee to have the skills and confidence to meet them."
      ]
    },
    benefits: {
      kicker: "Benefits",
      title: "Support for what matters",
      copy: [
        "Our benefit areas include health and sport, family, everyday comfort, future planning and personal passions.",
        "Individual benefits can differ by company and role. Ask the recruitment team about the package for an opportunity that interests you."
      ]
    },
    internships: {
      kicker: "Offers",
      title: "Internships and work placements",
      copy: [
        "Internships offer a chance to build practical experience, work with specialists and take part in real projects.",
        "Current vacancies are not mirrored in this standalone site. Use the local contact page to ask about available opportunities."
      ]
    }
  };

  const dialog = document.getElementById("career-detail-dialog");
  const closeButton = dialog.querySelector(".career-dialog__close");
  let lastTrigger = null;

  document.querySelectorAll("[data-career-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = details[button.dataset.careerDetail];
      if (!item) return;
      lastTrigger = button;
      dialog.querySelector("#career-dialog-kicker").textContent = item.kicker;
      dialog.querySelector("#career-dialog-title").textContent = item.title;
      const copy = dialog.querySelector("#career-dialog-copy");
      copy.replaceChildren(...item.copy.map((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
      }));
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => lastTrigger?.focus());
})();

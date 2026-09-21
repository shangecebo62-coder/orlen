const footerPageKey = document.body.dataset.footerPage || "information";

const footerPageConfig = {
  tenders: {
    title: "Tenders and supplies",
    eyebrow: "For business",
    lead: "Procurement information, supplier resources and current cooperation opportunities in one local place.",
    hero: "assets/images/business/hero.jpeg"
  },
  vitay: {
    title: "VITAY Program",
    eyebrow: "For you",
    lead: "Collect points during everyday purchases and exchange them for rewards, discounts or support for charity.",
    hero: "assets/images/retail/app-orlen-vitay.jpeg"
  },
  press: {
    title: "Press pack",
    eyebrow: "About us",
    lead: "A clear, locally available library of ORLEN press materials and visual themes.",
    hero: "assets/investors/press-release.jpeg"
  },
  contact: {
    title: "Contact",
    eyebrow: "Questions and complaints",
    lead: "Choose the right contact channel or prepare an enquiry through the local form below.",
    hero: "assets/images/retail/contact.jpeg"
  },
  information: {
    title: "Site information",
    eyebrow: "ORLEN Group",
    lead: "Browse the local sitemap, privacy information, legal disclaimer and personal-data guidance.",
    hero: "assets/images/sustainability/hero.jpg"
  }
};

const config = footerPageConfig[footerPageKey];
document.title = `${config.title} | ORLEN`;

const headerMarkup = `
<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header" id="site-header"><div class="header-shell">
  <a class="brand" href="index.html" aria-label="ORLEN homepage"><img class="brand-overlay" src="assets/images/orlen-logo-white.png" alt="ORLEN"><img class="brand-solid" src="assets/images/orlen-logo-alt.jpg" alt="" aria-hidden="true"></a>
  <nav class="utility-nav" aria-label="Utility navigation"><button class="utility-button" type="button" data-panel-open="group-panel"><span>ORLEN Group</span></button><a href="report-question-or-complaint.html"><span>Contact</span></a><button class="utility-button language-trigger" type="button" aria-expanded="false" aria-controls="language-menu"><span>English</span><span>⌄</span></button><div class="language-menu" id="language-menu" hidden><a href="#" data-language="pl">Polski</a><a class="active" href="#" data-language="en" aria-current="page">English</a></div></nav>
  <nav class="primary-nav" aria-label="Primary navigation"><a href="what-we-do.html">About Us</a><a href="retail-offer.html">For you</a><a href="business-offer.html">For business</a><a href="sustainability.html">Sustainability</a><a href="investor-relations.html">Investor relations</a><a href="#" data-local-only="true">Career</a></nav>
  <div class="header-actions"><button class="icon-button search-trigger" type="button" aria-label="Open search" data-panel-open="search-panel"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.3 4.3"/></svg></button><button class="icon-button menu-trigger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button></div>
</div></header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true"><nav><a href="what-we-do.html"><span>About Us</span><span>→</span></a><a href="retail-offer.html"><span>For you</span><span>→</span></a><a href="business-offer.html"><span>For business</span><span>→</span></a><a href="sustainability.html"><span>Sustainability</span><span>→</span></a><a href="investor-relations.html"><span>Investor relations</span><span>→</span></a><a href="#" data-local-only="true"><span>Career</span><span>→</span></a></nav><div class="mobile-utility"><button type="button" data-panel-open="group-panel">ORLEN Group</button><a href="report-question-or-complaint.html">Contact</a><a href="#" data-language-toggle data-language="pl">Polski</a></div></div>
<aside class="side-panel" id="group-panel" aria-hidden="true"><button class="panel-close" type="button" aria-label="Close" data-panel-close>×</button><p class="eyebrow">Companies</p><h2>ORLEN Group</h2><div class="group-links"><a href="anwil.html">ANWIL</a><a href="baltic-power.html">Baltic Power</a><a href="exalo-drilling.html">Exalo Drilling</a><a href="geofizyka-torun.html">Geofizyka Toruń</a><a href="grupa-energa.html">Grupa Energa</a><a href="orlen-baltics-retail.html">ORLEN Baltics Retail</a><a href="orlen-deutschland.html">ORLEN Deutschland</a><a href="orlen-paliwa.html">ORLEN Paliwa</a><a href="orlen-petrobaltic.html">ORLEN Petrobaltic</a><a href="orlen-unipetrol.html">ORLEN Unipetrol</a><a href="upstream-canada.html">ORLEN Upstream Canada</a><a href="upstream-norway.html">ORLEN Upstream Norway</a><a href="upstream-poland.html">ORLEN Upstream Poland</a></div></aside>
<section class="search-panel" id="search-panel" aria-hidden="true"><button class="panel-close" type="button" aria-label="Close" data-panel-close>×</button><div class="search-inner"><p class="eyebrow">Search ORLEN</p><h2 id="search-title">What are you looking for?</h2><form class="search-form" id="search-form"><input id="site-search" name="q" type="search" placeholder="Search"><button type="submit" aria-label="Submit search">→</button></form><p class="search-message" id="search-message" aria-live="polite"></p><div class="quick-links"><span>Shortcuts</span><a href="retail-offer.html">Retail offer</a><a href="business-offer.html">Business offer</a><a href="strategy-2035.html">Strategy 2035</a></div></div></section><div class="panel-backdrop" aria-hidden="true"></div>`;

const footerMarkup = `
<footer class="site-footer" id="site-footer"><div class="footer-main page-width"><div class="footer-brand"><img src="assets/images/orlen-logo-alt.jpg" alt="ORLEN"><p>Copyright © 1996-2025<br>All rights reserved</p></div><div class="footer-column"><button class="footer-heading" type="button" aria-expanded="true">Shortcuts <span>+</span></button><div class="footer-links"><a href="business-offer.html">For business</a><a href="tenders-and-supplies.html">Tenders and supplies</a><a href="fuel-stations.html">Fuel stations</a><a href="vitay-program.html">VITAY Program</a></div></div><div class="footer-column"><button class="footer-heading" type="button" aria-expanded="true">About the company <span>+</span></button><div class="footer-links"><a href="our-vision.html">Our vision</a><a href="press-pack.html">Press-pack</a><a href="report-question-or-complaint.html">Report a question or complaint</a></div></div><nav class="footer-social" aria-label="Social media"><a href="#" aria-disabled="true" tabindex="-1" aria-label="Facebook">f</a><a href="#" aria-disabled="true" tabindex="-1" aria-label="LinkedIn">in</a><a href="#" aria-disabled="true" tabindex="-1" aria-label="X">X</a><a href="#" aria-disabled="true" tabindex="-1" aria-label="YouTube">▶</a><a href="#" aria-disabled="true" tabindex="-1" aria-label="TikTok">♪</a></nav></div><div class="footer-bottom page-width"><a href="site-information.html#sitemap">Sitemap</a><a href="site-information.html#privacy-policy">Privacy policy</a><a href="site-information.html#legal-disclaimer">Legal disclaimer</a><a href="site-information.html#personal-data">Personal data</a><a class="back-to-top" href="#main-content">Back to top ↑</a></div></footer>`;

const heroMarkup = `<section class="fp-hero"><img src="${config.hero}" alt=""><div class="fp-hero__content page-width"><p class="fp-kicker">${config.eyebrow}</p><h1>${config.title}</h1><p class="fp-hero__lead">${config.lead}</p></div></section>`;

const tendersMarkup = `
<section class="fp-section fp-section--soft"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Procurement</p><h2>Work with ORLEN</h2></div><p>The procurement area brings together enquiries concerning goods and services, announcements for bidders, supplier standards and purchasing plans. Select a section to explore the locally available information.</p></div>
<div class="fp-tabs" role="tablist" aria-label="Procurement sections"><button class="fp-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="tenders-panel" data-tab="tenders-panel">Tenders</button><button class="fp-tab" type="button" role="tab" aria-selected="false" aria-controls="supplies-panel" data-tab="supplies-panel">Supplies</button></div>
<div class="fp-panel" id="tenders-panel" role="tabpanel"><div class="fp-card-grid"><article class="fp-card"><small>Connect procurement platform</small><h3>Purchase of goods and services</h3><p>Review how procurement enquiries are organised and what suppliers should prepare before participating.</p><button class="fp-action" type="button" data-info="procurement">More <span>→</span></button></article><article class="fp-card"><small>For bidders and suppliers</small><h3>Current announcements</h3><p>Understand the announcement process, submission requirements and the information expected from bidders.</p><button class="fp-action" type="button" data-info="announcements">More <span>→</span></button></article></div></div>
<div class="fp-panel" id="supplies-panel" role="tabpanel" hidden><div class="fp-card-grid"><article class="fp-card"><small>Responsible procurement</small><h3>Supplier Code of Conduct</h3><p>Environmental, social and ethical expectations are embedded in ORLEN procurement standards.</p><button class="fp-action" type="button" data-info="supplier-code">More <span>→</span></button></article><article class="fp-card"><small>Planning</small><h3>Purchasing plans</h3><p>Explore the principal stages used to plan purchases and establish long-term supplier cooperation.</p><button class="fp-action" type="button" data-info="purchasing-plans">More <span>→</span></button></article></div></div></div></section>`;

const vitayMarkup = `
<section class="fp-section"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Loyalty program</p><h2>Join in one of three ways</h2></div><p>VITAY enables customers to collect points for selected purchases at ORLEN stations. Points can be exchanged for rewards and discount coupons or donated to charity initiatives.</p></div><div class="fp-steps"><article class="fp-step"><span>01</span><h3>Create your local VITAY profile</h3></article><article class="fp-step"><span>02</span><h3>Use the ORLEN VITAY mobile experience</h3></article><article class="fp-step"><span>03</span><h3>Collect a card at an ORLEN fuel station</h3></article></div></div></section>
<section class="fp-section fp-section--soft"><div class="fp-split page-width"><div class="fp-split__image"><img src="assets/images/retail/app-orlen-vitay.jpeg" alt="ORLEN VITAY mobile application"></div><div class="fp-split__copy"><p class="fp-kicker">Thinking about you</p><h2>Points, navigation and mobile convenience</h2><p>The VITAY experience brings the loyalty card, station navigation, coupons and selected payments together in one place.</p><a class="fp-action fp-action--line" href="retail-offer.html#mobile-apps">Explore mobile apps <span>→</span></a></div></div></section>
<section class="fp-section"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Rewards</p><h2>More ways to collect</h2></div><p>Points can be collected on fuel, car-wash services, coffee and snacks, while special offers recognise highly engaged customers.</p></div><div class="fp-card-grid"><article class="fp-card"><small>At the station</small><h3>Fuel, coffee and snacks</h3><p>Collect points during eligible purchases at ORLEN stations and Stop.Cafe points.</p><a class="fp-action fp-action--line" href="stop-cafe.html">Explore Stop.Cafe <span>→</span></a></article><article class="fp-card"><small>Exclusive offers</small><h3>Super VITAY and VERVA VITAY</h3><p>Dedicated clubs provide selected offers for loyal customers and enthusiasts of VERVA fuels.</p><a class="fp-action fp-action--line" href="fuel-stations.html">Find a station <span>→</span></a></article></div></div></section>`;

const mediaCards = [
  ["Research & development","assets/images/energy-transition/modern-industry.jpeg","media-rnd"],
  ["CSR","assets/images/sustainability/community.jpeg","media-csr"],
  ["Power engineering","assets/images/sustainability/energy-transition.jpeg","media-power"],
  ["Production & refinery","assets/images/what-we-do/refinery.jpg","media-refinery"],
  ["Petrol stations","assets/images/retail/orlen-station.jpg","media-stations"],
  ["Transportation","assets/images/for-you.jpg","media-transport"],
  ["Upstream","assets/images/what-we-do/upstream.jpg","media-upstream"],
  ["Management Board","assets/images/what-we-do/employees.png","media-board"]
];
const pressMarkup = `<section class="fp-section fp-section--soft"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Media centre</p><h2>Downloadable press materials</h2></div><p>Browse the principal image themes used in ORLEN communications. Each gallery opens locally and does not redirect to the source website.</p></div><div class="fp-media-grid">${mediaCards.map(([title,image,key])=>`<button class="fp-media-card" type="button" data-info="${key}"><img src="${image}" alt=""><div><small>Press gallery</small><strong>${title}</strong></div></button>`).join("")}</div></div></section>`;

const contactMarkup = `
<section class="fp-section"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Contact channels</p><h2>How can we help?</h2></div><p>Select the contact area that best matches your request. Phone numbers and email details remain available directly on this standalone page.</p></div><div class="fp-contact-grid"><article class="fp-contact-card"><h3>FLOTA Program</h3><a href="tel:+447378347853">+44 7378347853</a><span>For landline phones</span><a href="tel:+447378347853">+44 7378347853</a><span>For mobile phones</span><a href="mailto:flota@orlen.pl">flota@orlen.pl</a></article><article class="fp-contact-card"><h3>Website and data</h3><a href="mailto:webmaster@orlen.pl">webmaster@orlen.pl</a><span>Website issues</span><strong>Andrzej Kamiński</strong><span>Data Protection Officer</span></article></div></div></section>
<section class="fp-section fp-section--soft"><div class="page-width"><div class="fp-heading"><div><p class="fp-kicker">Local form</p><h2>Make an enquiry or complaint</h2></div><p>Complete the form below. It is handled locally in this standalone demonstration and will provide an on-screen reference without opening another website.</p></div><form class="fp-form" id="local-contact-form" novalidate><div class="fp-field fp-field--wide"><label for="contact-topic">Topic</label><select id="contact-topic" required><option value="">Choose a topic</option><option>Fuel station service</option><option>VITAY Program</option><option>FLOTA Program</option><option>Offer and products</option><option>Website issue</option><option>Other</option></select></div><div class="fp-field"><label for="contact-name">First name</label><input id="contact-name" autocomplete="given-name" required></div><div class="fp-field"><label for="contact-surname">Last name</label><input id="contact-surname" autocomplete="family-name" required></div><div class="fp-field"><label for="contact-email">Email</label><input id="contact-email" type="email" autocomplete="email" required></div><div class="fp-field"><label for="contact-phone">Phone (optional)</label><input id="contact-phone" type="tel" autocomplete="tel"></div><div class="fp-field fp-field--wide"><label for="contact-message">Message</label><textarea id="contact-message" required></textarea></div><label class="fp-check"><input type="checkbox" required><span>I confirm that the details entered above may be used to prepare this local enquiry.</span></label><button class="fp-action" type="submit">Send locally <span>→</span></button><p class="fp-form-message" role="status" aria-live="polite"></p></form></div></section>`;

const siteMapGroups = [
  ["About us",[["What we do","what-we-do.html"],["Strategy 2035","strategy-2035.html"],["Our vision","our-vision.html"],["Press releases","press-releases.html"],["Press pack","press-pack.html"]]],
  ["For you",[["Retail offer","retail-offer.html"],["Fuel stations","fuel-stations.html"],["E-mobility","e-mobility.html"],["Stop.Cafe","stop-cafe.html"],["VITAY Program","vitay-program.html"]]],
  ["For business",[["Business offer","business-offer.html"],["Fuels","fuels.html"],["Fleet cards","fleet-cards.html"],["Tenders and supplies","tenders-and-supplies.html"]]],
  ["Sustainability",[["Sustainability","sustainability.html"],["Energy transition","energy-transition.html"],["Sustainability strategy","sustainability-strategy.html"],["Circular economy","circular-economy.html"]]],
  ["Investors",[["Investor relations","investor-relations.html"],["Annual Report 2025","annual-report-2025.html"],["Company Overview","company-overview.html"],["CEE Energy Outlook","cee-energy-outlook.html"]]],
  ["Help",[["Contact and complaints","report-question-or-complaint.html"],["Privacy policy","site-information.html#privacy-policy"],["Personal data","site-information.html#personal-data"]]]
];
const informationMarkup = `
<nav class="fp-info-nav" aria-label="Site information sections"><div class="page-width"><a href="#sitemap">Sitemap</a><a href="#privacy-policy">Privacy policy</a><a href="#legal-disclaimer">Legal disclaimer</a><a href="#personal-data">Personal data</a></div></nav>
<section class="fp-info-section page-width" id="sitemap"><p class="fp-kicker">Navigation</p><h2>Sitemap</h2><div class="fp-sitemap-grid">${siteMapGroups.map(([title,links])=>`<div class="fp-sitemap-group"><h3>${title}</h3>${links.map(([label,href])=>`<a href="${href}">${label}</a>`).join("")}</div>`).join("")}</div></section>
<section class="fp-info-section page-width" id="privacy-policy"><p class="fp-kicker">Website information</p><h2>Privacy policy</h2><div class="fp-info-copy"><h3>Privacy and the use of local storage</h3><p>This standalone website presents ORLEN-related information using locally stored pages and assets. It does not require visitors to leave the clone to use its footer. Browser storage may be used only for small interface preferences created by local interactions.</p><h3>Technical information</h3><p>When a website is hosted, the hosting environment may process standard technical information such as an IP address, browser type and requested page for security and delivery purposes. This local clone does not include advertising or cross-site tracking scripts.</p><button class="fp-action" type="button" data-cookie-choice="essential">Use essential storage only</button> <button class="fp-action fp-action--line" type="button" data-cookie-choice="clear">Clear local preference</button><p class="fp-form-message" data-cookie-message aria-live="polite"></p></div></section>
<section class="fp-info-section page-width" id="legal-disclaimer"><p class="fp-kicker">Terms of use</p><h2>Legal disclaimer</h2><div class="fp-info-copy"><p>Content on this standalone demonstration is provided for general information. Names, trademarks and referenced materials remain the property of their respective owners. The pages should not be treated as commercial, investment or legal advice.</p><p>Information may be updated as the project develops. No guarantee is made that every item remains complete or current, and users should independently verify information before relying on it for business decisions.</p></div></section>
<section class="fp-info-section page-width" id="personal-data"><p class="fp-kicker">Data protection</p><h2>Personal data</h2><div class="fp-info-copy"><p>Personal data should be processed lawfully, fairly and transparently, in line with applicable data-protection rules including the GDPR where relevant.</p><h3>Your choices</h3><ul><li>Request access to personal data concerning you.</li><li>Request correction, deletion or restriction where the applicable conditions are met.</li><li>Object to processing based on legitimate interests.</li><li>Withdraw consent without affecting earlier lawful processing.</li><li>Contact the appropriate supervisory authority if you believe your rights have been infringed.</li></ul><h3>Data Protection Officer</h3><p>Questions concerning ORLEN data protection may be directed to <a href="mailto:daneosobowe@orlen.pl">daneosobowe@orlen.pl</a> or sent in writing to ORLEN S.A., ul. Chemików 7, 09-411 Płock, marked “Data Protection Officer”.</p></div></section>`;

const pageMarkup = {tenders:tendersMarkup,vitay:vitayMarkup,press:pressMarkup,contact:contactMarkup,information:informationMarkup}[footerPageKey];

document.body.innerHTML = `${headerMarkup}<main id="main-content">${heroMarkup}${pageMarkup}</main>${footerMarkup}<dialog class="fp-dialog" id="fp-dialog" aria-labelledby="fp-dialog-title"><div class="fp-dialog__body"><button class="fp-dialog__close" type="button" aria-label="Close">×</button><p class="fp-kicker">Local information</p><h2 id="fp-dialog-title"></h2><div data-dialog-copy></div><img data-dialog-image alt="" hidden></div></dialog>`;

const infoContent = {
  procurement:["Purchase of goods and services","Procurement enquiries bring together the scope of work, participation conditions, schedules and the documents suppliers need to prepare. This local overview keeps the process visible without opening an external platform."],
  announcements:["Announcements for bidders and suppliers","Announcements typically describe the purchasing need, deadlines, eligibility requirements and contact route. Suppliers should review each requirement carefully before preparing a response."],
  "supplier-code":["Supplier Code of Conduct","ORLEN procurement standards expect lawful, ethical and responsible conduct. Key themes include human rights, safe work, environmental responsibility, fair competition and transparent business practices."],
  "purchasing-plans":["Purchasing plans","Purchasing plans help potential suppliers understand likely categories of demand and prepare their capabilities. Final requirements and schedules may change as operational needs develop."],
  "media-rnd":["Research & development","Press imagery covering laboratories, technology, innovation and the development of lower-emission energy solutions.","assets/images/energy-transition/modern-industry.jpeg"],
  "media-csr":["CSR","Materials illustrating community partnerships, responsible business and ORLEN social initiatives.","assets/images/sustainability/community.jpeg"],
  "media-power":["Power engineering","Images related to generation assets, grids, renewable projects and the regional energy transition.","assets/images/sustainability/energy-transition.jpeg"],
  "media-refinery":["Production & refinery","Refining, industrial infrastructure and production assets across the ORLEN Group.","assets/images/what-we-do/refinery.jpg"],
  "media-stations":["Petrol stations","Modern station formats, retail services and customer-facing infrastructure.","assets/images/retail/orlen-station.jpg"],
  "media-transport":["Transportation","Mobility, logistics and services that accompany customers on their journeys.","assets/images/for-you.jpg"],
  "media-upstream":["Upstream","Exploration, production and international upstream operations.","assets/images/what-we-do/upstream.jpg"],
  "media-board":["Management Board","Corporate portraits and people-focused materials for business communications.","assets/images/what-we-do/employees.png"]
};

document.querySelectorAll("[data-tab]").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll("[data-tab]").forEach(button=>{const active=button===tab;button.classList.toggle("is-active",active);button.setAttribute("aria-selected",String(active));});
  document.querySelectorAll(".fp-panel").forEach(panel=>panel.hidden=panel.id!==tab.dataset.tab);
}));

const dialog = document.querySelector("#fp-dialog");
document.querySelectorAll("[data-info]").forEach(button=>button.addEventListener("click",()=>{
  const [title,copy,image] = infoContent[button.dataset.info];
  dialog.querySelector("#fp-dialog-title").textContent=title;
  dialog.querySelector("[data-dialog-copy]").innerHTML=`<p>${copy}</p>`;
  const dialogImage=dialog.querySelector("[data-dialog-image]");
  if(image){dialogImage.src=image;dialogImage.alt=title;dialogImage.hidden=false;}else{dialogImage.hidden=true;dialogImage.removeAttribute("src");}
  dialog.showModal();
}));
dialog.querySelector(".fp-dialog__close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});

const contactForm=document.querySelector("#local-contact-form");
if(contactForm) contactForm.addEventListener("submit",event=>{
  event.preventDefault();
  const message=contactForm.querySelector(".fp-form-message");
  if(!contactForm.checkValidity()){contactForm.reportValidity();message.textContent="Please complete all required fields.";return;}
  const reference=`ORL-${new Date().toISOString().slice(0,10).replaceAll("-","")}-${Math.floor(1000+Math.random()*9000)}`;
  message.textContent=`Thank you. Your local enquiry reference is ${reference}.`;
  contactForm.reset();
});

document.querySelectorAll("[data-cookie-choice]").forEach(button=>button.addEventListener("click",()=>{
  const message=document.querySelector("[data-cookie-message]");
  if(button.dataset.cookieChoice==="clear"){localStorage.removeItem("orlen-storage-choice");message.textContent="The local preference has been cleared.";}
  else{localStorage.setItem("orlen-storage-choice","essential");message.textContent="Essential-storage preference saved on this device.";}
}));
if(location.hash){
  window.addEventListener("load",()=>{
    const target=document.querySelector(location.hash);
    if(target) requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
  });
}

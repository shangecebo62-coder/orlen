(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  document.title = "Our fuel stations | ORLEN";
  document.querySelector(".site-header")?.classList.add("force-solid");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "retail-offer.html");
  });

  const serviceLabels = {
    stop: "Stop Cafe",
    ev: "Electric car chargers",
    tir: "TIR fuel",
    autoWash: "Automatic wash",
    touchless: "No-touch wash",
    truckWash: "Truck wash",
    accessible: "Facilities for the disabled",
    adblue: "ADBLUE from the distributor",
    changing: "Changing table",
    family: "Large Family Card",
    wifi: "WiFi",
    pay: "ORLEN Pay",
    baby: "Baby Room",
    hydrogen: "Hydrogen fuel"
  };

  const primaryFilters = ["stop", "ev", "tir", "autoWash", "touchless", "truckWash", "accessible", "adblue", "changing", "family", "wifi", "pay"];
  const extraFilters = ["baby", "hydrogen"];

  const stations = [
    { id: 1, name: "ORLEN Warszawa Centrum", city: "Warszawa", address: "al. Jana Pawła II 25", lat: 52.2332, lng: 21.0047, open: "Open 24 hours", services: ["stop","ev","autoWash","accessible","changing","family","wifi","pay"] },
    { id: 2, name: "ORLEN Warszawa Południe", city: "Warszawa", address: "ul. Puławska 427", lat: 52.1508, lng: 21.0197, open: "Open 24 hours", services: ["stop","ev","tir","touchless","accessible","adblue","family","wifi","pay"] },
    { id: 3, name: "ORLEN Płock", city: "Płock", address: "ul. Chemików 7", lat: 52.5791, lng: 19.6827, open: "Open 24 hours", services: ["stop","ev","tir","truckWash","accessible","adblue","changing","wifi","pay","hydrogen"] },
    { id: 4, name: "ORLEN Gdańsk Wrzeszcz", city: "Gdańsk", address: "al. Grunwaldzka 258", lat: 54.3838, lng: 18.5901, open: "Open 24 hours", services: ["stop","ev","autoWash","touchless","accessible","family","wifi","pay"] },
    { id: 5, name: "ORLEN Kraków", city: "Kraków", address: "ul. Zakopiańska 62", lat: 50.0257, lng: 19.9327, open: "Open 24 hours", services: ["stop","ev","autoWash","accessible","changing","family","wifi","pay","baby"] },
    { id: 6, name: "ORLEN Poznań", city: "Poznań", address: "ul. Warszawska 231", lat: 52.4206, lng: 16.9905, open: "Open 24 hours", services: ["stop","tir","truckWash","accessible","adblue","family","wifi","pay"] },
    { id: 7, name: "ORLEN Wrocław", city: "Wrocław", address: "ul. Ślężna 88", lat: 51.0834, lng: 17.0322, open: "Open 24 hours", services: ["stop","ev","touchless","accessible","changing","family","wifi","pay"] },
    { id: 8, name: "ORLEN Łódź", city: "Łódź", address: "al. Piłsudskiego 141", lat: 51.7592, lng: 19.4951, open: "Open 24 hours", services: ["stop","ev","autoWash","accessible","family","wifi","pay","baby"] },
    { id: 9, name: "ORLEN Katowice", city: "Katowice", address: "ul. Murckowska 22", lat: 50.2461, lng: 19.0469, open: "Open 24 hours", services: ["stop","tir","truckWash","accessible","adblue","family","wifi","pay"] },
    { id: 10, name: "ORLEN Lublin", city: "Lublin", address: "ul. Zemborzycka 116", lat: 51.2053, lng: 22.5577, open: "Open 24 hours", services: ["stop","ev","autoWash","accessible","changing","family","wifi","pay"] },
    { id: 11, name: "ORLEN Szczecin", city: "Szczecin", address: "ul. Struga 31", lat: 53.3897, lng: 14.6551, open: "Open 24 hours", services: ["stop","ev","tir","touchless","accessible","adblue","wifi","pay"] },
    { id: 12, name: "ORLEN Białystok", city: "Białystok", address: "ul. Hetmańska 65", lat: 53.1277, lng: 23.1137, open: "Open 24 hours", services: ["stop","autoWash","accessible","changing","family","wifi","pay"] },
    { id: 13, name: "ORLEN Rzeszów", city: "Rzeszów", address: "ul. Warszawska 10", lat: 50.0508, lng: 21.9987, open: "Open 24 hours", services: ["stop","ev","touchless","accessible","family","wifi","pay"] },
    { id: 14, name: "ORLEN Toruń", city: "Toruń", address: "Szosa Lubicka 91", lat: 53.0228, lng: 18.6553, open: "Open 24 hours", services: ["stop","tir","autoWash","accessible","adblue","family","wifi","pay"] },
    { id: 15, name: "ORLEN Olsztyn", city: "Olsztyn", address: "ul. Towarowa 18", lat: 53.7812, lng: 20.5138, open: "Open 24 hours", services: ["stop","ev","touchless","accessible","changing","wifi","pay"] }
  ];

  const filterButtons = primaryFilters.map((key) => `<button class="station-filter" type="button" data-service="${key}" aria-pressed="false">${serviceLabels[key]}</button>`).join("");
  const extraFilterButtons = extraFilters.map((key) => `<button class="station-filter" type="button" data-service="${key}" aria-pressed="false">${serviceLabels[key]}</button>`).join("");
  const stationOptions = stations.map((station) => `<option value="${station.id}">${station.name} — ${station.address}</option>`).join("");

  main.outerHTML = `
    <main class="station-main" id="main-content">
      <div class="page-width">
        <nav class="station-breadcrumbs" aria-label="Breadcrumb">
          <a href="index.html">Homepage</a><span aria-hidden="true">›</span>
          <a href="retail-offer.html">For You</a><span aria-hidden="true">›</span>
          <span aria-current="page">Fuel stations</span>
        </nav>

        <header class="station-heading">
          <p>For You</p>
          <h1>Our fuel stations</h1>
        </header>

        <section class="station-locator" aria-label="ORLEN station finder">
          <div class="station-controls">
            <div class="station-tabs" role="tablist" aria-label="Station finder options">
              <button class="station-tab is-active" id="find-tab" type="button" role="tab" aria-selected="true" aria-controls="find-panel" data-tab="find">Find station</button>
              <button class="station-tab" id="route-tab" type="button" role="tab" aria-selected="false" aria-controls="route-panel" data-tab="route">Plan your route</button>
            </div>

            <div class="station-panel" id="find-panel" role="tabpanel" aria-labelledby="find-tab">
              <form id="station-search-form">
                <div class="station-search-row">
                  <button class="station-locate" type="button" id="station-locate" aria-label="Find stations near my current location" title="Use my location">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="1.5"/></svg>
                  </button>
                  <input id="station-search" type="search" autocomplete="off" placeholder="City, station or address" aria-label="Search by city, station or address">
                  <button class="station-search-submit" type="submit" aria-label="Search">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5"/></svg>
                  </button>
                </div>
              </form>
              <p class="station-status" id="station-status" aria-live="polite">Search by city or choose services available at the station.</p>

              <p class="station-filter-label">Station services</p>
              <div class="station-filter-list">${filterButtons}</div>
              <div class="station-filter-list station-filter-extra" id="station-filter-extra" hidden>${extraFilterButtons}</div>
              <button class="station-more-filters" id="station-more-filters" type="button" aria-expanded="false" aria-controls="station-filter-extra">Other options <span aria-hidden="true">⌄</span></button>

              <div class="station-results-heading">
                <h2>Nearby stations</h2>
                <span id="station-result-count">${stations.length} results</span>
              </div>
              <div class="station-results" id="station-results"></div>
            </div>

            <div class="station-panel" id="route-panel" role="tabpanel" aria-labelledby="route-tab" hidden>
              <form class="route-form" id="route-form">
                <div class="route-field">
                  <label for="route-from">Starting point</label>
                  <input id="route-from" type="text" list="route-city-list" placeholder="Enter a Polish city" required>
                  <datalist id="route-city-list">${[...new Set(stations.map((station) => station.city))].map((city) => `<option value="${city}"></option>`).join("")}</datalist>
                </div>
                <button class="route-location-button" id="route-location" type="button">Use my current location</button>
                <div class="route-field">
                  <label for="route-to">Destination station</label>
                  <select id="route-to" required><option value="">Choose a station</option>${stationOptions}</select>
                </div>
                <button class="route-submit" type="submit"><span>Show route preview</span><span aria-hidden="true">→</span></button>
              </form>
              <p class="station-status" id="route-status" aria-live="polite">Choose a starting city and an ORLEN station.</p>
              <div class="route-result" id="route-result" hidden></div>
            </div>
          </div>

          <div class="station-map-wrap">
            <div class="station-map-fallback"><strong>Station map</strong><br>The interactive map loads automatically when map tiles are available.</div>
            <div id="station-map" aria-label="Interactive map of ORLEN stations"></div>
            <div class="station-map-style" aria-label="Map style">
              <button class="is-active" type="button" data-map-style="street">Map</button>
              <button type="button" data-map-style="satellite">Satellite</button>
            </div>
            <p class="station-map-note">Local station directory with an interactive map. Route distances are planning estimates.</p>
          </div>
        </section>

        <section class="station-info-band" aria-label="Station finder help">
          <article class="station-info-item"><span>01</span><h2>Find what you need</h2><p>Filter stations by charging, food, vehicle services, accessibility and payment options.</p></article>
          <article class="station-info-item"><span>02</span><h2>Check the location</h2><p>Select a result to move the map directly to that station and view its address and opening information.</p></article>
          <article class="station-info-item"><span>03</span><h2>Plan your journey</h2><p>Compare your starting point with a selected station using the built-in local route preview.</p></article>
        </section>
      </div>
    </main>`;

  const activeFilters = new Set();
  const markerById = new Map();
  let selectedStationId = null;
  let currentPosition = null;
  let currentMarker = null;
  let routeLine = null;
  let streetLayer = null;
  let satelliteLayer = null;
  let map = null;

  const resultsElement = document.getElementById("station-results");
  const resultCount = document.getElementById("station-result-count");
  const statusElement = document.getElementById("station-status");
  const searchInput = document.getElementById("station-search");

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function filteredStations() {
    const query = normalize(searchInput.value);
    return stations.filter((station) => {
      const searchable = normalize(`${station.name} ${station.city} ${station.address}`);
      const queryMatches = !query || searchable.includes(query);
      const filtersMatch = [...activeFilters].every((service) => station.services.includes(service));
      return queryMatches && filtersMatch;
    });
  }

  function markerIcon(active) {
    return L.divIcon({
      className: `station-pin${active ? " is-active" : ""}`,
      html: '<span class="station-pin__mark"><span>ORLEN</span></span>',
      iconSize: [43, 49],
      iconAnchor: [21, 43],
      popupAnchor: [0, -43]
    });
  }

  function popupMarkup(station) {
    return `<div class="station-popup"><strong>${station.name}</strong><span>${station.address}<br>${station.city}</span><em>${station.open}</em></div>`;
  }

  function updateMarkers(list, fitMap) {
    if (!map) return;
    markerById.forEach((marker) => marker.removeFrom(map));
    markerById.clear();

    list.forEach((station) => {
      const marker = L.marker([station.lat, station.lng], { icon: markerIcon(station.id === selectedStationId), title: station.name })
        .bindPopup(popupMarkup(station));
      marker.on("click", () => selectStation(station.id, false));
      marker.addTo(map);
      markerById.set(station.id, marker);
    });

    if (fitMap && list.length) {
      if (list.length === 1) map.flyTo([list[0].lat, list[0].lng], 13, { duration: .7 });
      else map.fitBounds(L.latLngBounds(list.map((station) => [station.lat, station.lng])), { padding: [45, 45], maxZoom: 9 });
    }
  }

  function renderResults(options = {}) {
    const list = filteredStations();
    resultCount.textContent = `${list.length} ${list.length === 1 ? "result" : "results"}`;

    if (!list.length) {
      resultsElement.innerHTML = '<p class="station-empty">No stations match all selected options. Remove a filter or try another city.</p>';
    } else {
      resultsElement.innerHTML = list.map((station) => `
        <button class="station-result${station.id === selectedStationId ? " is-active" : ""}" type="button" data-station-id="${station.id}">
          <strong>${station.name}</strong>
          <small>${station.address}, ${station.city}<br>${station.open}</small>
        </button>`).join("");
    }

    updateMarkers(list, Boolean(options.fitMap));
    return list;
  }

  function selectStation(id, moveMap = true) {
    const station = stations.find((item) => item.id === Number(id));
    if (!station) return;
    selectedStationId = station.id;
    renderResults();
    const marker = markerById.get(station.id);
    if (moveMap && map) map.flyTo([station.lat, station.lng], 14, { duration: .75 });
    marker?.openPopup();
    document.getElementById("route-to").value = String(station.id);
  }

  function distanceKm(a, b) {
    const earthRadius = 6371;
    const toRadians = (degrees) => degrees * Math.PI / 180;
    const deltaLat = toRadians(b.lat - a.lat);
    const deltaLng = toRadians(b.lng - a.lng);
    const value = Math.sin(deltaLat / 2) ** 2 + Math.cos(toRadians(a.lat)) * Math.cos(toRadians(b.lat)) * Math.sin(deltaLng / 2) ** 2;
    return earthRadius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
  }

  function nearestStation(position) {
    return stations.reduce((nearest, station) => {
      const distance = distanceKm(position, station);
      return !nearest || distance < nearest.distance ? { station, distance } : nearest;
    }, null);
  }

  function requestLocation(onSuccess, messageElement) {
    if (!navigator.geolocation) {
      messageElement.textContent = "Location is not supported by this browser. Search by city instead.";
      return;
    }
    messageElement.textContent = "Checking your location…";
    navigator.geolocation.getCurrentPosition((position) => {
      currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
      if (map) {
        if (currentMarker) currentMarker.removeFrom(map);
        currentMarker = L.circleMarker([currentPosition.lat, currentPosition.lng], { radius: 8, color: "#fff", weight: 3, fillColor: "#2677c9", fillOpacity: 1 }).addTo(map).bindPopup("Your current location");
      }
      onSuccess(currentPosition);
    }, () => {
      messageElement.textContent = "We could not access your location. Allow location access or search by city.";
    }, { enableHighAccuracy: true, timeout: 9000, maximumAge: 60000 });
  }

  function switchTab(name) {
    document.querySelectorAll(".station-tab").forEach((button) => {
      const active = button.dataset.tab === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.getElementById("find-panel").hidden = name !== "find";
    document.getElementById("route-panel").hidden = name !== "route";
    window.setTimeout(() => map?.invalidateSize(), 0);
  }

  if (window.L) {
    streetLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 18,
      attribution: "Tiles &copy; Esri"
    });
    map = L.map("station-map", { center: [52.08, 19.35], zoom: 6, zoomControl: true, layers: [streetLayer] });
    map.attributionControl.setPrefix(false);
  } else {
    statusElement.textContent = "The station list is available, but the interactive map could not be loaded.";
  }

  document.getElementById("station-search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const list = renderResults({ fitMap: true });
    statusElement.textContent = list.length ? `${list.length} station${list.length === 1 ? "" : "s"} found.` : "No stations found. Try a broader search.";
    if (list.length === 1) selectStation(list[0].id);
  });

  searchInput.addEventListener("input", () => {
    if (!searchInput.value.trim()) {
      renderResults({ fitMap: true });
      statusElement.textContent = "Search by city or choose services available at the station.";
    }
  });

  document.querySelector(".station-controls").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    if (tab) switchTab(tab.dataset.tab);

    const filter = event.target.closest("[data-service]");
    if (filter) {
      const service = filter.dataset.service;
      if (activeFilters.has(service)) activeFilters.delete(service);
      else activeFilters.add(service);
      filter.setAttribute("aria-pressed", String(activeFilters.has(service)));
      const list = renderResults({ fitMap: true });
      statusElement.textContent = activeFilters.size ? `${list.length} station${list.length === 1 ? "" : "s"} offer all selected services.` : "All service filters cleared.";
    }

    const result = event.target.closest("[data-station-id]");
    if (result) selectStation(result.dataset.stationId);
  });

  document.getElementById("station-more-filters").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    event.currentTarget.querySelector("span").textContent = expanded ? "⌄" : "⌃";
    document.getElementById("station-filter-extra").hidden = expanded;
  });

  document.getElementById("station-locate").addEventListener("click", () => {
    requestLocation((position) => {
      const nearest = nearestStation(position);
      statusElement.textContent = `Nearest local station: ${nearest.station.name} — approximately ${nearest.distance.toFixed(1)} km away.`;
      selectStation(nearest.station.id, false);
      map?.fitBounds([[position.lat, position.lng], [nearest.station.lat, nearest.station.lng]], { padding: [75, 75], maxZoom: 12 });
    }, statusElement);
  });

  document.getElementById("route-location").addEventListener("click", () => {
    const routeStatus = document.getElementById("route-status");
    requestLocation(() => {
      document.getElementById("route-from").value = "My current location";
      routeStatus.textContent = "Current location selected. Now choose a destination station.";
    }, routeStatus);
  });

  document.getElementById("route-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const originValue = normalize(document.getElementById("route-from").value);
    const destination = stations.find((station) => station.id === Number(document.getElementById("route-to").value));
    const originStation = stations.find((station) => normalize(station.city) === originValue || normalize(station.name).includes(originValue) || normalize(station.address).includes(originValue));
    const origin = originValue === "my current location" ? currentPosition : originStation ? { lat: originStation.lat, lng: originStation.lng } : null;
    const routeStatus = document.getElementById("route-status");
    const routeResult = document.getElementById("route-result");

    if (!origin || !destination) {
      routeStatus.textContent = "Choose a city from the suggestions and select a destination station.";
      routeResult.hidden = true;
      return;
    }

    const directDistance = distanceKm(origin, destination);
    const estimatedDistance = Math.max(1, directDistance * 1.18);
    const estimatedMinutes = Math.max(5, Math.round(estimatedDistance / 68 * 60));
    routeStatus.textContent = "Route preview ready.";
    routeResult.hidden = false;
    routeResult.innerHTML = `<strong>Approx. ${estimatedDistance.toFixed(0)} km</strong><p>Estimated driving time: ${Math.floor(estimatedMinutes / 60) ? `${Math.floor(estimatedMinutes / 60)} h ` : ""}${estimatedMinutes % 60} min to ${destination.name}. This is an illustrative planning estimate, not turn-by-turn navigation.</p>`;

    if (map) {
      if (routeLine) routeLine.removeFrom(map);
      routeLine = L.polyline([[origin.lat, origin.lng], [destination.lat, destination.lng]], { color: "#d71920", weight: 5, opacity: .85, dashArray: "9 9" }).addTo(map);
      map.fitBounds(routeLine.getBounds(), { padding: [70, 70], maxZoom: 11 });
      markerById.get(destination.id)?.openPopup();
    }
  });

  document.querySelector(".station-map-style").addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-style]");
    if (!button || !map) return;
    document.querySelectorAll("[data-map-style]").forEach((item) => item.classList.toggle("is-active", item === button));
    if (button.dataset.mapStyle === "satellite") {
      if (streetLayer && map.hasLayer(streetLayer)) map.removeLayer(streetLayer);
      satelliteLayer?.addTo(map);
    } else {
      if (satelliteLayer && map.hasLayer(satelliteLayer)) map.removeLayer(satelliteLayer);
      streetLayer?.addTo(map);
    }
  });

  if (window.location.hash === "#plan-route") {
    switchTab("route");
  }

  const requestedService = window.location.hash === "#electric-car-chargers" ? "ev" : window.location.hash === "#stop-cafe" ? "stop" : null;
  if (requestedService) {
    activeFilters.add(requestedService);
    document.querySelector(`[data-service="${requestedService}"]`)?.setAttribute("aria-pressed", "true");
    statusElement.textContent = requestedService === "ev" ? "Showing stations with electric car chargers." : "Showing stations with ORLEN Stop.Cafe.";
  }

  renderResults({ fitMap: Boolean(requestedService) });
  window.setTimeout(() => map?.invalidateSize(), 100);
})();

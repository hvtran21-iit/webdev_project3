function init() {
  // Add your JavaScript between these two lines of code
  async function initMap() {
  // The location of Uluru
  const position = {lat: 10.82302, lng: 106.62965};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "Ho Chi Minh City",
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Ho Chi Minh City",
  });
  }

  initMap();
  }

window.addEventListener("load", init);

// Initialize and add the map
function initMap() {
    // The location of Leeds uni
    const leedsuni = { lat: 53.806814545321885, lng: -1.5549791557661776 };
    // The map, centered at Leeds uni
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: leedsuni,
      mapId: 'f6a7c0d51f114e7e',
    });
    // The marker, positioned at Leeds uni
    const marker = new google.maps.Marker({
      position: leedsuni,
      map: map,
    });
  }
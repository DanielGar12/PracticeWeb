//Hello Java

const initMap = () => {
    const location = {lat: 40.7128, lng: -74.0069};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location
    });

    new google.maps.Marker({
        position: location,
        map: map
    })

}
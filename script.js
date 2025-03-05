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


document.getElementById("demo").addEventListener("click", function(){
    
    this.style.color = (this.style.color === "red") ? "white" : "red";
});

document.getElementById("dare").addEventListener("click", function(){
    console.log("hello")
    this.style.color = (this.style.color === "white") ? "red" : "white"; 
});

console.log(getElementById("dare"))
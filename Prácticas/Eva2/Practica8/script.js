cartel = document.createElement("div");

cartel.innerHTML = "Hola caracola";
cartel.style.backgroundColor = "yellow";
cartel.style.position = "fixed";
cartel.style.width = "100px";
cartel.style.height = "80px";
cartel.style.top = "0";
cartel.style.left = "0";
document.body.appendChild(cartel);

document.addEventListener("mousemove", function(ev) {
    cartel.style.top = `${ev.clientY}px`;
    cartel.style.left = `${ev.clientX}px`;
});
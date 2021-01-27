let parrafo = document.createElement("p");
parrafo.innerHTML = "Soy el nuevo <strong>tercer</strong> párrafo";
document.getElementById("principal").insertBefore(parrafo,document.querySelectorAll("#principal p:nth-of-type(3)")[0]);
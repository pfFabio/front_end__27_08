const url = "https://api.thecatapi.com/v1/images/search?limit=10"

const container = document.getElementById("gatos");

const load = document.getElementById("load");

const spinner = document.getElementById("spinner");

function fecthcatimgs(){
    spinner.classList.remove("hidden");

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach (gato =>{
            const imgcontainer = document.createElement("div");
            imgcontainer.style.textAlign = "center";

            const img = document.createElement("img");
            img.src = gato.url;
            img.alt = "imagem do gato";

            const title = document.createElement("p");
            title.textContent = 'ID do gato: ${gato.id}';
            imgcontainer.appendChild(img);
            imgcontainer.appendChild(title);
            container.appendChild(imgcontainer);
        })
    })
    .catch(error=>console.error("Erro no servidor:", error))
    .finally(() => spinner.classList.add("hidden"))
}

load.addEventListener("click", fecthcatimgs);

fecthcatimgs();
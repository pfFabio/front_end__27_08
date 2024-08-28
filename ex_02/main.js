
//bota a URL numa variavel
const url = "https://api.thecatapi.com/v1/images/search?limit=10"

//trabalha a URL
fetch(url)

    //transforma o resultado da URL em json
    .then((Response) => Response.json())

    //trabalha os valores convertidos
    .then((data) => {

        //achando a div com ID "gatos"
        const container = document.getElementById("gatos");

        //pra cada elemento dentro da "data" faz os comandos abaixo
        data.forEach((cats) =>{

            //cria uma img
            const img = document.createElement('img');

            //atributos da imagem
            img.src = cats.url;
            img.out = "imagem dos gatos miau";
            img.style.width = "300px";
            img.style.height = "250px";
            img.style.margin = "10px";

            //faz a imagem entrar no img criado
            container.appendChild(img)
        })
    })

    //se houver erro ele printa na tela
    .catch((erro) => console.error(erro))


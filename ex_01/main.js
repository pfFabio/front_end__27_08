const url = "https://api.thecatapi.com/v1/images/search?limit=10"

fetch(url)
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error no servidor:"), error)

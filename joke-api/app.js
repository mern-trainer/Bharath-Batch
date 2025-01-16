const joke_api = "https://v2.jokeapi.dev/joke/Any"

const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const joke = document.getElementById("joke");

const handleJokeGenerate = async () => {
    fetch(joke_api).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.type === "twopart") {
            setup.innerHTML = data.setup;
            delivery.innerHTML = data.delivery;
            joke.innerHTML = ""
        }
        if(data.type === "single") {
            setup.innerHTML = "";
            delivery.innerHTML = "";
            joke.innerHTML = data.joke;
        }
    }).catch((error) => {
        console.log(error);
    })
}
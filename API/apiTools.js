// API/TMDBApi.js
const API_TOKEN = "07ae24ca6200464d8a8e1a4be7aa4110";

export function loadGames() {
    const url = "https://api.rawg.io/api/games?key="+API_TOKEN;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function loadGamesWithURL(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getGameDetail(id) {
    return fetch(
        "https://api.rawg.io/api/games/"+ id +"?key=" +
        API_TOKEN
    )
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

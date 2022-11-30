//ELEMENTOS HTML
const artistbutton = document.getElementById("artistbutton");
const albumbutton = document.getElementById("albumbutton");
const songbutton = document.getElementById("songbutton");

const artistsearch = document.getElementById("searchartist");
const albumsearch = document.getElementById("searchalbum");
const songsearch = document.getElementById("searchsong");

//MISC
const url = "api.genius.com/search?q=";

//FUNÇÕES
async function searchArtist () {
    try {
        let result =  await fetch(url+artistsearch.value, {"access_token":"mvuuc88HAvbKIJG1KTXE36CVxIp-TEI9YDeGeP_q5eVtYHkjemf8h5oYLjZJNb_c"});
        let js = await result.json();
        console.log(js);
    } catch {
        console.log(url+artistsearch.value);
    }
}

async function searchAlbum () {
    try {
        let result =  await fetch(url+albumsearch.value);
        let js = await result.json();
        console.log(js);
    } catch {
        console.log(url+albumsearch.value);
    }
}

async function searchSong () {
    try {
        let result =  await fetch(url+songsearch.value);
        let js = await result.json();
        console.log(js);
    } catch {
        console.log(url+songsearch.value);
    }
}

//RUNTIME
artistbutton.addEventListener("click", () => {searchArtist()} );
albumbutton.addEventListener("click", () => {searchAlbum()} );
songbutton.addEventListener("click", () => {searchSong()} );
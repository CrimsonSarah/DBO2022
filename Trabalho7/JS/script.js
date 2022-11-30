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
        let result =  await fetch(url+artistsearch.innerText);
        let js = await result.json();
        console.log(js);
    } catch {
        console.log(url+artistsearch.value);
    }
}

async function searchAlbum () {
    console.log("procura album");
}

async function searchSong () {
    console.log("procura musica");
}

//RUNTIME
artistbutton.addEventListener("click", () => {searchArtist()} );
albumbutton.addEventListener("click", () => {searchAlbum()} );
songbutton.addEventListener("click", () => {searchSong()} );
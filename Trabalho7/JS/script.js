//ELEMENTOS HTML
const artistbutton = document.getElementById("artistbutton");
const albumbutton = document.getElementById("albumbutton");
const songbutton = document.getElementById("songbutton");

const artistsearch = document.getElementById("searchartist");
const albumsearch = document.getElementById("searchalbum");
const songsearch = document.getElementById("searchsong");

const artistsection = document.querySelector(".artistsection");
const albumsection = document.querySelector(".albumsection");
const songsection = document.querySelector(".songsection");

//MISC
const url = "https://genius-song-lyrics1.p.rapidapi.com";
const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0781a58d5amshfba18b23e1e1e1bp11383cjsnfe351b5147f1',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
}

//FUNÇÕES
async function searchArtist () {
    let results = document.querySelectorAll(".artistsearchresult");
    results.forEach(element => {
        element.remove();
    });

    if (artistsearch.value != "") {
        try {
            let result = await fetch(url + "/search/multi?q=" + artistsearch.value, options);
            let js = await result.json();
            let apipath = js.response.sections[3].hits[0].result.api_path
            let result2 = await fetch(url + apipath, options);
            let js2 = await result2.json();

            let artistname = document.createElement("p");
            artistname.className = "artistsearchresult";
            artistsection.appendChild(artistname);
            artistname.innerHTML = js2.response.artist.name;

            let artistdescription = document.createElement("p");
            artistdescription.className = "artistsearchresult";
            artistsection.appendChild(artistdescription);
            artistdescription.innerHTML = js2.response.artist.description_preview;
        } catch {
            let results = document.querySelectorAll(".artistsearchresult");
            results.forEach(element => {
                element.remove();
            });

            let errormsg = document.createElement("p");
            errormsg.className = "artistsearchresult";
            artistsection.appendChild(errormsg);
            errormsg.innerHTML = "No artists found. Please try again in a few moments.";
        }
    } else {
        let results = document.querySelectorAll(".artistsearchresult");
        results.forEach(element => {
            element.remove();
        });

        let errormsg = document.createElement("p");
        errormsg.className = "artistsearchresult";
        artistsection.appendChild(errormsg);
        errormsg.innerHTML = "Please type something to search for.";
    }
}

async function searchAlbum () {
    let results = document.querySelectorAll(".albumsearchresult");
    results.forEach(element => {
        element.remove();
    });

    if (albumsearch.value != "") {
        try {
            let result = await fetch(url + "/search/multi?q=" + albumsearch.value, options);
            let js = await result.json();
            let apipath = js.response.sections[4].hits[0].result.api_path
            let result2 = await fetch(url + apipath, options);
            let js2 = await result2.json();
            console.log(js2);

            let albumname = document.createElement("p");
            albumname.className = "albumsearchresult";
            albumsection.appendChild(albumname);
            albumname.innerHTML = js2.response.album.full_title

            let albumrelease = document.createElement("p");
            albumrelease.className = "albumsearchresult";
            albumsection.appendChild(albumrelease);
            albumrelease.innerHTML = js2.response.album.release_date_components.day + "/" + js2.response.album.release_date_components.month + "/" + js2.response.album.release_date_components.year;

            let albumdescription = document.createElement("p");
            albumdescription.className = "albumsearchresult";
            albumsection.appendChild(albumdescription);
            albumdescription.innerHTML = js2.response.album.description_preview
        } catch {
            let results = document.querySelectorAll(".albumsearchresult");
            results.forEach(element => {
                element.remove();
            });

            let errormsg = document.createElement("p");
            errormsg.className = "albumsearchresult";
            albumsection.appendChild(errormsg);
            errormsg.innerHTML = "No albuns found. Please try again in a few moments.";
        }
    } else {
        let results = document.querySelectorAll(".albumsearchresult");
        results.forEach(element => {
            element.remove();
        });

        let errormsg = document.createElement("p");
        errormsg.className = "albumsearchresult";
        albumsection.appendChild(errormsg);
        errormsg.innerHTML = "Please type something to search for.";
    }
}

async function searchSong () {
    let results = document.querySelectorAll(".songsearchresult");
    results.forEach(element => {
        element.remove();
    });

    if(songsearch.value != "") {
        try {
            let result = await fetch(url + "/search/multi?q=" + songsearch.value, options);
            let js = await result.json();
            let result2 = await fetch(url + "/songs/" + js.response.sections[1].hits[0].result.id + "/lyrics", options);
            let js2 = await result2.json();

            let songname = document.createElement("p");
            songname.className = "songsearchresult";
            songsection.appendChild(songname);
            songname.innerHTML = js.response.sections[1].hits[0].result.full_title;

            let lyrics = document.createElement("p");
            lyrics.className = "songsearchresult";
            songsection.appendChild(lyrics);
            lyrics.innerHTML = js2.response.lyrics.lyrics.body.html;
        } catch {
            let results = document.querySelectorAll(".songsearchresult");
            results.forEach(element => {
                element.remove();
            });

            let errormsg = document.createElement("p");
            errormsg.className = "songsearchresult";
            songsection.appendChild(errormsg);
            errormsg.innerHTML = "No songs or lyrics found. Please try again in a few moments.";
        }
    } else {
        let results = document.querySelectorAll(".songsearchresult");
        results.forEach(element => {
            element.remove();
        });

        let errormsg = document.createElement("p");
        errormsg.className = "songsearchresult";
        songsection.appendChild(errormsg);
        errormsg.innerHTML = "Please type something to search for.";
    }
}

//RUNTIME
artistbutton.addEventListener("click", () => {searchArtist()} );
albumbutton.addEventListener("click", () => {searchAlbum()} );
songbutton.addEventListener("click", () => {searchSong()} );

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/4/search/movie?api_key=282f1ece5417d79b144a00c738e95a79&query="'

const form = document.getElementById("form")
const search = document.getElementById("input-area")
const cards = document.getElementById("cards")
const clearButton = document.getElementById("clear-button")

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function goToTMDb() {
    window.open("https://www.themoviedb.org/", "_blank")
}

const images = ["https://images.unsplash.com/photo-1612078340624-bd46c9bbeb71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=341&q=80",
    "https://images.unsplash.com/photo-1612107612209-1c8ac7ba78af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1608501773255-d8cd9e5ba968?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1607893407846-49905270209e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1607457661772-02cb7eb0511b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1609083517793-d173294303e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1604263957485-ef9988a9827e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1485724745104-ae0f55940bc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
    "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=396&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503776768674-0e612f631345?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1515375380578-a0587184cedd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
]

const randomImageNumber = Math.floor(Math.random() * images.length)
const randomBackground = 'url(' + images[randomImageNumber] + ')'

function showMovies(movies) {
    cards.innerHTML = ""

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date, id } = movie

        // const directorsName = await getCredits(CREDITS_URL);

        const card = document.createElement("div")
        card.classList.add("movie-card")
        card.innerHTML = `
            <div class= 'movie-image-container'>
                <div id="image-placeholder" style='background: ${randomBackground};' class='movie-image not-found'>Movie Poster Does Not Exist</div>    
                <img onerror="this.style.display='none'" src='${IMG_PATH + poster_path}' class="movie-image"'>
            </div>

            <div class="about-movie">
                <div class="name-director-imdb">
                    <div class="name-director">
                        <h2>${title}<span>${release_date.substring(0, 4)}</span></h2>
                        <div style="display: flex; flex-direction: row;" class="directors">
                            <h4 style="margin-right: 4px;">Directed by <h4 class="directors-name"></h4></h4>
                        </div>
                    </div>
                    <div class="imdb">
                        <h3>IMDb</h3>
                        <p>${vote_average}</p>
                    </div>
            </div>

            <div class="movie-details">
                ${overview || "<i>There's no overview for this movie. It might be a good one, check out what is more about it!</i>"}
            </div>

            <a href="https://www.imdb.com/find?q=${title}&ref_=nv_sr_sm" target="_blank">More About</a>

            <div class="delete-button">
                <button class="button delete">Delete</button>
            </div>
        </div>
        `
        const dName = card.querySelector(".directors-name")

        async function getCredits(url) {
            const res = await fetch(url)
            const data = await res.json()

            const directors = [];
            data.credits.crew.forEach(function (entry) {
                if (entry.job === 'Director') {
                    directors.push(entry.name);
                }
            })

            dName.textContent = directors.join(", ")
        }

        const CREDITS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=282f1ece5417d79b144a00c738e95a79&append_to_response=credits`
        getCredits(CREDITS_URL)

        cards.appendChild(card)

        clearButton.classList.remove("hidden")
    })
}

document.addEventListener("click", deleteMovie)

function deleteMovie(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.parentElement.remove()
        while (cards.childElementCount <= 0) {
            clearButton.classList.add("hidden")
            break
        }
    } else if (e.target.classList.contains("clear")) {
        while (cards.firstElementChild != null) {
            cards.firstElementChild.remove()
            clearButton.classList.add("hidden")
        }
    }
}

search.addEventListener("keyup", (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm != "") {
        getMovies(SEARCH_API + searchTerm)
    } else if (searchTerm === "") {
        while (cards.firstElementChild != null) {
            cards.firstElementChild.remove()
            clearButton.classList.add("hidden")
        }
    }
})
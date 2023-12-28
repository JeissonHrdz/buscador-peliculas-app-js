document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'af2272870ff6d9fa85c66f7fc26b0063';
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg =   'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')
   


function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value    
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(resoponse => displayMovies(resoponse.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''
    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontro la pelicula </p>'
        return
    }

    movies.forEach(movies => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movies.title
        
        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: '+ movies.release_date

        let overview = document.createElement('p')
        overview.textContent = movies.overview

        let posterPath = urlImg + movies.poster_path
        let poster  = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}
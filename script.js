// http://www.omdbapi.com/?i=tt3896198&apikey=b09bf149

const movieListEl = document.querySelector(".movie__list");
let searchTerm = "lord";

async function getMovies() {
  let searchTerm = document.getElementById("movie-search-box").value;
  console.log(searchTerm);

  const movies = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=b09bf149`
  );
  const moviesDataa = await movies.json();
  const moviesData = moviesDataa.Search;
  console.log(moviesData);
  movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}

function movieHTML(movie) {
  return `<div class="movie-card">
    <div class="movie-card__container">
      <figure class="fig">
        <img src="${movie.Poster}" alt="" class="movie__img" />
      </figure>
      <h2>${movie.Title}</h2>
      <h3>${movie.Year}</h3>
    </div>
  </div>`;
}


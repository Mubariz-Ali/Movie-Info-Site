
const searchButton = document.getElementById('SearchButton');
searchButton.addEventListener('click', async function () {
    const movieName = document.getElementById('MovieName').value;
    const yearLaunched = document.getElementById('MovieYear').value;
    const apiKey = '2ccdce76';

    let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

    if (yearLaunched) {
        apiUrl += `&y=${yearLaunched}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const movieList = document.getElementById('MovieList');

    if (data.Search) {
        movieList.innerHTML = '';
        movieList.innerHTML = data.Search.map(movie => `
        <li class="movie-item">
        <img src="${movie.Poster}" alt="${movie.Title} Poster" class="poster">
        <div class="movie-details">
            <p class="movie-title">${movie.Title}</p>
            <p class="movie-year">Year: ${movie.Year}</p>
        </div>
    </li>
        `).join('');
    } else {
        movieList.innerHTML = '<li>No results found</li>';
    }
});





// document.getElementById('SearchButton').addEventListener('click', async function (e) {
//     e.preventDefault();
    
//     const movieName = document.getElementById('MovieName').value;
//     const yearLaunched = document.getElementById('MovieYear').value;

//     const apiKey = '2ccdce76';
//     const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&y=${yearLaunched}`);
    
//     const data = await response.json();

//     const movieList = document.getElementById('MovieList');

//     if (data.Search) {
//         // Clear previous results
//         movieList.innerHTML = '';

//         // Map and insert movies as list items
//         movieList.innerHTML = data.Search.map(movie => `
//             <li>
//             <div class="movie-details">
//             <h1>${movie.Title}</h1>
//             <p>Year: ${movie.Year}</p>
//             </div>
//                 <img src="${movie.Poster}" alt="${movie.Title} Poster">
                
//             </li>
//         `).join('');
//     } else {
//         movieList.innerHTML = '<li>No results found</li>';
//     }
// });

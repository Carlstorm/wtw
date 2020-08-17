import GetMovies from "./GetMovieService.js";
let getMovie = new GetMovies();


export default class pickerseriveces {
    constructor() {
    }

    searchpick(input) {
        Promise.resolve(getMovie.DiscoverMovies(null, null, null, null, input)).then(function(movie) {
            document.getElementById("searchresultwrap").innerHTML = ""
            let lenght = 3
            if (movie.lenght < 3) {
                lenght = (movie.length-1)
            }
            for (let i = 0; i<lenght; i++) {
                document.getElementById("searchresultwrap").innerHTML += `
                    <div>
                    <div class="imgpart" style="background: url(${movie[i].image})"></div>
                    <div class="infpart">
                    <h3>${movie[i].title}</h3>
                    <p>${movie[i].release_date}</p>
                    </div>
                    </div>
                `
            }
            console.log(movie)
        })
    }

}
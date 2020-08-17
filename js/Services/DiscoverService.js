import GetMovies from "./GetMovieService.js";
let getMovie = new GetMovies();

export default class Discoverservice {
    constructor() {
        this.DiscoverHTML
    }

    async loadMovies(GenreID, pagenr) {
        let DiscoverHTML = "";
        Promise.resolve(getMovie.DiscoverMovies(GenreID, pagenr, null, "backdrop")).then(function(movie) {
            for (let i = 0; i<movie.length; i++) {
            let convertedRating = 100-(movie[i].vote_average*10)
            if(i & 1) {
            DiscoverHTML += `
            <div class="Dcontentwrap">
            <div class="Dcontent">
              <div class="Dinf" style="margin: 0 25px 0 0; text-align: right;">
                <h2>${movie[i].title}</h2>
                <p>${movie[i].release_date.slice(0,4)} ${movie[i].genre}</p>
                <div id="fdline"></div>
                <p id="fddesc">${movie[i].overview}</p>
                <div id="fdrating">
                <img alt="rating" id="mstar" src="./icons/stars.svg" style="clip-path: inset(0px ${convertedRating}% 0px 0%); right: 0;">
                <img alt="rating" id="bstar" src="./icons/stars.svg" style="right: 0;">
              </div>
              </div>
              <div class="Dimg" style="background: url(${movie[i].image})" ></div>
            </div>
          </div>
          <div id="searchbarBL2"></div>
            `;
            } else {
                DiscoverHTML += `
                <div class="Dcontentwrap">
                <div class="Dcontent">
                <div class="Dimg" style="background: url(${movie[i].image})" ></div>
                  <div class="Dinf"style="margin: 0 0 0 25px">
                    <h2>${movie[i].title}</h2>
                    <p>${movie[i].release_date.slice(0,4)} ${movie[i].genre}</p>
                    <div id="fdline"></div>
                    <p id="fddesc">${movie[i].overview}</p>
                    <div id="fdrating">
                    <img alt="rating" id="mstar" src="./icons/stars.svg" style="clip-path: inset(0px ${convertedRating}% 0px 0%);">
                    <img alt="rating" id="bstar" src="./icons/stars.svg">
                  </div>
                  </div>
                </div>
              </div>
              <div id="searchbarBL2"></div>
                `; 
            }
        }
        document.getElementById("dadadada").innerHTML = DiscoverHTML;
        document.getElementById("dadadada").style.transition = "0.4s";
        document.getElementById("dadadada").style.opacity = 1;
    })
    }

    getMovies(Pgenre, pagenr) {
      if (!pagenr) {
        pagenr = 1;
      }
      // console.log(Pgenre)
      document.getElementById("pagenr").innerHTML = pagenr;
      document.getElementById("dadadada").style.transition = "0s";
      document.getElementById("dadadada").style.opacity = 0;
      let dis = this
      Pgenre.classList.add("activeNi")
      for (let aktiveDgneres of document.getElementsByClassName("Dgenre")) {
          if (aktiveDgneres == Pgenre) {
              let pickedgenre = Pgenre.getAttribute("data-value")
              let pickedgenreId;
              fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
              .then((response) => {
                  return response.json();
              })
              .then(function(data) {
                  for (let i = 0; i<data.genres.length; i++) {
                      if (data.genres[i].name == pickedgenre) {
                          pickedgenreId = data.genres[i].id;
                      }
                  }
                  dis.loadMovies(pickedgenreId, pagenr);
              }
  
              )
         
          } else {
              aktiveDgneres.classList.remove("activeNi")
          }
      }
    }
}
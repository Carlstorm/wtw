import GetMovies from "./GetMovieService.js";
let getMovie = new GetMovies();

export default class Browseservice {
    constructor() {
        this.rows = 8;
        this.WW = false;
        this.ww = document.getElementById("moviedisplaywrap").clientWidth;
        this.DiscoverHTML = "";
        this.pagesToLoad = 1;
        this.loadedmovielenght = 0;
        this.hoverthing;
        this.picDgenreID
        this.mode = 1;
        this.nomoremovies = false;
    }

    async loadMovies(GenreID, pagenr, sortby, input) {
        let DiscoverHTML = "";
        let dis = this;
        Promise.resolve(getMovie.DiscoverMovies(GenreID, pagenr, sortby, "poster", input)).then(function(movie) {
            // console.log(movie)
            let i = 0;
            dis.nomoremovies = false;
            if (movie.length == 0) {
                dis.nomoremovies = true;
            }
            for (i; i<movie.length; i++) {
            let convertedRating = 100-(movie[i].vote_average*10)
            let release;
            if (!movie[i].release_date) {
                release = "no release date"
            } else {
                release = movie[i].release_date.slice(0,4);
            }





            DiscoverHTML += `
            <div class="BmovieDisplay dada${pagenr}" id="${movie[i].id}" onmouseover="hovermovie()" onmouseleave="hoverLmovie()">
            <div id="BMimg" style="background: url(${movie[i].image})" ></div>
            <div id="olay">
            <div id="olayinfwrap">
            <p id="BOinf">${movie[i].title}</p>
            <p id="BOyear">${release}</p>
            <div id="BoBline"></div> 
            <p id="BOgenre">${movie[i].genre}</p>
            <div id="BmRatingwrpa">
            <img alt="rating" id="mstar" src="./icons/stars.svg" style="clip-path: inset(0px ${convertedRating}% 0px 0%);">
            <img alt="rating" id="bstar" src="./icons/stars.svg">
            </div>
            </div>
            </div>
            </div>
                `; 
        }


            // if (window.location.hash == "#browse") {
            if (!dis.nomoremovies) {
                document.getElementById("windowchecker").innerHTML = `<p>Loading...</p>`
            } else {
                document.getElementById("windowchecker").style.opacity = 1;
                document.getElementById("windowchecker").innerHTML = `<p>NO MORE MOVIES</p>`
            }
            // }
        // if (i == movie.length) {
        //     // if (document.getElementById("windowchecker") != null) {
        //     //     var element = document.getElementById("windowchecker");
        //     //     element.parentNode.removeChild(element);
        //     // } else {
        //     //     DiscoverHTML += `<div id="windowchecker"></div>`
        //     // }
        //     if (window.location.hash == "#browse") {
        //     DiscoverHTML += `<div id="windowchecker"></div>`
        //     }
        // }
        document.getElementById("moviedisplaywrap").innerHTML += DiscoverHTML;
        // document.getElementById("moviedisplaywrap").style.transition = "0.4s";
        // document.getElementById("moviedisplaywrap").style.opacity = 1;
        // console.log(dis.loadedmovielenght)


        // for (let i = 0; i<movie.length; i++) {
        //     document.getElementsByClassName("BmovieDisplay")[i].classList.add("getinanimation")
        //     if (i == movie.length-1) {
        //         console.log("JAS")
        //         dis.loadedmovielenght += movie.length;
        //         if (dis.pagesToLoad < 3) {
        //             dis.pagesToLoad += 1;
        //             dis.getMovies("", dis.pagesToLoad);
        //         }
        //     }
        // }


        if (window.location.hash == "#browse") {
            for (let i = 0; i<document.getElementsByClassName("dada"+pagenr+"").length; i++) {
                setTimeout(function(){ 
                    if (window.location.hash == "#browse") {
                    document.getElementsByClassName("dada"+pagenr+"")[i].style.opacity = 1;
                    }
                 }, 100);
                // document.getElementsByClassName("BmovieDisplay")[i].style.transition = "1s";
                // document.getElementsByClassName("BmovieDisplay")[i].style.opacity = 1;
            }
            // if (document.getElementsByClassName("BmovieDisplay")[0] != "undefined") {
            //     for (let i = dis.loadedmovielenght; i<(dis.loadedmovielenght+movie.length); i++) {
            
            //         setTimeout(function(){ document.getElementsByClassName("BmovieDisplay")[i].style.opacity = 1; }, 300);
            //         // document.getElementsByClassName("BmovieDisplay")[i].style.transition = "1s";
            //         // document.getElementsByClassName("BmovieDisplay")[i].style.opacity = 1;
            //     }
            // }

            // console.log(document.getElementsByClassName("BmovieDisplay")[i])
    
            dis.loadedmovielenght += movie.length;

            if (!dis.nomoremovies) {

                document.getElementById("moviedisplaywrap").appendChild(document.getElementById("windowchecker"));

            if (document.getElementById("windowchecker").offsetTop < window.innerHeight) {
                // var element = document.getElementById("windowchecker");
                // element.parentNode.removeChild(element);
                dis.pagesToLoad += 1;
                if (!input) {
                    dis.getMovies(document.getElementById("Bgenre").value, dis.pagesToLoad, false, document.getElementById("Bsortby").value);
                } else {
                    dis.sarchmovie(dis.pagesToLoad);
                }
                // console.log(document.getElementById("Bgenre").value, dis.pagesToLoad, false, document.getElementById("Bsortby").value);
            } else {
                document.getElementById("windowchecker").style.opacity = 1;
            }
        dis.WW = true;
            }
        }
        // document.getElementsByClassName("BmovieDisplay")[5].classList.add("getinanimation")
    })
    dis.proppersize(false);
    }


    getMovies(Pgenre, pagenr, resetloadedarray, sortby) {
        this.mode = 1;
        whichmode = this.mode;
        // if (resetloadedarray) {
        //     this.loadedmovielenght = 0;
        // }
      if (!pagenr) {
        pagenr = 1;
      }
      this.pagesToLoad = pagenr;
    //   document.getElementById("moviedisplaywrap").style.transition = "0s";
    //   document.getElementById("moviedisplaywrap").style.opacity = 0;
      let dis = this
              let pickedgenre = Pgenre;
              let pickedgenreId;
              fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
              .then((response) => {
                  return response.json();
              })
              .then(function(data) {
                  for (let i = 0; i<data.genres.length; i++) {
                      if (data.genres[i].name == pickedgenre) {
                          pickedgenreId = data.genres[i].id;
                        //   console.log(data.genres[i].id)
                      }
                  }
                  dis.loadMovies(pickedgenreId, dis.pagesToLoad, sortby, false);
              }
  
              )
    }


    proppersize(da) {
        let dis = this;
        let Mwidth = ((document.getElementById("moviedisplaywrap").clientWidth)-0.5)/this.rows
        let rowfix = 0;
        if (Mwidth > 160) {
            if (((document.getElementById("moviedisplaywrap").clientWidth)-0.5)/(this.rows+1) > 150) {
                rowfix = 1
            }
        }
        if (Mwidth < 150) {
            if (((document.getElementById("moviedisplaywrap").clientWidth)-0.5)/(this.rows+1) < 170) {
                rowfix = -1
            }
        }
        this.rows += rowfix;
        let Mheight = Mwidth+(Mwidth/2)
        if (rowfix != 0) {
            setTimeout(function(){ dis.proppersize(true); }, 5);
        } else {
            da = false;
        }

        if (this.ww < document.getElementById("moviedisplaywrap").clientWidth-100) {
            da = true;
        }
        if (this.ww > document.getElementById("moviedisplaywrap").clientWidth+100) {
            da = true;
        }
        

        if (!da) {
        document.styleSheets[0].rules[0].style.width = ""+Mwidth+"px"
        document.styleSheets[0].rules[0].style.height = ""+Mheight+"px"
        }

        

        if(dis.WW && !dis.nomoremovies) {
            if (document.getElementById("windowchecker")) {
                if (document.getElementById("windowchecker").offsetTop < window.innerHeight) {
                    dis.WW = false;
                    dis.pagesToLoad += 1;
                    if (dis.mode == 1) {
                        dis.getMovies(document.getElementById("Bgenre").value, dis.pagesToLoad, false, document.getElementById("Bsortby").value);
                    } else {
                        dis.sarchmovie(dis.pagesToLoad);
                    }
                }

            }
        }


        // setTimeout(function () {
        //     console.log(document.styleSheets[0])
        // }, 1000)



        // if (((document.getElementById("moviedisplaywrap").clientWidth)-0.5)/(this.rows+1) > 170 || ((document.getElementById("moviedisplaywrap").clientWidth)-0.5)/(this.rows+1) < 150) {
        //     this.proppersize()
        // }
        // document.styleSheets[0].rules[114].style.width = ""+Mwidth+"px"
        // document.styleSheets[0].rules[114].style.height = ""+Mheight+"px"
        // else {
        //     console.log("dawdwad")
        // }
        this.ww = document.getElementById("moviedisplaywrap").clientWidth;
    }


    loadMoreOnScroll(){
            if(this.WW && !this.nomoremovies) {
                if (document.getElementById("windowchecker").offsetTop < (window.innerHeight+window.pageYOffset)) {
                    // console.log(this.WW)
                    this.WW = false;
                    // var element = document.getElementById("windowchecker");
                    // element.parentNode.removeChild(element);
                    this.pagesToLoad += 1;
                    if (this.mode == 1) {
                        this.getMovies(document.getElementById("Bgenre").value, this.pagesToLoad, false, document.getElementById("Bsortby").value);
                    } else {
                        this.sarchmovie(this.pagesToLoad);
                    }
                }
            }
    }
    


    displayolay(da) {
        this.hoverthing = event.target.children[1]
        if (document.getElementsByClassName("showolay")) {
            for (let oshow of document.getElementsByClassName("showolay")) {
                oshow.classList.remove("showolay")
            }
        }
        this.hoverthing.classList.add("showolay")
    }

    hideolay(da) {
        for (let oshow of document.getElementsByClassName("showolay")) {
            oshow.classList.remove("showolay")
        }
    }

    sarchmovie(pagenr) {
        this.mode = 2;
        whichmode = this.mode;
        if (!pagenr) {
            pagenr = 1;
          }
        this.pagesToLoad = pagenr;
        this.loadMovies(false, this.pagesToLoad, false, document.getElementById("searchmovieBp").value);
    }


    
    showselectedmovie(movieID) {
        let overlay = document.createElement("div")
        overlay.classList.add("overlayBrowse")
        document.querySelector("body").style.filter = "blur(2px)"
        document.querySelector("html").append(overlay)
        Promise.resolve(getMovie.getmoviefromID(movieID)).then(function(movie) {
            // console.log(movie)
            let convertedRating = 100-(movie.vote_average*10)
        overlay.innerHTML = `
        <div onclick="hideselectedmovie()">
        <div id="Bmoviea" onclick="hideselectedmovie()">
        <div id="fdimg" style="background: url(${movie.backdrop_path})"></div>
        <div id="fdinf">
            <h2>${movie.title}</h2>
            <p>${movie.release_date.slice(0,4)} ${movie.genre}</p>
            <div id="fdline"></div>
            <p id="fddesc">${movie.overview}</p>
            <div id="fdrating">
            <img alt="rating" id="mstar" src="./icons/stars.svg" style="clip-path: inset(0px ${convertedRating}% 0px 0%);">
                <img alt="rating" id="bstar" src="./icons/stars.svg">
            </div>
        </div>
    </div>
        </div>
        </div>
        `
        })
    }

    hideselectedmovie() {
        document.querySelector("body").style.filter = "blur(0px)"
        document.querySelector("body").style.width = "100%"
        document.querySelector("html").removeChild(document.querySelector(".overlayBrowse"));
    }
}




export let whichmode;

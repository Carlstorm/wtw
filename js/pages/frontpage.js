export default class Frontpage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }

    template() {

        document.getElementById('content').innerHTML += /*html*/ `
        <section id="home" class="page pageswitchani">
        <div id="frontpageheader">
        <div id="overlay"></div>
        <div id="gengrewrap">
            <div class="genrebut" id="1" onclick="IntDGenre(1)"><p>Action</p> </div>
            <div class="genrebut" id="2" onclick="IntDGenre(2)"><p>Adventure</p></div>
            <div class="genrebut" id="3" onclick="IntDGenre(3)"><p>Sci-Fi</p></div>
            <div class="genrebut" id="4" onclick="IntDGenre(4)"><p>Fantasy</p></div>
            <div class="genrebut" id="5" onclick="IntDGenre(5)"><p>Drama</p></div>
            <div class="genrebut" id="6" onclick="IntDGenre(6)"><p>Comedy</p></div>
            <div class="genrebut" id="7" onclick="IntDGenre(7)"><p>Horror</p></div>
            <div class="genrebut" id="8" onclick="IntDGenre(8)"><p>Documentary</p></div>
        </div>
  
        <div id="tvwrap">
            <img src="images/tvframe.png">
            <video width="auto" height="240" id="vid" allow="autoplay" muted="true">
                <source src="./video/tvframe.mp4" type="video/mp4">
              </video>
        </div>
  
        <div id="bgwrap">
            <div id="starlayer"></div>
            <div id="spacebg"></div>
        </div>
    </div>
  
    <section id="fsection1" onload="fdchange('next')">
        <div id="fdarrowL" onclick="fdchange('prev')"></div>
        <!-- <h2 id="p1head">Discover Movie</h2> -->
        <div id="fdiscovercontainer">
            <div id="Dmoviea">
                <div id="fdimg"></div>
                <div id="fdinf">
                    <h2></h2>
                    <p></p>
                    <div id="fdline"></div>
                    <p id="fddesc"></p>
                    <div id="fdrating">
                        <img alt="rating" id="mstar" src="./icons/stars.svg">
                        <img alt="rating" id="bstar" src="./icons/stars.svg">
                    </div>
                </div>
            </div>
  
            <div id="DmovieaNext">
                <div id="fdimg"></div>
                <div id="fdinf">
                    <h2 id="testtitle"></h2>
                    <p></p>
                    <div id="fdline"></div>
                    <p id="fddesc"></p>
                    <div id="fdrating">
                        <img alt="rating" id="mstar" src="./icons/stars.svg">
                        <img alt="rating" id="bstar" src="./icons/stars.svg">
                    </div>
                </div>
            </div>
        </div>
  
        <div id="fdarrowR" onclick="fdchange('next')"></div>
        <div id="DIscoverbut" onclick="IntDGenre(0)"><p>Discover</p></div>
    </section>
    <section id="fsection2">
        <h2 id="p2head">Browse movies</h2>
        <input id="searchmoviefp" onkeyup="FPsearchfunk()">
        <div id="ebox">
            <div id="genreoptionFp" class="gfhover">
                <div class="gfhover" id="boxboi">
                    <div class="gfhover gobut active" id="allgenre" onclick="fbGo()" data-value="All">
                        <p>All Genres</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover gobut" onclick="fbGo()" data-value="Action">
                        <p>Action</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover gobut" onclick="fbGo()" data-value="Adventure">
                        <p>Adventure</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover gobut" onclick="fbGo()" data-value="Science Fiction">
                        <p>Sci-Fi</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover gobut" onclick="fbGo()" data-value="Fantasy">
                        <p>Fantasy</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover gobut" onclick="fbGo()" data-value="Drama">
                        <p>Drama</p>
                        </div>
                        <div class="mbreakerline gfhover"></div>
                        <div class="gfhover gobut" onclick="fbGo()" data-value="Comedy">
                            <p>Comedy</p>
                            </div>
                            <div class="mbreakerline gfhover"></div>
                            <div class="gfhover gobut" onclick="fbGo()" data-value="Horror">
                                <p>Horror</p>
                                </div>
                                <div class="mbreakerline gfhover"></div>
                                <div class="gfhover gobut" onclick="fbGo()" data-value="Documentary">
                                    <p>Documentary</p>
                                    </div>
                </div>
                <div id="pwrap">
                    <p id="genrepinf">Genre: All</p>
                </div>
               
            </div>
            <div id="sortoptionFp">
                <div class="gfhover" id="boxboi2">
                    <div class="gfhover sobut active" onclick="fbSo()" data-value="popularity.desc">
                        <p>Porpularity</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover sobut" onclick="fbSo()" data-value="vote_average.desc">
                        <p>Ratings</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover sobut" onclick="fbSo()" data-value="primary_release_date.desc">
                        <p>Release date</p>
                        </div>
                    <div class="mbreakerline gfhover"></div>
                    <div class="gfhover sobut" onclick="fbSo()" data-value="original_title.desc">
                        <p>Title</p>
                        </div>
                </div>
                <div id="pwrap2">
                    <p id="sortinf">Sort by: </p>
                </div>
            </div>
        </div>
        <div id="fbrowseowrap">
  
            <div class="bbut" id="Gbut"><p>Genre</p></div>
            <div class="bbut" id="Sbut"><p>Sort by</p></div>
  
        </div>
        <div id="Browsbut" onclick="Intbrowse()"><p>Browse</p></div>
    </section>
    <section id="fsection3">
        <div id="fs3wrap">
            <div id="fs3pic"></div>
            <div>
                <h2 id="doskrift">Cant decide?</h2>
                <h2 id="tryskrift">Try the movie picker!</h2>
            <p>Are you having trouble picking a movie? or do you simply not want the responibility or devistating guilt the wrong choice might entail? either way let the computer choose for you and blame the algorithm if the movie sucks!</p>
            
            </div>
        </div>
        <div id="dbut"><p>Movie Picker</p></div>
    </section>
    </section>
        `;
      this.addsvg();
    }


    addsvg() {
        for (let i=0; i<document.getElementsByClassName("gobut").length; i++) {
            document.getElementsByClassName("gobut")[i].innerHTML += `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 27.1 27.1" style="enable-background:new 0 0 27.1 27.1;" xml:space="preserve">
       <g>
           <path class="st1" d="M13.5,0.5c2.7,0,5.4,0,8.2,0c2,0,3.5,1,4.4,2.7c0.3,0.7,0.5,1.4,0.5,2.1c0,5.4,0,10.9,0,16.3
               c0,2.5-1.9,4.6-4.4,4.9c-0.2,0-0.4,0-0.5,0c-5.4,0-10.8,0-16.3,0c-2.3,0-4.3-1.6-4.8-3.9c-0.1-0.3-0.1-0.7-0.1-1
               c0-5.5,0-10.9,0-16.4c0-2.5,1.9-4.6,4.4-4.8c0.2,0,0.4,0,0.6,0C8.1,0.5,10.8,0.5,13.5,0.5z M13.5,2.5c-2.7,0-5.4,0-8.2,0
               c-1.6,0-2.9,1.3-2.9,2.9c0,5.4,0,10.9,0,16.3c0,0.7,0.3,1.4,0.8,1.9c0.6,0.7,1.4,0.9,2.2,0.9c5.4,0,10.7,0,16.1,0
               c0.1,0,0.1,0,0.2,0c1.6,0,2.8-1.3,2.8-2.9c0-5.4,0-10.9,0-16.3c0-0.2,0-0.4-0.1-0.6c-0.3-1.4-1.5-2.3-2.9-2.3
               C18.9,2.5,16.2,2.5,13.5,2.5z"/>
           <path class="st2" d="M7,13.3c0.3,0,0.5,0.1,0.7,0.3c1.1,1.1,2.2,2.2,3.3,3.3c0.3,0.3,0.3,0.3,0.5,0c1.3-2,2.7-4,4-5.9
               c1.2-1.8,2.4-3.5,3.6-5.3C19.4,5.1,20,5,20.5,5.3C21,5.7,21.5,6,22.1,6.4c0.5,0.3,0.6,0.9,0.3,1.4c-0.6,0.9-1.2,1.8-1.8,2.7
               c-1.3,2-2.7,4-4,5.9c-1.2,1.8-2.4,3.5-3.6,5.3c-0.3,0.4-0.7,0.7-1.3,0.7c-0.4,0-0.8-0.2-1.1-0.5c-0.9-0.9-1.8-1.8-2.7-2.7
               c-0.9-0.9-1.9-1.9-2.8-2.8c-0.4-0.4-0.5-1,0-1.4c0.5-0.5,0.9-0.9,1.4-1.4C6.5,13.3,6.7,13.3,7,13.3z"/>
       </g>
       </svg>
            `;
        }

        for (let i=0; i<document.getElementsByClassName("sobut").length; i++) {
            document.getElementsByClassName("sobut")[i].innerHTML += `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 27.1 27.1" style="enable-background:new 0 0 27.1 27.1;" xml:space="preserve">
       <g>
           <path class="st1" d="M13.5,0.5c2.7,0,5.4,0,8.2,0c2,0,3.5,1,4.4,2.7c0.3,0.7,0.5,1.4,0.5,2.1c0,5.4,0,10.9,0,16.3
               c0,2.5-1.9,4.6-4.4,4.9c-0.2,0-0.4,0-0.5,0c-5.4,0-10.8,0-16.3,0c-2.3,0-4.3-1.6-4.8-3.9c-0.1-0.3-0.1-0.7-0.1-1
               c0-5.5,0-10.9,0-16.4c0-2.5,1.9-4.6,4.4-4.8c0.2,0,0.4,0,0.6,0C8.1,0.5,10.8,0.5,13.5,0.5z M13.5,2.5c-2.7,0-5.4,0-8.2,0
               c-1.6,0-2.9,1.3-2.9,2.9c0,5.4,0,10.9,0,16.3c0,0.7,0.3,1.4,0.8,1.9c0.6,0.7,1.4,0.9,2.2,0.9c5.4,0,10.7,0,16.1,0
               c0.1,0,0.1,0,0.2,0c1.6,0,2.8-1.3,2.8-2.9c0-5.4,0-10.9,0-16.3c0-0.2,0-0.4-0.1-0.6c-0.3-1.4-1.5-2.3-2.9-2.3
               C18.9,2.5,16.2,2.5,13.5,2.5z"/>
           <path class="st2" d="M7,13.3c0.3,0,0.5,0.1,0.7,0.3c1.1,1.1,2.2,2.2,3.3,3.3c0.3,0.3,0.3,0.3,0.5,0c1.3-2,2.7-4,4-5.9
               c1.2-1.8,2.4-3.5,3.6-5.3C19.4,5.1,20,5,20.5,5.3C21,5.7,21.5,6,22.1,6.4c0.5,0.3,0.6,0.9,0.3,1.4c-0.6,0.9-1.2,1.8-1.8,2.7
               c-1.3,2-2.7,4-4,5.9c-1.2,1.8-2.4,3.5-3.6,5.3c-0.3,0.4-0.7,0.7-1.3,0.7c-0.4,0-0.8-0.2-1.1-0.5c-0.9-0.9-1.8-1.8-2.7-2.7
               c-0.9-0.9-1.9-1.9-2.8-2.8c-0.4-0.4-0.5-1,0-1.4c0.5-0.5,0.9-0.9,1.4-1.4C6.5,13.3,6.7,13.3,7,13.3z"/>
       </g>
       </svg>
            `;
        }
    }
  }


export default class discpage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }

    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="discover" class="page pageswitchani">
       <div id="searchbar">
       <p class="Dgenre" onclick="Dgenrechange()" data-value="All">All Genres</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Action">Action</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Adventure">Adventure</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Science Fiction">Sci-Fi</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Fantasy">Fantasy</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Drama">Drama</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Comedy">Comedy</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Horror">Horror</p>
       <p class="Dgenre" onclick="Dgenrechange()" data-value="Documentary">Documentary</p>
       </div>
       <div id="searchbarBLB"></div>
      <section id="dadadada"></section>
      <div id="pageswitchwrap">
      <div id="pageback" onclick="pagenrchange(-1);"><img src=".././icons/arrow.svg"></div>
      <div id="pagenr">1</div>
      <div id="pagefowards" onclick="pagenrchange(1);"><img src=".././icons/arrow.svg"></div>
      </div>
      </section>
            `;

        }


    
    
    
  }


//   <div class="Dcontentwrap">
//   <div class="Dcontent">
//     <div class="Dimg"></div>
//     <div class="Dinf">
//       <h2></h2>
//       <p></p>
//       <div id="fdline"></div>
//       <p id="fddesc"></p>
//       <div id="fdrating">
//       <img alt="rating" id="mstar" src="./icons/stars.svg">
//       <img alt="rating" id="bstar" src="./icons/stars.svg">
//     </div>
//     </div>
//   </div>
// </div>
export default class bropage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }

    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="browse" class="page pageswitchani" onclick="clickedMovie()">
       <div id="searchbarB">
       <div id="menuwrap">
       <div>
       <select id="Bgenre" name="Genres" onchange="testfuck()" onclick="resetsearch()">
         <option value="All">All</option>
          <option value="Action">Action</option>
         <option value="Adventure">Adventure</option>
         <option value="Science Fiction">Sci-Fi</option>
         <option value="Drama">Drama</option>
         <option value="Comedy">Comedy</option>
         <option value="Horror">Horror</option>
         <option value="Documentary">Documentary</option>
         </select>
       </div>
       <div>
       <select id="Bsortby" name="Sort By" onchange="testfuck()" onclick="resetsearch()">
       <option value="popularity.desc">Popularity</option>
       <option value="vote_average.desc">Ratings</option>
       <option value="primary_release_date.desc">Year</option>
       <option value="original_title.desc">Title</option>
      </select>
       </div>
       </div>
      <div id="searchwrap">
      <div id="cancelsearch" onclick="cancelsearch()" >X</div>
       <input id="searchmovieBp" onkeyup="searchfunk()"></input>
       </div>
       </div>
       <div id="searchbarBLB"></div>
      <section id="moviedisplaywrap">
      <div id="windowchecker"></div>
      </section>
      </section>
            `;

        }


    
    
    
  }


//   Choose from one of the many available sort options.

// Allowed Values: , popularity.asc, popularity.desc, release_date.asc, 
// release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, 
// primary_release_date.desc, original_title.asc, original_title.desc, 
// vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc
// default: popularity.desc

let pickedGenre;
let initrun = true;
let page = 1;

// pages
import Frontpage from "./js/pages/frontpage.js";
import discpage from "./js/pages/discoverpage.js"
import bropage from "./js/pages/browsepage.js"
import pickerPage from "./js/pages/pickerpage.js"


// services
import SpaService from "./js/Services/spa.js"
import FrontPanimation from "./js/Services/FrontPanimations.js"
import Discoverservice from "./js/Services/DiscoverService.js"
import Browseservice from "./js/Services/BrowseService.js"
import {whichmode} from "./js/Services/BrowseService.js"
import pickerseriveces from "./js/Services/pickerService.js"

// libraries
import * as THREE from './js/three.module.js';

// inits
let Pickerseriveces = new pickerseriveces();
let PickerPage = new pickerPage();
let spaService = new SpaService();
let tredstuff = new FrontPanimation();
let fronpage = new Frontpage();
let Discpage = new discpage();
let Bropage = new bropage();
let discoverservice = new Discoverservice();
let browseservice = new Browseservice();

spaService.init();
tredstuff.threejsstuff(THREE);
tredstuff.fdchange("next");

tredstuff.Fsection2chekcfunk(null, "gobut", "genrepinf");
tredstuff.Fsection2chekcfunk(null, "sobut", "sortinf");


window.pickersearch = () => {
    // console.log(event.target.value)
    Pickerseriveces.searchpick(event.target.value)
}


// events

window.clickedMovie = () => {
    if (event.target.classList.contains("BmovieDisplay")) {
        browseservice.showselectedmovie(event.target.id);

    }
}

window.hideselectedmovie = () => {
    browseservice.hideselectedmovie();
}


window.pageChange = () => {
    document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
    spaService.pageChange();
}
window.onresize  = () => {
    tredstuff.FixRezise();
    if (window.location.hash == "#browse") {
    browseservice.proppersize();
    }
}

window.hoverLmovie = () => browseservice.hideolay("ww");
window.hovermovie = () => browseservice.displayolay("aa");

window.fdchange = (val) => tredstuff.fdchange(val);

window.onscroll = () => {
        if (window.location.hash == "#browse") {
            browseservice.loadMoreOnScroll();
        }
}

window.searchfunk = () => {
    if (event.keyCode == 13) {
        if (document.getElementById("searchmovieBp").value != "") {
        document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
        browseservice.sarchmovie();
        } else {
            if (whichmode == 2) {
                document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
                browseservice.getMovies(document.getElementById("Bgenre").value, false, true, document.getElementById("Bsortby").value);  
            }
        }
    }
    if (document.getElementById("searchmovieBp").value != "") {
        document.getElementById("cancelsearch").style.display = "inherit"
    } else {
        document.getElementById("cancelsearch").style.display = "none"
    }
}


window.FPsearchfunk = () => {
    if (document.getElementById("searchmoviefp").value != "") {
    if (event.keyCode == 13) {
            document.getElementById("searchmovieBp").value = document.getElementById("searchmoviefp").value
            document.getElementById("cancelsearch").style.display = "inherit"
        window.location.href = "#browse"
    }
    }
}

window.cancelsearch = () => {
    document.getElementById("searchmovieBp").value = ""
    document.getElementById("cancelsearch").style.display = "none"
    if (whichmode == 2) {
        document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
        browseservice.getMovies(document.getElementById("Bgenre").value, false, true, document.getElementById("Bsortby").value);
    } 
}

window.resetsearch = () => {
    if (whichmode == 2) {
        document.getElementById("searchmovieBp").value = "";
        document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
        browseservice.getMovies(document.getElementById("Bgenre").value, false, true, document.getElementById("Bsortby").value);
    }
}

document.getElementById("fsection2").onmouseover = () => tredstuff.Fsection2menufunk(event);
window.fbGo = () => tredstuff.Fsection2chekcfunk(event, "gobut", "genrepinf");
window.fbSo = () => tredstuff.Fsection2chekcfunk(event, "sobut", "sortinf");

window.IntDGenre = (da) => {
    pickedGenre = da;
    window.location.href = "#discover"
    discoverservice.getMovies(document.getElementsByClassName("Dgenre")[pickedGenre]);
}

window.Intbrowse = () => {
    if (document.getElementById("searchmoviefp").value == "") {
        document.getElementById("Bgenre").value = document.getElementsByClassName("active")[0].getAttribute("data-value")
        document.getElementById("Bsortby").value = document.getElementsByClassName("active")[1].getAttribute("data-value")
    } else {
        document.getElementById("searchmovieBp").value = document.getElementById("searchmoviefp").value
        document.getElementById("cancelsearch").style.display = "inherit"
    }
    window.location.href = "#browse"
} 


window.testfuck = () => {
    document.getElementById("moviedisplaywrap").innerHTML = `<div id="windowchecker"></div>`;
    browseservice.getMovies(document.getElementById("Bgenre").value, false, true, document.getElementById("Bsortby").value);
    console.log(document.getElementById("Bgenre").value)
}





// Discover page 
window.Dgenrechange = () => {
    page = 1;
    discoverservice.getMovies(event.target);
}
window.pagenrchange = (la) => {
    if ((page + la) > 0) {
        page += la
    }
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      })
    discoverservice.getMovies(document.getElementsByClassName("activeNi")[1], page);
}

// pagespecifik onloadfunks
export default function loadpagespecifikfunks(pid) {
    page = 1;
    // setTimeout(function() { document.getElementById(pid).classList.add("pageswitchani");  },50)
    console.log("run")
    if (initrun) {
        initrun = false;
    } else if (pid == "home") {
        tredstuff.Animate();
    }
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      })
        if (pid == "home") {
        document.querySelector("nav").style.color = "white"
        document.getElementById("logow").style.fill = "white"
        } else {
            if (pid == "discover") {
            if (pickedGenre == null) {
                pickedGenre = 0
                discoverservice.getMovies(document.getElementsByClassName("Dgenre")[0]);
            }
        }

        if (pid == "browse") {
            if (whichmode == 1 || document.getElementById("searchmovieBp").value == "") {
            browseservice.getMovies(document.getElementById("Bgenre").value, false, true, document.getElementById("Bsortby").value);
            } else {
            browseservice.sarchmovie();
            }
        }
            document.querySelector("nav").style.color = "black"
            document.getElementById("logow").style.fill = "black"
        }

    

}
